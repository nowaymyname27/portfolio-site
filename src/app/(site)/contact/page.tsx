// file: src/app/(site)/contact/page.tsx

"use client";

import { useState } from "react";

import Header from "@/components/site-wide/Header";
import Footer from "@/components/site-wide/Footer";
import ContactBackground from "./components/ContactBackground";
import ContactCard from "./components/ContactCard";

export default function ContactPage() {
  const [hovering, setHovering] = useState(false);

  return (
    <main className="w-full flex flex-col">
      <Header />

      <section className="relative isolate w-full min-h-screen flex items-center justify-center px-16 py-24">
        <ContactBackground hovering={hovering} />

        <div className="relative z-10">
          <ContactCard onHoverChange={setHovering} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
