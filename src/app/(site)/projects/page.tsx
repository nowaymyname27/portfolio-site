// file: src/app/(site)/projects/page.tsx

import Header from "@/components/site-wide/Header";
import Footer from "@/components/site-wide/Footer";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsHero from "./components/ProjectsHero";

export default function ProjectsPage() {
  return (
    <main className="w-full flex flex-col">
      <Header />

      <section className="w-full px-16">
        <ProjectsHero />
        <ProjectsSection />
      </section>

      <Footer />
    </main>
  );
}
