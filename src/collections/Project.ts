import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'status', 'createdAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The main title of the project',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL-friendly version of the title',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief description of the project (used in cards and previews)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
      admin: {
        description: 'Detailed project explanation with rich text formatting',
      },
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Year the project was completed',
      },
      validate: (value: any) => {
        if (typeof value === 'number') {
          const currentYear = new Date().getFullYear()
          if (value < 2020 || value > currentYear + 1) {
            return `Year must be between 2020 and ${currentYear + 1}`
          }
        }
        return true
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'completed',
      options: [
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'In Progress',
          value: 'in-progress',
        },
        {
          label: 'Planning',
          value: 'planning',
        },
        {
          label: 'On Hold',
          value: 'on-hold',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tech',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Technologies used in this project',
      },
    },
    {
      name: 'links',
      type: 'group',
      fields: [
        {
          name: 'github',
          type: 'text',
          admin: {
            description: 'GitHub repository URL',
          },
        },
        {
          name: 'live',
          type: 'text',
          admin: {
            description: 'Live demo URL',
          },
        },
        {
          name: 'documentation',
          type: 'text',
          admin: {
            description: 'Documentation URL',
          },
        },
        {
          name: 'design',
          type: 'text',
          admin: {
            description: 'Design mockups or Figma URL',
          },
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Main project image (thumbnail)',
      },
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
      admin: {
        description: 'Additional project images',
      },
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Icon name or emoji for the feature',
          },
        },
      ],
      admin: {
        description: 'Key features of the project',
      },
    },
    {
      name: 'challenges',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
        },
        {
          name: 'solution',
          type: 'richText',
          required: true,
        },
      ],
      admin: {
        description: 'Technical challenges faced and how they were solved',
      },
    },
    {
      name: 'metrics',
      type: 'group',
      fields: [
        {
          name: 'linesOfCode',
          type: 'number',
          admin: {
            description: 'Approximate lines of code',
          },
        },
        {
          name: 'developmentTime',
          type: 'text',
          admin: {
            description: 'e.g., "3 months", "2 weeks"',
          },
        },
        {
          name: 'teamSize',
          type: 'number',
          admin: {
            description: 'Number of team members',
          },
        },
        {
          name: 'performance',
          type: 'group',
          fields: [
            {
              name: 'lighthouseScore',
              type: 'number',
              admin: {
                description: 'Lighthouse performance score (0-100)',
              },
            },
            {
              name: 'bundleSize',
              type: 'text',
              admin: {
                description: 'e.g., "245KB gzipped"',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: {
            description: 'SEO title (if different from main title)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: {
            description: 'SEO description',
          },
        },
        {
          name: 'keywords',
          type: 'array',
          fields: [
            {
              name: 'keyword',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            description: 'SEO keywords',
          },
        },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Whether this project should be visible on the frontend',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Whether this project should be featured prominently',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
  timestamps: true,
  versions: {
    drafts: true,
  },
}