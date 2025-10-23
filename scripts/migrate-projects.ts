import { getPayload } from 'payload'
import config from '../src/payload.config'

/**
 * Migration script to populate the Project collection with existing projects
 * Run this script after setting up your database and Payload CMS
 */

const projects = [
  {
    title: "Ay Not Dead － E-commerce",
    description: "A fully headless e-commerce application featuring a Medusa backend and Payload CMS for content management, built with a focus on scalability, modular design, and smooth user experience.",
    year: 2025,
    tech: [
      { technology: "Next.js" },
      { technology: "TypeScript" },
      { technology: "Medusa" },
      { technology: "Payload CMS" }
    ],
    links: {
      github: "https://github.com/DrunkOldDog/ecommerce-medusa-payload-nextjs",
      live: null,
      documentation: null,
      design: null
    },
    status: "completed",
    published: true,
    featured: true,
    order: 1
  },
  {
    title: "Instafollows",
    description: "A fullstack web app that tracks your Instagram followers and unfollows, helping you monitor changes in your audience.",
    year: 2025,
    tech: [
      { technology: "Next.js" },
      { technology: "TypeScript" },
      { technology: "Tailwind CSS" },
      { technology: "Supabase" }
    ],
    links: {
      github: "https://github.com/DrunkOldDog/insta-follows",
      live: "https://instafollows.vercel.app",
      documentation: null,
      design: null
    },
    status: "completed",
    published: true,
    featured: true,
    order: 2
  },
  {
    title: "Menta Bolivia",
    description: "A fullstack web app for a marketing agency, powered by a headless CMS for seamless content management.",
    year: 2025,
    tech: [
      { technology: "Next.js" },
      { technology: "TypeScript" },
      { technology: "Tailwind CSS" },
      { technology: "Strapi" }
    ],
    links: {
      github: null,
      live: "https://menta-bo.vercel.app",
      documentation: null,
      design: null
    },
    status: "completed",
    published: true,
    featured: true,
    order: 3
  },
  {
    title: "Spotify Playlist Analytics",
    description: "An app that tracks your Spotify playlists and highlights songs losing popularity, helping you keep your playlists fresh and up to date.",
    year: 2024,
    tech: [
      { technology: "Next.js" },
      { technology: "JavaScript" },
      { technology: "Spotify API" },
      { technology: "Chakra UI" }
    ],
    links: {
      github: "https://github.com/DrunkOldDog/spotify-playlist-analytics",
      live: "https://spotify-playlist-analytics.vercel.app",
      documentation: null,
      design: null
    },
    status: "completed",
    published: true,
    featured: false,
    order: 4
  }
]

async function migrateProjects() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  
  console.log('Starting project migration...')
  
  for (const projectData of projects) {
    try {
      // Generate slug from title
      const slug = projectData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      
      // Check if project already exists
      const existingProject = await payload.find({
        collection: 'projects' as any,
        where: {
          slug: {
            equals: slug
          }
        }
      })
      
      if (existingProject.docs.length > 0) {
        console.log(`Project "${projectData.title}" already exists, skipping...`)
        continue
      }
      
      // Create the project
      const project = await payload.create({
        collection: 'projects' as any,
        data: {
          ...projectData,
          slug,
          // featuredImage is now optional, so we don't need to provide it
        } as any
      })
      
      console.log(`✅ Created project: ${project.title}`)
    } catch (error) {
      console.error(`❌ Error creating project "${projectData.title}":`, error)
      if (error instanceof Error) {
        console.error('Error details:', error.message)
      }
    }
  }
  
  console.log('Project migration completed!')
  process.exit(0)
}

// Run the migration
await migrateProjects().catch((error) => {
  console.error('Migration failed:', error)
  process.exit(1)
})
