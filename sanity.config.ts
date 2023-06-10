import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

const config = defineConfig({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECTID}`,
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-06-10",
  basePath: "/admin",
  plugins: [deskTool()]
})

export default config