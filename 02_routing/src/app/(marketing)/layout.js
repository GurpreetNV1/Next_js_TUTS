export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ background: "yellow", padding: "1rem 2.5rem" }}>
        Header (Marketing)
      </header>

      {children}
      <footer
        style={{ background: "red", color: "white", padding: "1rem 2.5rem" }}
      >
        Footer (Marketing)
      </footer>
    </>
  );
}
