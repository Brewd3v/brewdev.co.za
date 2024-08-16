import { client } from './client'
import { Post, Role } from './definitions'

export async function getExperience(): Promise<Role[]> {
  const exp =
    await client.fetch(`*[_type == "workexperience"] | order(order asc) {
      order,
      "title": jobtitle, 
      company, 
      location,
      "logo": companyLogo{
					asset->{
						...,
						metadata
					}
			},
      "start": startDate,
      "end" : endDate
  }`)
  return exp
}

export async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(`*[_type == "post"]{
      "date": _createdAt,
      "slug": slug.current,
      title,
      description
    
    }`)
  return posts
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const [post] =
    await client.fetch(`*[_type == "post" && slug.current == '${slug}']{
      "date": _createdAt,
      "slug": slug.current,
      title,
      description    
    }`)
  return post
}
