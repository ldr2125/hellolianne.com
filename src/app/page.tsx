import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <footer className="px-8 md:px-16 py-8 border-t border-border">
        <p className="font-mono text-xs text-muted tracking-[0.15em]">
          hellolianne.com — 2026
        </p>
      </footer>
    </>
  );
}
