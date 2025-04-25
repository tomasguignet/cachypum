import React from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
    padding: "25px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    maxWidth: "900px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  title: {
    textTransform: "capitalize",
    color: "#2c3e50",
    borderBottom: "2px solid #3498db",
    paddingBottom: "10px",
    marginBottom: "15px",
    fontSize: "2em",
  },
  subtitle: {
    color: "#7f8c8d",
    fontStyle: "italic",
    marginBottom: "25px",
    fontSize: "1.2em",
  },
  sectionTitle: {
    marginTop: "35px",
    marginBottom: "20px",
    color: "#34495e",
    borderBottom: "1px solid #bdc3c7",
    paddingBottom: "8px",
    fontSize: "1.6em",
    fontWeight: "600",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "450px",
    height: "auto",
    borderRadius: "6px",
    marginBottom: "20px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
  },
  summary: {
    lineHeight: "1.7",
    color: "#34495e",
    fontSize: "1.1em",
    textAlign: "justify",
  },
  listItem: {
    marginBottom: "12px",
    paddingLeft: "25px",
    position: "relative",
    lineHeight: "1.6",
  },
  purposeItem: {
    marginBottom: "20px",
    padding: "20px",
    background: "#f8f9fa",
    borderRadius: "5px",
    borderLeft: "4px solid #1abc9c",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  purposeItemTitle: {
    margin: "0 0 10px 0",
    color: "#16a085",
    fontSize: "1.2em",
    fontWeight: "bold",
  },
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "20px",
    justifyContent: "center",
  },
  galleryImage: {
    width: "200px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "5px",
    border: "1px solid #ddd",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease",
    cursor: "pointer",
  },
  workshopItem: {
    border: "1px solid #ecf0f1",
    padding: "20px",
    borderRadius: "6px",
    textAlign: "center",
    flex: "1 1 220px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.07)",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  workshopContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  },
  workshopItemTitle: {
    margin: "10px 0 0 0",
    color: "#2980b9",
    fontSize: "1.1em",
    fontWeight: "bold",
  },
  workshopItemDesc: {
    fontStyle: "italic",
    color: "#95a5a6",
    marginBottom: "10px",
    minHeight: "3em",
  },
  objectSection: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    alignItems: "flex-start",
    marginBottom: "25px",
    marginTop: "20px",
    padding: "20px",
    background: "#fdfdfd",
    borderRadius: "6px",
    border: "1px solid #f0f0f0",
  },
  objectImage: {
    width: "300px",
    height: "auto",
    borderRadius: "5px",
    objectFit: "cover",
    flexShrink: 0,
    boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
  },
  objectTextContainer: {
    flex: 1,
    lineHeight: "1.7",
    color: "#34495e",
    textAlign: "justify",
  },
  "@media (max-width: 768px)": {
    objectSection: {
      flexDirection: "column",
      alignItems: "center",
    },
    objectImage: {
      width: "90%",
      maxWidth: "400px",
      marginBottom: "20px",
    },
    title: { fontSize: "1.8em" },
    sectionTitle: { fontSize: "1.4em" },
    galleryImage: { width: "150px", height: "100px" },
    workshopItem: { flexBasis: "100%" },
  },
};

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <div style={styles.container}>Cargando información del proyecto...</div>
    );
  }

  const {
    title,
    titleImage,
    subtitle,
    summary,
    purpose,
    team,
    workshops,
    images,
    proposal,
    stateOfProject,
  } = project;

  const renderTextWithLineBreaks = (text) => {
    if (typeof text !== "string") return text;
    return text.split("\n").map((line, index, arr) => (
      <React.Fragment key={index}>
        {line}
        {index < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div style={styles.container}>
      {title && <h1 style={styles.title}>{title}</h1>}
      {subtitle && <h2 style={styles.subtitle}>{subtitle}</h2>}
      {titleImage && (
        <img
          src={titleImage}
          alt={title || "Imagen Principal"}
          style={styles.image}
          loading="lazy"
        />
      )}
      {summary && (
        <p style={styles.summary}>{renderTextWithLineBreaks(summary)}</p>
      )}
      {purpose && (
        <section>
          <h3 style={styles.sectionTitle}>Propósito</h3>
          {Array.isArray(purpose) ? (
            <ul>
              {purpose.map((item, index) => (
                <li key={index} style={styles.purposeItem}>
                  {item.title && (
                    <h4 style={styles.purposeItemTitle}>{item.title}</h4>
                  )}
                  {item.text && <p>{renderTextWithLineBreaks(item.text)}</p>}
                </li>
              ))}
            </ul>
          ) : typeof purpose === "object" ? (
            <div style={styles.objectSection}>
              {purpose.image && (
                <img
                  src={purpose.image}
                  alt="Propósito"
                  style={styles.objectImage}
                  loading="lazy"
                />
              )}
              {purpose.text && (
                <div style={styles.objectTextContainer}>
                  <p>{renderTextWithLineBreaks(purpose.text)}</p>
                </div>
              )}
            </div>
          ) : typeof purpose === "string" ? (
            <p style={{ lineHeight: "1.7" }}>
              {renderTextWithLineBreaks(purpose)}
            </p>
          ) : null}
        </section>
      )}
      {team && (
        <section>
          <h3 style={styles.sectionTitle}>Nuestro Equipo</h3>
          <div style={styles.objectSection}>
            {team.image && (
              <img
                src={team.image}
                alt="Equipo"
                style={styles.objectImage}
                loading="lazy"
              />
            )}
            {team.text && (
              <div style={styles.objectTextContainer}>
                <p>{renderTextWithLineBreaks(team.text)}</p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.object,
};

export default ProjectDetail;
