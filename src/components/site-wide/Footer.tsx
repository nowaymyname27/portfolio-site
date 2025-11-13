// src/components/site-wide/Footer.tsx

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Divider Line */}
      <div className="w-full h-px bg-foreground/20" />

      {/* Footer Content */}
      <div className="w-full py-4 backdrop-blur-sm bg-main/10 flex flex-col items-center gap-3 text-sm text-foreground">
        <span className="opacity-80">Made by Jose Ramirez</span>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
