import ScrollReveal from "@/components/ui/ScrollReveal";
import { team } from "@/data/team";

const values = [
  { icon: "🌿", title: "Authenticity",     body: "Traditional therapies, classical herbal preparations, and treatments supervised by qualified Ayurvedic doctors." },
  { icon: "💛", title: "Personalization",  body: "No two guests are the same. Every experience is tailored to your unique constitution, needs, and wellness goals." },
  { icon: "🤍", title: "Family & Warmth", body: "We are a small, family-led retreat. You will be known by name, understood deeply, and cared for genuinely." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden -mt-[72px]">
        <img
          src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=1920"
          alt="Sri Lankan landscape"
          className="absolute inset-0 h-full w-full object-cover vana-img"
        />
        <div className="absolute inset-0 bg-bark/55" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="font-script text-3xl text-gold">Our Story</p>
            <h1 className="mt-2 font-display text-5xl md:text-6xl text-ivory">A Family Devoted to Healing</h1>
          </div>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14">
          <ScrollReveal>
            <p className="font-display italic text-3xl md:text-4xl text-sage-dark leading-snug">
              "At Vana Ayurveda, you are not just a guest — you are family."
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="space-y-5 text-bark/75 leading-relaxed">
            <p>
              Vana Ayurveda was born from a deep belief that true wellness is a birthright. Founded
              by a family with decades of experience in Sri Lankan hospitality and traditional
              medicine, our boutique retreat was designed with a single purpose: to offer deeply
              authentic, deeply personal Ayurvedic healing in a setting of unhurried luxury.
            </p>
            <p>
              We welcome only small, intimate groups — never large crowds — so that every guest
              receives undivided attention and a bespoke wellness journey. Our team includes
              celebrated Ayurvedic professors, licensed physicians, and therapists trained in
              classical Sri Lankan healing traditions.
            </p>
            <p>
              Here, the ancient and the modern coexist beautifully. You will find the authenticity
              of a 5,000-year-old healing system, wrapped in the warmth of boutique hospitality and
              the splendor of Sri Lanka's natural landscapes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="text-center mb-14">
            <p className="font-script text-3xl text-earth">What Guides Us</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-bark">Our Values</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="h-full p-8 rounded-2xl text-center bg-sage/10">
                  <div className="text-4xl">{v.icon}</div>
                  <h3 className="mt-4 font-display text-2xl text-bark">{v.title}</h3>
                  <p className="mt-3 text-sm text-bark/70 leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="text-center mb-14">
            <p className="font-script text-3xl text-earth">Our Team</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-bark">The Healers Behind Vana</h2>
          </ScrollReveal>
          <div className="grid gap-10 md:grid-cols-3">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.08}>
                <div className="text-center p-6 rounded-2xl border border-gold/40 bg-warm-white">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="mx-auto h-44 w-44 rounded-full object-cover vana-img border-4 border-ivory shadow-warm"
                  />
                  <h3 className="mt-5 font-display text-2xl text-bark">{m.name}</h3>
                  <p className="mt-1 text-sm italic text-bark/60">{m.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE IMAGE ── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920"
          alt="Tropical riverside"
          className="absolute inset-0 h-full w-full object-cover vana-img"
        />
        <div className="absolute inset-0 bg-bark/55" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <p className="max-w-3xl font-display text-2xl md:text-3xl text-ivory leading-snug italic">
            Set within the verdant landscapes of southern Sri Lanka, along the banks of a tranquil
            river, Vana Ayurveda is a world apart — where healing begins the moment you arrive.
          </p>
        </div>
      </section>
    </>
  );
}
