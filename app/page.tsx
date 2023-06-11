import { getProjects } from '@/sanity/utils'
import Image from 'next/image'
import Link from 'next/link'

const Home = async () => {
  const projects = await getProjects()
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='text-9xl font-extrabold pt-20'>Hello! I am 
        <span className='bg-gradient-to-r 
          from-blue-500 
          to-red-400 
          bg-clip-text 
          text-transparent'> Irah
        </span>.
      </h1>
      <p className='mt-2 text-3xl'>I&apos;m a designer and a developer based in Sydney. Check out my latest works.</p>
      <h2 className='mt-24 font-bold text-4xl'>My projects</h2>
      <div className='mt-5 grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} 
            className='border borger-gray-200 rounded-lg p-2 hover:scale-105 hover:border-gray-500 transition'>
            {project.image && (
              <Image 
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='mt-2 font-extrabold bg-gradient-to-r 
              from-blue-500 
              to-red-400 
              bg-clip-text 
              text-transparent'>{project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
