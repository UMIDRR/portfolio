import { useState } from "react";
import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" style={{ padding: "50px 20px" }}>
      <h2
        style={{
          fontSize: "35px",
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
        }}
      >
        Projects
      </h2>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onSelect={() => setSelected(p)} />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#181818",
              padding: "25px",
              borderRadius: "14px",
              width: "600px",
              color: "white",
              position: "relative",
              border: "1px solid #333",
            }}
          >
            {/* X button */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontSize: "22px",
                background: "transparent",
                border: "none",
                color: "#aaa",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {/* Title */}
            <h2 style={{ marginBottom: "10px" }}>{selected.title}</h2>

            {/* Description */}
            <p style={{ opacity: 0.85, lineHeight: "1.6" }}>
              {selected.description}
            </p>

            {/* Image */}
            <img
              src={selected.image}
              alt="preview"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginTop: "18px",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
