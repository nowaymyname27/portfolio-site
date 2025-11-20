// src/app/(site)/(home)/data/splitSections.tsx

import { ReactNode } from "react";
import { SiNextdotjs } from "react-icons/si";
import UnityOriginal from "react-devicons/unity/original";
import NumpyOriginal from "react-devicons/numpy/original";
import PandasOriginal from "react-devicons/pandas/original";
import JupyterOriginalWordmark from "react-devicons/jupyter/original-wordmark";
import NodejsOriginal from "react-devicons/nodejs/original";

export interface TechItem {
  icon: ReactNode;
  label: string;
}

export interface SplitSectionData {
  heading: string;
  description: string;
  imageColor: string;
  imageBW: string;
  reverse: boolean;
  tech: TechItem[];
}

export const splitSections: SplitSectionData[] = [
  {
    heading: "Full-stack Development with Modern Tools.",
    description:
      "I design, build, and deploy full-stack applications from end to end. My work spans UI engineering, API design, cloud deployment, and scalable infrastructure. I focus on clean architecture, fast performance, and seamless user experiences.",
    imageColor: "/home/website_fox.png",
    imageBW: "/home/website_fox_bw.png",
    reverse: false,
    tech: [
      {
        icon: <i className="devicon-react-original colored" />,
        label: "React",
      },
      {
        icon: <i className="devicon-javascript-plain colored" />,
        label: "JavaScript",
      },
      {
        icon: <i className="devicon-typescript-plain colored" />,
        label: "TypeScript",
      },
      { icon: <SiNextdotjs />, label: "Next.js" },
      {
        icon: <NodejsOriginal />,
        label: "Node.js",
      },
      {
        icon: <i className="devicon-amazonwebservices-plain colored" />,
        label: "AWS",
      },
      {
        icon: <i className="devicon-mongodb-plain colored" />,
        label: "MongoDB",
      },
      {
        icon: <i className="devicon-postgresql-plain colored" />,
        label: "PostgreSQL",
      },
      { icon: <i className="devicon-docker-plain colored" />, label: "Docker" },
      {
        icon: <i className="devicon-kubernetes-plain colored" />,
        label: "Kubernetes",
      },
      { icon: <i className="devicon-sanity-plain colored" />, label: "Sanity" },
      {
        icon: <i className="devicon-tailwindcss-plain colored" />,
        label: "Tailwind CSS",
      },
      {
        icon: <i className="devicon-framermotion-plain colored" />,
        label: "Framer Motion",
      },
    ],
  },

  {
    heading: "Using Python and Machine Learning to Extract Insights.",
    description:
      "I work with Python to analyze data, build predictive models, and explore machine learning workflows. From data preprocessing to deep learning research, I use modern tools to turn raw information into meaningful insights.",
    imageColor: "/home/fox_data.png",
    imageBW: "/home/fox_data_bw.png",
    reverse: true,
    tech: [
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

      {
        icon: <i className="devicon-pytorch-original colored" />,
        label: "PyTorch",
      },
      {
        icon: <i className="devicon-tensorflow-original colored" />,
        label: "TensorFlow",
      },

      // Keras (local SVG)
      {
        icon: <img src="/icons/keras.svg" alt="Keras" className="w-12 h-12" />,
        label: "Keras",
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
      {
        icon: <i className="devicon-postgresql-plain colored" />,
        label: "SQL / PostgreSQL",
      },

      // Matplotlib (local SVG)
      {
        icon: (
          <img
            src="/icons/matplotlib.svg"
            alt="Matplotlib"
            className="w-12 h-12"
          />
        ),
        label: "Matplotlib",
      },
    ],
  },
  {
    heading: "Bringing Game Ideas to Life.",
    description:
      "I love game development through engines like Unity, Unreal, and specially Godot. I work with C#, C++, and GDScript to prototype mechanics, design gameplay systems, and bring game ideas to life.",
    imageColor: "/home/fox_game.png",
    imageBW: "/home/fox_game_bw.png",
    reverse: false,
    tech: [
      {
        icon: <UnityOriginal />,
        label: "Unity",
      },
      {
        icon: <i className="devicon-unrealengine-original colored" />,
        label: "Unreal Engine",
      },
      {
        icon: <i className="devicon-godot-plain colored" />,
        label: "Godot",
      },
      {
        icon: <i className="devicon-csharp-plain colored" />,
        label: "C#",
      },
      {
        icon: <i className="devicon-cplusplus-plain colored" />,
        label: "C++",
      },

      // Local icons you can add later
      {
        icon: <img src="/icons/aseprite.svg" className="w-12 h-12" />,
        label: "Aseprite",
      },
    ],
  },
];
