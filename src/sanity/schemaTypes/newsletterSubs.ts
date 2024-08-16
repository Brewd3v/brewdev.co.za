import {ConfettiIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const newsletterSubs = defineType({
  name: 'newsletterSubs',
  title: 'Newsletter',
  type: 'document',
  icon: ConfettiIcon,
  fields: [
    defineField({
      name: 'email',
      type: 'string',
    })
  ],
});