
export default async function SlugComments({params}) {
    console.log(await params)
    const {comment_id, blog_id} = await params
  return (
    <div>Comment: {comment_id} from <b><i>{blog_id} </i></b> Blog</div>
  )
}
