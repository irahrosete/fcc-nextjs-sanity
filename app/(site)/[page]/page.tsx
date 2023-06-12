import { getPage } from "@/sanity/utils"
import { PortableText } from "@portabletext/react"

type Props = {
  params: {page: string}
}

const Page = async ({ params }: Props) => {
  const page = await getPage(params.page)

  return (
    <div>
      <h1 className='bg-gradient-to-r 
            from-blue-500 
            to-red-400 
            bg-clip-text 
            text-transparent text-5xl drop-shadow font-extrabold'>
        {page.title}
      </h1>
      <div className='text-lg text-white-700 mt-10'>
        <PortableText value={page.content} />
      </div>
    </div>
  )
}

export default Page