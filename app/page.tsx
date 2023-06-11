import { getProjects } from '@/sanity/utils'
import Image from 'next/image'

const Home = async () => {
  const projects = await getProjects()
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='text-7xl font-extrabold pt-20'>Hello! I am 
        <span className='bg-gradient-to-r 
          from-blue-500 
          to-red-400 
          bg-clip-text 
          text-transparent'> Irah
        </span>.
      </h1>
      <p className='mt-3 text-xl'>I&apos;m a designer and a developer based in Sydney. Check out some of my latest works.</p>
      <h2 className='mt-24 font-bold text-3xl'>My projects</h2>
      <div className='mt-5 grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div key={project._id} className='border borger-gray-200 rounded-lg p-3'>
            {project.image && (
              <Image 
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='font-extrabold bg-gradient-to-r 
              from-blue-500 
              to-red-400 
              bg-clip-text 
              text-transparent'>{project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
