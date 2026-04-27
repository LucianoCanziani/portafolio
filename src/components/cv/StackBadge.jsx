import React from "react"

const stackColors = {
  ReactJs: { bg: "#61DBFB", text: "#282C34" },
  JavaScript: { bg: "#F7DF1E", text: "#1a202a" },
  MongoDB: { bg: "#4DB33D", text: "#fffef2" },
  Laravel: { bg: "#fb503b", text: "#fffef2" },
  AstroJs: { bg: "#ff5a03", text: "#fffef2" }, // Updated to Astro's orange
  TypeScript: { bg: "#007acc", text: "#fffef2" },
  Svelte: { bg: "#ff3e00", text: "#fffef2" },
  MeteorJs: { bg: "#ff5656", text: "#27272b" },
  CSS: { bg: "#254bdd", text: "#fffef2" },
  Chrome: { bg: "#254bdd", text: "#fffef2" },
  PHP: { bg: "#254bdd", text: "#fffef2" },
  Bootstrap: { bg: "#7710f1", text: "#fffef2" },
  Reactstrap: { bg: "#2f498b", text: "#fffef2" },
  FireBase: { bg: "#f7c630", text: "#1a202a" },
  HeadlessWordpress: { bg: "#01a0d6", text: "#1f1e1d" },
  jQuery: { bg: "#0865a6", text: "#fffef2" },
  MySQL: { bg: "#0865a6", text: "#fffef2" },
  SEO: { bg: "#DB3236", text: "#fffef2" },
  Investigacion: { bg: "#2f66c3", text: "#fffef2" },
  Diseño: { bg: "#0049b7", text: "#d6faff" },
  API: { bg: "#7710f1", text: "#fffef2" },
  Auditoría: { bg: "#61DBFB", text: "#282C34" },
  Cobranzas: { bg: "#F7DF1E", text: "#1a202a" },
  NextJs: { bg: "#000", text: "#f9f9f9" },
  proveedores: { bg: "#4DB33D", text: "#1a202a" },
  JIRA: { bg: "#0052CC", text: "#fffef2" },
  "Team Leadership": { bg: "#1e3a8a", text: "#fffef2" },
};

const StackBadge = ({ stack }) => {
    let stackArray = typeof stack === "string" ? stack.split(",") : stack || [];

    return (
        <ul className="stack-project-cont flex flex-wrap gap-2">
            {stackArray.map((stackName, indexStack) => {
                const colors = stackColors[stackName.trim()] || { bg: "#374151", text: "#ffffff" }; // Fallback to gray
                return (
                    <li 
                        key={indexStack} 
                        className="px-3 py-1 text-sm rounded-md font-medium shadow-sm transition-transform hover:-translate-y-0.5"
                        style={{ backgroundColor: colors.bg, color: colors.text }}
                    >
                        {stackName.trim()}
                    </li>
                )
            })}
        </ul>
    )
}

export default StackBadge