export async function generateMetadata({ params }) {
  const {blog_id} = await params
  return {
    title:`Blog ${blog_id}`
  }
}

export default async function SlugBlog({ params }) {
  console.log(await params);
  const { blog_id } = await params;
  return <div>Blog: {blog_id} </div>;
}
