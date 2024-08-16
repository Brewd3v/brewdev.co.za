import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const workHistory = defineType({
  name: 'workexperience',
  title: 'Work Experience',
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
      name: 'display_listing',
      title: 'Display Listing',
      type: 'boolean',
    },
    {
      name: 'jobtitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Company Logo',
      name: 'companyLogo',
      type: 'image',
    },
    {
      title: 'Start date',
      name: 'startDate',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'End date',
      name: 'endDate',
      type: 'datetime',
      validation: (Rule) => Rule.required().min(Rule.valueOfField('startDate')),
    },
  ],
})
