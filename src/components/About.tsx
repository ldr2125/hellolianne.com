import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 pb-32 pt-8">
      <div className="border-t border-border pt-10">
        <div className="md:grid md:grid-cols-[1fr_400px] md:gap-16 items-start">

          {/* Left: heading + text */}
          <div className="md:grid md:grid-cols-[180px_1fr] md:gap-24 items-start mb-12 md:mb-0">
            <h2 className="text-heading font-bold text-text mb-10 md:mb-0">
              About
            </h2>

            <div className="max-w-2xl">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Lianne is an ex-management consultant who now works in tech in
                the Bay Area. She&apos;s drawn to projects with personality —
                things that feel useful, playful, or culturally specific. When
                she&apos;s not tinkering and breaking things, you can find her
                on hikes with her partner Nick and their deeply goofy Australian
                Shepherd, Kona.
              </p>
            </div>
          </div>

          {/* Right: editorial photo */}
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <Image
              src="/lianne.jpeg"
              alt="Lianne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
