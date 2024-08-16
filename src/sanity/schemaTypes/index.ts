import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { workHistory } from './workHistory'
import { newsletterSubs } from './newsletterSubs'
import { projects } from './projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    projects,
    workHistory,
    newsletterSubs,
  ],
}
