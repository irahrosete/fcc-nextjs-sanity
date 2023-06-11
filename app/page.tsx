import { getProjects } from '@/sanity/utils'

const Home = async () => {
  const projects = await getProjects()
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          {project.name}
        </div>
      ))}
    </div>
  )
}

export default Home
