import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import { signatureTreatments, additionalTreatments } from "@/data/treatments";
import { conditions } from "@/data/conditions";

const doshas = [
  { name: "Vata",  icon: "🌬️", desc: "Air & ether — movement, breath, and creativity." },
  { name: "Pitta", icon: "🔥", desc: "Fire & water — metabolism, intellect, and transformation." },
  { name: "Kapha", icon: "💧", desc: "Earth & water — structure, calm, and immunity." },
];

export default function AyurvedaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden -mt-[72px]">
        <img
          src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=1920"
          alt="Herbal oils, flowers and Ayurvedic ingredients"
          className="absolute inset-0 h-full w-full object-cover vana-img"
        />
        <div className="absolute inset-0 bg-bark/60" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <p className="font-script text-3xl text-gold">5,000 Years of Healing Wisdom</p>
            <h1 className="mt-2 font-display text-5xl md:text-6xl text-ivory">The Ancient Science of Life</h1>
            <p className="mt-5 text-ivory/85 leading-relaxed">
              Sri Lankan Ayurveda is among the world's most revered healing traditions — a holistic
              science that balances body, mind, and spirit through personalized therapies, herbal
              medicine, and mindful living. At Vana Ayurveda, we practice this tradition in its purest form.
            </p>
          </div>
        </div>
      </section>

      {/* ── THREE DOSHAS ── */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <p className="font-script text-3xl text-earth">The Foundation</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-bark">Understanding the Three Doshas</h2>
            <p className="mt-5 text-bark/70 leading-relaxed">
              Ayurveda teaches that every person is composed of a unique combination of three vital
              energies — the doshas. Wellness arises when these forces are in balance.
            </p>
            <div className="mt-8 space-y-4">
              {doshas.map((d) => (
                <div key={d.name} className="flex gap-4 p-5 rounded-2xl bg-warm-white border border-mist">
                  <div className="text-3xl">{d.icon}</div>
                  <div>
                    <h3 className="font-display text-2xl text-bark">{d.name}</h3>
                    <p className="text-sm text-bark/65">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="gold-frame">
            <img
              src="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=1000"
              alt="Herbal Ayurveda bowls"
              loading="lazy"
              className="w-full h-[560px] object-cover rounded-2xl vana-img shadow-warm"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <p className="font-script text-3xl text-earth">Therapeutic Care</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-bark">Illnesses & Conditions We Treat</h2>
            <p className="mt-5 text-bark/70">
              Our treatments go beyond relaxation — they are designed to address chronic conditions,
              restore balance, and support long-term wellbeing.
            </p>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.04}>
                <div className="h-full p-7 rounded-2xl bg-ivory border border-mist hover:shadow-warm transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-sage/15 grid place-items-center text-2xl">
                    {c.icon}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-bark">{c.name}</h3>
                  <p className="mt-2 text-sm text-bark/65 leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SIGNATURE TREATMENTS ── */}
      <section className="bg-ivory py-12">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-script text-3xl text-earth">Signature</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-bark">Our Signature Therapies</h2>
          </ScrollReveal>

          <div className="space-y-24">
            {signatureTreatments.map((t, i) => {
              const reverse = i % 2 === 1;
              return (
                <ScrollReveal key={t.name}>
                  <article
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      reverse ? "lg:[&>:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl shadow-warm">
                      <img
                        src={t.imageUrl}
                        alt={t.name}
                        loading="lazy"
                        className="w-full h-[480px] object-cover vana-img"
                      />
                    </div>
                    <div>
                      <p className="font-script text-2xl text-earth">{t.subtitle}</p>
                      <h3 className="mt-1 font-display text-4xl md:text-5xl text-bark">{t.name}</h3>
                      <p className="mt-5 text-bark/70 leading-relaxed">{t.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {t.benefits.map((b) => (
                          <span
                            key={b}
                            className="text-xs uppercase tracking-[0.15em] text-sage-dark border border-sage/40 rounded-full px-3 py-1.5"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL ── */}
      <section className="bg-warm-white py-24 mt-12">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-bark">More Healing Therapies</h2>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {additionalTreatments.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-ivory border border-mist flex gap-4 items-start">
                <div className="h-2 w-2 rounded-full bg-gold mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-display text-xl text-bark">{t.name}</h3>
                  <p className="text-sm text-bark/65 mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-4xl md:text-5xl text-ivory">Ready to Begin Your Healing Journey?</h2>
          <p className="mt-5 text-ivory/75">
            Every Vana Ayurveda experience begins with a complimentary consultation with our
            Ayurvedic physician. Reach out to design your personalized retreat.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-earth px-7 py-3.5 text-ivory hover:bg-sage transition-colors"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
