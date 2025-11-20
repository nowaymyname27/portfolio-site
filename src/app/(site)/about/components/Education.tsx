// file: src/app/(site)/(about)/components/Education.tsx
import EntryCard from "./EntryCard";

export default function Education() {
  return (
    <section className="w-full px-6 py-20">
      <h2 className="text-4xl font-semibold mb-10">Education</h2>

      <EntryCard
        logo="/about/Boston_University_seal.svg"
        title="Boston University"
        subtitle="B.A. in Computer Science"
        date="2022 – 2025"
        bullets={[
          "Studied systems, algorithms, programming languages, software engineering, and lower-level programming.",
          "Built full-stack projects through coursework and independent work.",
          "Strengthened problem-solving and design skills by working across both technical and creative areas of development.",
        ]}
      />
    </section>
  );
}
