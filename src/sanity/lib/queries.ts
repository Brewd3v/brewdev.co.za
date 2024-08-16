import { client } from './client'
import { Role } from './definitions'

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
