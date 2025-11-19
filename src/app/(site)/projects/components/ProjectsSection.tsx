// file: src/app/(site)/projects/components/ProjectsSection.tsx

"use client";

import ProjectCard from "./ProjectCard";

// Devicon-based icons (colored)
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";

// Example: Node.js custom icon component if you have one
// import { NodejsOriginal } from "@/components/icons/NodejsOriginal";

export default function ProjectsSection() {
  return (
    <section className="w-full px-16 py-24">
      <h2 className="text-3xl font-semibold mb-12 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {/* Sample 1 */}
        <ProjectCard
          title="Portfolio Website"
          description="Personal site built using Next.js, TailwindCSS, and server-side rendering."
          image={{
            src: "/fox_logo.png",
            alt: "Portfolio website screenshot",
          }}
          github="https://github.com/example/portfolio"
          glowColor="var(--main)"
          tech={[
            {
              icon: <i className="devicon-tailwindcss-plain colored" />,
              label: "TailwindCSS",
            },
            {
              icon: <i className="devicon-react-original colored" />,
              label: "React",
            },
          ]}
          extraLinks={[{ label: "Live Demo", href: "https://example.com" }]}
        />

        {/* Sample 2 */}
        <ProjectCard
          title="API Service"
          description="REST API using Node.js and Express, handling user data and sessions."
          image={{
            src: "/sample-projects/api.jpg",
            alt: "API project screenshot",
          }}
          github="https://github.com/example/api-service"
          glowColor="#83CD29" // Node green
          tech={[
            {
              icon: <i className="devicon-nodejs-plain colored" />,
              label: "Node.js",
            },
            {
              icon: <i className="devicon-express-original colored" />,
              label: "Express",
            },
          ]}
        />

        {/* Sample 3 */}
        <ProjectCard
          title="Machine Learning Tool"
          description="A small ML experiment using Python and regression techniques."
          image={{
            src: "/sample-projects/ml.jpg",
            alt: "Machine learning preview",
          }}
          github="https://github.com/example/ml-tool"
          glowColor="#3776AB" // Python blue
          tech={[
            {
              icon: <i className="devicon-python-plain colored" />,
              label: "Python",
            },
          ]}
          extraLinks={[
            { label: "Notebook", href: "https://example.com/notebook" },
          ]}
        />

        {/* Sample 4 (duplicate or placeholder) */}
        <ProjectCard
          title="Second Portfolio"
          description="Another example project showing multiple links and different tech."
          image={{
            src: "/sample-projects/portfolio.jpg",
            alt: "Portfolio example",
          }}
          github="https://github.com/example/portfolio2"
          glowColor="var(--accent)" // Blue glow
          tech={[
            {
              icon: <i className="devicon-typescript-plain colored" />,
              label: "TypeScript",
            },

            {
              icon: <i className="devicon-react-original colored" />,
              label: "React",
            },
          ]}
          extraLinks={[{ label: "Docs", href: "https://example.com/docs" }]}
        />
      </div>
    </section>
  );
}
