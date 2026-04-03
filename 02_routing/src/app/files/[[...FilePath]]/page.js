export const metadata = {
  title:{
    absolute: "My Server Files"
  }
}
export default async function({params}) {
    const {FilePath} = await params
    console.log(FilePath)
  return (
    <>
    <h1>Catching All File Paths</h1>
    <p style={{fontSize:"32px"}}>File Path: /{FilePath?.join('/')}</p>
</>    
    

  )
}
