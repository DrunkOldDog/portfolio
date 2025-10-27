# Project Collection Documentation

## Overview

The Project collection is a comprehensive content management system for portfolio projects, designed with scalability and rich content capabilities in mind. It supports both simple project listings and detailed project explanations with rich text formatting.

## Collection Structure

### Core Fields

#### Basic Information
- **title** (text, required): Main project title
- **slug** (text, required, unique): URL-friendly identifier (auto-generated from title)
- **description** (textarea, required): Brief project description for cards/previews
- **content** (richText, optional): Detailed project explanation with rich formatting
- **year** (number, required): Project completion year (validated: 2020-current+1)
- **status** (select, required): Project status (completed, in-progress, planning, on-hold)

#### Technology Stack
- **tech** (array, required): Technologies used in the project
  - Each item has a `technology` field (text, required)

#### Links
- **links** (group): Various project URLs
  - `github`: GitHub repository URL
  - `live`: Live demo URL
  - `documentation`: Documentation URL
  - `design`: Design mockups or Figma URL

#### Media
- **featuredImage** (upload, required): Main project thumbnail (relation to Media collection)
- **gallery** (array): Additional project images
  - `image`: Upload relation to Media collection
  - `caption`: Optional image caption

#### Content Enhancement
- **features** (array): Key project features
  - `title`: Feature name
  - `description`: Feature description
  - `icon`: Icon name or emoji
- **challenges** (array): Technical challenges and solutions
  - `title`: Challenge title
  - `description`: Challenge description (richText)
  - `solution`: Solution description (richText)

#### Metrics & Performance
- **metrics** (group): Project statistics
  - `linesOfCode`: Approximate lines of code
  - `developmentTime`: Development duration (e.g., "3 months")
  - `teamSize`: Number of team members
  - `performance` (group):
    - `lighthouseScore`: Lighthouse performance score (0-100)
    - `bundleSize`: Bundle size (e.g., "245KB gzipped")

#### SEO & Publishing
- **seo** (group): SEO optimization
  - `metaTitle`: Custom SEO title
  - `metaDescription`: SEO description
  - `keywords`: SEO keywords array
- **published** (checkbox): Frontend visibility
- **featured** (checkbox): Prominent display
- **order** (number): Display order (lower numbers first)

### Advanced Features

#### Access Control
- **Read**: Public access (allows frontend display)
- **Create/Update/Delete**: Authenticated users only

#### Content Management
- **Versions**: Draft support enabled
- **Timestamps**: Automatic created/updated tracking
- **Admin Interface**: 
  - Uses title as display name
  - Default columns: title, year, status, createdAt
  - Grouped under "Content" section

#### Validation
- **Year validation**: Must be between 2020 and current year + 1
- **Slug auto-generation**: Creates URL-friendly slugs from titles
- **Required fields**: Title, slug, description, year, status, tech, featuredImage

## Usage Examples

### Creating a New Project

```typescript
const newProject = await payload.create({
  collection: 'projects',
  data: {
    title: 'My Awesome Project',
    description: 'A brief description of the project',
    content: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Detailed project explanation...',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },
    year: 2025,
    status: 'completed',
    tech: [
      { technology: 'Next.js' },
      { technology: 'TypeScript' },
      { technology: 'Tailwind CSS' }
    ],
    links: {
      github: 'https://github.com/user/repo',
      live: 'https://example.com'
    },
    featuredImage: 'media-id-here',
    published: true,
    featured: true,
    order: 1
  }
})
```

### Querying Projects

```typescript
// Get all published projects
const publishedProjects = await payload.find({
  collection: 'projects',
  where: {
    published: {
      equals: true
    }
  },
  sort: 'order'
})

// Get featured projects
const featuredProjects = await payload.find({
  collection: 'projects',
  where: {
    and: [
      {
        published: {
          equals: true
        }
      },
      {
        featured: {
          equals: true
        }
      }
    ]
  },
  sort: 'order'
})

// Get project by slug
const project = await payload.find({
  collection: 'projects',
  where: {
    slug: {
      equals: 'my-awesome-project'
    }
  }
})
```

## Migration

### Running the Migration Script

1. Ensure your database is set up and Payload CMS is configured
2. Run the migration script:

```bash
npm run migrate:projects
```

This will populate your Project collection with the existing projects from your constants file.

### Manual Migration

If you prefer to migrate manually:

1. Access the Payload admin panel
2. Navigate to the Projects collection
3. Create new projects using the data from your constants file
4. Upload the corresponding images to the Media collection
5. Link the images to the projects

## Best Practices

### Content Strategy
1. **Use rich text content** for detailed project explanations
2. **Add challenges and solutions** to showcase problem-solving skills
3. **Include performance metrics** to demonstrate technical excellence
4. **Use SEO fields** for better search engine visibility

### Media Management
1. **Optimize images** before uploading
2. **Use descriptive alt text** for accessibility
3. **Create image galleries** to showcase project features
4. **Maintain consistent aspect ratios** for thumbnails

### Organization
1. **Use the order field** to control project display sequence
2. **Mark featured projects** for prominent display
3. **Keep status updated** to reflect current project state
4. **Use consistent naming** for technologies and features

## API Integration

### Frontend Usage

```typescript
// Fetch projects for portfolio page
const { data: projects } = await fetch('/api/projects?where[published][equals]=true&sort=order')

// Fetch single project
const { data: project } = await fetch('/api/projects?where[slug][equals]=project-slug')
```

### GraphQL Queries

```graphql
query GetProjects {
  Projects(where: { published: { equals: true } }, sort: "order") {
    docs {
      title
      description
      slug
      year
      tech {
        technology
      }
      links {
        github
        live
      }
      featuredImage {
        url
        alt
      }
    }
  }
}
```

## Troubleshooting

### Common Issues

1. **Slug conflicts**: Ensure slugs are unique across all projects
2. **Image uploads**: Verify Media collection is properly configured
3. **Rich text formatting**: Use the Lexical editor for proper rich text content
4. **Validation errors**: Check that all required fields are populated

### Performance Considerations

1. **Image optimization**: Use appropriate image sizes and formats
2. **Query optimization**: Use specific where clauses to limit results
3. **Caching**: Implement caching strategies for frequently accessed projects
4. **Pagination**: Use pagination for large project lists

## Future Enhancements

Potential improvements to consider:

1. **Categories/Tags**: Add project categorization
2. **Timeline**: Add project timeline/milestones
3. **Collaborators**: Add team member information
4. **Analytics**: Track project views and engagement
5. **Comments**: Add project feedback system
6. **Related Projects**: Suggest similar projects
7. **Export/Import**: Bulk project management tools
