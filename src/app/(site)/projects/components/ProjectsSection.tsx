// file: src/app/(site)/projects/components/ProjectsSection.tsx
"use client";

import ProjectCard from "./ProjectCard";
import NumpyOriginal from "react-devicons/numpy/original";
import PandasOriginal from "react-devicons/pandas/original";
import JupyterOriginalWordmark from "react-devicons/jupyter/original-wordmark";

// Devicon-based icons (colored)
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section
      className="
        w-full 
        px-6 sm:px-10 lg:px-16 
        py-10 lg:py-24
      "
    >
      <div
        className="
          w-full
          grid
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
          gap-10
          justify-items-center
        "
      >
        {/* Sample 1 */}
        <ProjectCard
          title="Portfolio Website"
          description="This very site you are on! Built using React, Next.js, TailwindCSS, and some sweet server-side rendering."
          image={{
            src: "/fox_logo.png",
            alt: "Portfolio website screenshot",
          }}
          github="https://github.com/nowaymyname27/portfolio-site"
          glowColor="var(--main)"
          tech={[
            {
              icon: <i className="devicon-react-original colored" />,
              label: "React",
            },
            {
              icon: <i className="devicon-tailwindcss-plain colored" />,
              label: "TailwindCSS",
            },
            {
              icon: <i className="devicon-typescript-plain colored" />,
              label: "TypeScript",
            },
            { icon: <SiNextdotjs />, label: "Next.js" },
            {
              icon: <i className="devicon-framermotion-plain colored" />,
              label: "Framer Motion",
            },
          ]}
        />
        <ProjectCard
          title="FollowingNYC Website"
          description="My first client's website! Built specifically to manage thousands of photos without the client knowing any code!"
          image={{
            src: "/about/following_logo.png",
            alt: "Portfolio website screenshot",
          }}
          github="https://github.com/nowaymyname27/followingnyc-site"
          glowColor="#DD442F"
          tech={[
            {
              icon: <i className="devicon-react-original colored" />,
              label: "React",
            },
            {
              icon: <i className="devicon-tailwindcss-plain colored" />,
              label: "TailwindCSS",
            },
            {
              icon: <i className="devicon-javascript-plain colored" />,
              label: "JavaScript",
            },
            { icon: <SiNextdotjs />, label: "Next.js" },
            {
              icon: <i className="devicon-sanity-plain colored" />,
              label: "Sanity",
            },
          ]}
          extraLinks={[
            {
              label: "Live Site",
              href: "https://www.followingnyc.com/",
            },
          ]}
        />
        <ProjectCard
          title="Sentiment Analysis Data Science Project"
          description="A collaborative project I contributed to while at University!"
          image={{
            src: "/projects/Stock-Market.png",
            alt: "Portfolio website screenshot",
          }}
          github="https://github.com/nowaymyname27/Sentiment_Analysis_And_Stock_Prediction"
          glowColor="#09A1B1"
          tech={[
            {
              icon: <i className="devicon-python-plain colored" />,
              label: "Python",
            },

            // NumPy (local SVG)
            {
              icon: <NumpyOriginal />,
              label: "NumPy",
            },

            // Pandas (local SVG)
            {
              icon: <PandasOriginal />,
              label: "Pandas",
            },

            // Scikit-Learn (local SVG)
            {
              icon: (
                <img
                  src="/icons/sklearn.svg"
                  alt="Scikit-Learn"
                  className="w-12 h-12"
                />
              ),
              label: "Scikit-Learn",
            },

            {
              icon: <JupyterOriginalWordmark />,
              label: "Jupyter Notebook",
            },
          ]}
          extraLinks={[
            {
              label: "Video Demo",
              href: "https://youtu.be/wpLwfAlvnOg?feature=shared",
            },
          ]}
        />
        <ProjectCard
          title="An HTTP Server From Scratch"
          description="Built my own HTTP server from scracth using good old C!"
          image={{
            src: "/projects/server.png",
            alt: "Portfolio website screenshot",
          }}
          github="https://github.com/nowaymyname27/codecrafters-http-server-c"
          glowColor="#42C8DE"
          tech={[
            {
              icon: <i className="devicon-c-plain colored" />,
              label: "C",
            },
            {
              icon: <img src="/icons/neovim.png" className="w-8 h-10" />,
              label: "Neovim",
            },
          ]}
        />
      </div>
    </section>
  );
}
