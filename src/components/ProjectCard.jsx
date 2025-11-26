function ProjectCard({ project, onSelect }) {
  return (
    <div
      onClick={onSelect}
      style={{
        background: "#1a1a1a",
        padding: "20px",
        borderRadius: "14px",
        cursor: "pointer",
        border: "1px solid #333",
        transition: "0.3s",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3 style={{ marginTop: "12px", fontSize: "20px" }}>{project.title}</h3>

      <button
        style={{
          marginTop: "12px",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          background: "#4f46e5",
          color: "white",
        }}
      >
        View Details
      </button>
    </div>
  );
}

export default ProjectCard;
