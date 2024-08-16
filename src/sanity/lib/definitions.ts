import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Role {
  order: number
  company: string
  title: string
  logo: SanityImageSource
  start: string
  end: string
}

export interface Post {
  date: string
  slug: string
  title: string
  description: string | null
}

export interface Project {
  name: string
  description: string | null
  link: {
    href: string
    label: string | null
  }
  logo: SanityImageSource | null
}
