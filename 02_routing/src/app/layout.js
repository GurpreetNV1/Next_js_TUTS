export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
      <header style={{background:"hotpink", padding:"1rem 2.5rem"}}>Header</header>
        
        {children}
      <footer style={{background:"green", color:"white",padding:"1rem 2.5rem"}}>Footer</footer>
        </body>
    </html>
  );
}
