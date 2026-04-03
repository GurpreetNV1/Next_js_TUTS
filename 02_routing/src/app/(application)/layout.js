export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ background: "hotpink", padding: "1rem 2.5rem" }}>
        Header (Application)
      </header>

      {children}
      <footer
        style={{ background: "red", color: "white", padding: "1rem 2.5rem" }}
      >
        Footer (Application)
      </footer>
    </>
  );
}
