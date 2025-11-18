// file: src/app/(site)/(about)/page.tsx

import Footer from "@/components/site-wide/Footer";
import Header from "@/components/site-wide/Header";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CertificatesSection from "./components/CertificatesSection";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="w-full px-16">
        <Introduction />
        <Education />
        <Experience />
        <CertificatesSection />
      </div>
      <Footer />
    </main>
  );
}
