import { Project } from "@/types/Project"
import { createClient, groq } from "next-sanity"

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECTID}`,
    dataset: 'production',
    apiVersion: '2023-06-10'
  })

  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset -> url,
      url,
      content
    }`
  )
}