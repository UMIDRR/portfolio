function Navbar() {
  return (
    <nav
      style={{
        padding: "18px 40px",
        background: "#0f0f0f",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2 style={{ margin: 0 }}>UMID / DEV</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;