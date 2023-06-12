import { getProject } from "@/sanity/utils"

type Props = {
  params: {project: string}
}

const Project = async ({ params }: Props) => {
  const slug = params.project
  const project = await getProject(slug)
  return ( 
    <div className='max-w-3xl mx-auto py-20'>
    <header className='flex items-center justify-between'>
      <h1 className='bg-gradient-to-r 
          from-blue-500 
          to-red-400 
          bg-clip-text 
          text-transparent
          text-5xl
          drop-shadow
          font-extrabold'>
        {project.name}
      </h1>
      <a href={project.url} 
        title='View Project' 
        target='_blank' 
        rel='noopener noreferrer'
        className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-100 hover:text-blue-400 transition'  
      >
        View Project
      </a>
    </header>

    {/* {content goes here} */}
    {/* {image goes here} */}
    
    </div>
  )
}

export default Project