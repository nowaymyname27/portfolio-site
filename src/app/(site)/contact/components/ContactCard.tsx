"use client";

import { motion } from "framer-motion";
import { useEffect, useState, FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzpbrwb";

export default function ContactCard({
  onHoverChange,
}: {
  onHoverChange: (hovering: boolean) => void;
}) {
  const [isBelowLg, setIsBelowLg] = useState(false);
  const [state, setState] = useState({
    loading: false,
    ok: false,
    error: "",
  });

  // Detect screen size (lg breakpoint = 1024px)
  useEffect(() => {
    const check = () => setIsBelowLg(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // FORM SUBMIT HANDLER
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot

    setState({ loading: true, ok: false, error: "" });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json?.errors?.[0]?.message || "Failed to send");
      }

      setState({ loading: false, ok: true, error: "" });
      form.reset();
    } catch (err: unknown) {
      setState({
        loading: false,
        ok: false,
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }

  return (
    <motion.div
      onHoverStart={() => !isBelowLg && onHoverChange(true)}
      onHoverEnd={() => !isBelowLg && onHoverChange(false)}
      initial={{
        opacity: 0,
        y: 30,
        boxShadow: isBelowLg
          ? "0 0 50px rgba(var(--main-rgb), 0.55)"
          : "0 12px 40px rgba(0,0,0,0.15)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow: isBelowLg
          ? "0 0 50px rgba(var(--main-rgb), 0.55)"
          : "0 12px 40px rgba(0,0,0,0.15)",
      }}
      whileHover={
        !isBelowLg
          ? {
              scale: 1.03,
              y: -6,
              boxShadow: "0 0 50px rgba(var(--main-rgb), 0.55)",
            }
          : {}
      }
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        bg-white/70 
        backdrop-blur-md 
        rounded-3xl 
        shadow-xl 
        p-10 
        flex 
        flex-col 
        gap-6 

        min-w-[450px]
        max-w-[500px]
        mx-auto
      "
    >
      <h1 className="text-4xl font-semibold text-center mb-4">Contact me</h1>

      {/* FORM */}
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {/* Required for Formspree */}
        <input type="hidden" name="_subject" value="Portfolio Contact" />

        <label className="flex flex-col text-lg">
          <span className="mb-1 font-medium">Name:</span>
          <input
            required
            name="name"
            type="text"
            className="
              px-4 py-3 rounded-xl 
              border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-main 
              transition
            "
          />
        </label>

        <label className="flex flex-col text-lg">
          <span className="mb-1 font-medium">Email:</span>
          <input
            required
            name="email"
            type="email"
            className="
              px-4 py-3 rounded-xl 
              border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-main 
              transition
            "
          />
        </label>

        <label className="flex flex-col text-lg">
          <span className="mb-1 font-medium">Message:</span>
          <textarea
            required
            name="message"
            rows={5}
            className="
              px-4 py-3 rounded-xl 
              border border-gray-300 
              resize-none 
              focus:outline-none focus:ring-2 focus:ring-main 
              transition
            "
          />
        </label>

        {/* Honeypot */}
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* SUBMIT BUTTON */}
        <button
          disabled={state.loading}
          className="
            w-full mt-4 py-3 rounded-xl 
            bg-main text-white 
            font-semibold text-lg
            hover:opacity-90 transition 
            disabled:opacity-60
          "
        >
          {state.loading ? "Sending…" : "Send"}
        </button>

        {/* STATUS */}
        <div aria-live="polite" className="min-h-[1.25rem] mt-1">
          {state.ok && (
            <p className="text-green-600 text-sm">
              Thanks! Your message was sent.
            </p>
          )}
          {state.error && (
            <p className="text-red-500 text-sm">Error: {state.error}</p>
          )}
        </div>
      </form>
    </motion.div>
  );
}
