
export default async function SlugBlog({params}) {
    console.log(await params)
    const {blog_id} = await params
  return (
    <div>Blog: {blog_id} </div>
  )
}
