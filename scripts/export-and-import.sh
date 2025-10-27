#!/bin/bash

# Export from local MongoDB and import to Atlas using mongosh
# This works with standalone MongoDB instances

echo "🚀 Starting MongoDB migration with mongosh..."

# Configuration
LOCAL_DB="mongodb://127.0.0.1:27017/portfolio"
ATLAS_DB="mongodb+srv://DrunkOldDog:Hx1eMuyDRCMeh34H@portfolio.kjpykt2.mongodb.net/?retryWrites=true&w=majority&appName=portfolio"
BACKUP_DIR="./mongodb-backup"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "📁 Created backup directory: $BACKUP_DIR"

# Collections to migrate
COLLECTIONS=("users" "payload-migrations" "payload-preferences" "media" "payload-locked-documents" "projects" "_projects_versions")

echo "📋 Collections to migrate: ${COLLECTIONS[*]}"

# Step 1: Export each collection
echo "📤 Exporting data from local MongoDB..."

for collection in "${COLLECTIONS[@]}"; do
    echo "Exporting collection: $collection"
    
    # Export to JSON
    mongosh "$LOCAL_DB" --quiet --eval "
        const data = db.$collection.find({}).toArray();
        print(JSON.stringify(data, null, 2));
    " > "$BACKUP_DIR/${collection}.json"
    
    # Check if export was successful
    if [ -s "$BACKUP_DIR/${collection}.json" ]; then
        echo "  ✅ Exported $collection"
    else
        echo "  ⚠️  No data found in $collection"
    fi
done

echo "✅ Export completed!"

# Step 2: Import to Atlas
echo "📥 Importing data to Atlas MongoDB..."

for collection in "${COLLECTIONS[@]}"; do
    if [ -s "$BACKUP_DIR/${collection}.json" ]; then
        echo "Importing collection: $collection"
        
        # Import to Atlas
        mongosh "$ATLAS_DB" --quiet --eval "
            // Clear existing data
            db.$collection.deleteMany({});
            
            // Read and insert data
            const fs = require('fs');
            const data = JSON.parse(fs.readFileSync('$BACKUP_DIR/${collection}.json', 'utf8'));
            
            if (data.length > 0) {
                const result = db.$collection.insertMany(data);
                print('Inserted ' + result.insertedCount + ' documents');
            } else {
                print('No documents to insert');
            }
        "
        
        echo "  ✅ Imported $collection"
    else
        echo "  ⚠️  Skipping empty collection: $collection"
    fi
done

echo "✅ Import completed!"

# Step 3: Verify migration
echo "🔍 Verifying migration..."

for collection in "${COLLECTIONS[@]}"; do
    echo "Verifying collection: $collection"
    
    LOCAL_COUNT=$(mongosh "$LOCAL_DB" --quiet --eval "db.$collection.countDocuments()" | tr -d '\r')
    ATLAS_COUNT=$(mongosh "$ATLAS_DB" --quiet --eval "db.$collection.countDocuments()" | tr -d '\r')
    
    echo "  Local: $LOCAL_COUNT documents"
    echo "  Atlas: $ATLAS_COUNT documents"
    
    if [ "$LOCAL_COUNT" -eq "$ATLAS_COUNT" ]; then
        echo "  ✅ Collection $collection migrated successfully"
    else
        echo "  ❌ Collection $collection has mismatched document counts"
    fi
done

echo ""
echo "🎉 Migration completed!"
echo "📊 Summary:"
echo "  - Source: $LOCAL_DB"
echo "  - Destination: $ATLAS_DB"
echo "  - Collections migrated: ${COLLECTIONS[*]}"
echo "  - Backup location: $BACKUP_DIR"
