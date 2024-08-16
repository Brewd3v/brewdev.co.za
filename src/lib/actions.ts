'use server'

import { client } from '@/sanity/lib/client'
import { redirect } from 'next/navigation'

export async function addToNewsletter(formData: FormData) {
  const doc = {
    _id: formData
      .get('email')
      ?.toString()
      .replace('@', '-')
      .replaceAll('.', '-'),
    _type: 'newsletterSubs',
    email: formData.get('email')?.toString(),
  }
  //   console.log(doc)
  try {
    await client.create(doc)
  } catch (error) {
    console.log('Error adding to newsletter')
  }
  redirect('/thank-you')
}
