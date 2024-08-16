import { DocumentTextIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export const projects = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Project Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
})
