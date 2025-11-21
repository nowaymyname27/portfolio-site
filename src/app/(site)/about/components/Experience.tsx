// file: src/app/(site)/(about)/components/Experience.tsx
import EntryCard from "./EntryCard";

export default function Experience() {
  return (
    <section className="w-full px-6 py-20">
      <h2 className="text-4xl font-semibold mb-10">Experience</h2>

      <div className="space-y-16">
        <EntryCard
          logo="/about/SaraHomes_logo.png" // replace with the actual file if needed
          title="BeHome Developers"
          subtitle="Web & Data Management Intern"
          date="Summer Intern 2023 & 2024"
          hoverColor="#EB320C"
          bullets={[
            "Maintained and updated the company website using WordPress, ensuring accurate and timely property listings and content.",
            "Managed and organized real estate data in MongoDB and Excel, improving data accessibility and reporting for the team.",
            "Collaborated with staff to streamline data workflows and support digital marketing initiatives.",
            "Tools: WordPress, MongoDB, Microsoft Excel",
          ]}
        />
        <EntryCard
          logo="/about/following_logo.png" // replace with actual file if needed
          title="Following NYC"
          subtitle="Freelance Web Designer"
          date="August 2025"
          hoverColor="#DA422F"
          bullets={[
            "Designed and built a fully responsive photography-focused website, highlighting high-resolution images and clean visual layouts.",
            "Implemented a content management workflow that allowed the client to easily upload, update, and organize their photos without touching code.",
            "Developed custom components optimized for image-heavy pages, ensuring fast performance and a smooth user experience.",
            "Tools: Next.js, React, Tailwind CSS, Sanity CMS, JavaScript, Vercel",
          ]}
        />

        <EntryCard
          logo="/about/RP_brand.png" // replace with your local asset
          title="RentPortfolio"
          subtitle="Freelance Web Designer"
          date="September – December 2025"
          hoverColor="#F2B078"
          bullets={[
            "Designed and developed a fully responsive website for a real estate company, helping with branding, layout, and functionality for business needs.",
            "Collaborated closely with the client through iterative feedback cycles to refine the user experience and ensure the final product met all requirements.",
            "Implemented efficient workflows to deliver updates quickly and maintain clear communication throughout the project.",
            "Tools: Next.js, React, Tailwind CSS, TypeScript, Sanity CMS, Vercel",
          ]}
        />
      </div>
    </section>
  );
}
