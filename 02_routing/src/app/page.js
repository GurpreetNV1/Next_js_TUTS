import Link from "next/link";

export default async function Home({params, searchParams}) {
  // console.log("params", await params)
  // console.log("Search Params",await searchParams)
  return (
    <>
      <h1>Technical Agency</h1>
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>{" "}
      <p>
        <Link href="/about">About</Link>
      </p>{" "}
      <p>
        <Link href="/services">Services</Link>
      </p>
    </>
  );
}