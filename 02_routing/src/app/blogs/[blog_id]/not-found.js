"use client"

import { usePathname } from "next/navigation";

export default function () {
  const a = usePathname()
  const data =a.split('/').at(-1)
  return (
    <>
      <h1>Blog /{data} page does not exists</h1>
    </>
  );
}
