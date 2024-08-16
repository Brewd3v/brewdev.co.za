import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface Role {
  order: number
  company: string
  title: string
  logo: SanityImageSource
  start: string
  end: string
}
