import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Stethoscope, Sparkles, Leaf, Sun, Quote, Star, Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import { teaserTreatments } from "@/data/treatments";
import { testimonials } from "@/data/testimonials";
import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, n } = useAnimatedNumber(value);
  return (
    <div className="text-center">
      <p className="font-display text-5xl text-sage">
        <span ref={ref}>{n.toLocaleString()}</span>{suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-bark/60">{label}</p>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const stripRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sp2 } = useScroll({ target: stripRef, offset: ["start end", "end start"] });
  const yA = useTransform(sp2, [0, 1], ["-8%", "8%"]);
  const yB = useTransform(sp2, [0, 1], ["8%", "-8%"]);
  const yC = useTransform(sp2, [0, 1], ["-12%", "12%"]);
  const yD = useTransform(sp2, [0, 1], ["12%", "-12%"]);

  const heroWords = "Rediscover Yourself Through Ancient Healing".split(" ");

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[680px] overflow-hidden -mt-[72px]">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920"
            alt="Riverside spa surrounded by tropical greenery"
            className="h-full w-full object-cover vana-img scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-tr from-bark/80 via-bark/40 to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-script text-3xl md:text-4xl text-gold mb-3"
              >
                A Sanctuary for the Soul
              </motion.p>

              <h1 className="font-display text-ivory text-5xl md:text-7xl leading-[1.05] tracking-tight">
                {heroWords.map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                    className="inline-block mr-3"
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-6 max-w-xl text-ivory/85 text-lg leading-relaxed"
              >
                Nestled beside tranquil riverside gardens, Vana Ayurveda is your sanctuary for
                authentic Ayurvedic healing, boutique luxury, and total restoration of mind, body, and spirit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  to="/ayurveda"
                  className="group inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-ivory hover:bg-sage-dark transition-colors"
                >
                  Explore Treatments
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/70 px-6 py-3 text-ivory hover:bg-ivory hover:text-bark transition-colors"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 animate-float-bounce">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="font-script text-3xl text-earth">Welcome to Vana</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-bark leading-tight">
              Where the Ancient Wisdom of Ayurveda Meets Modern Luxury
            </h2>
            <p className="mt-6 text-bark/70 leading-relaxed">
              Nestled beside the peaceful waters of a riverside garden in southern Sri Lanka, Vana
              Ayurveda is more than a boutique hotel — it is a sanctuary dedicated to the timeless
              principles of Ayurvedic healing. We invite you to embark on a transformative journey
              where ancient traditions blend seamlessly with refined modern comfort, nourishing
              cuisine, and the serene beauty of tropical Sri Lanka.
            </p>
          </ScrollReveal>

          <SectionDivider />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { v: 5000, suf: "+", l: "Years of Ayurvedic Tradition" },
              { v: 100,  suf: "%", l: "Personalized Treatment Plans" },
              { v: 12,   suf: "+", l: "Signature Healing Therapies" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <AnimatedStat value={s.v} suffix={s.suf} label={s.l} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <p className="font-script text-3xl text-earth">What We Offer</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-bark">
              Four Pillars of Holistic Healing
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              { Icon: Stethoscope, title: "Personalized Ayurvedic Consultations", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1000", body: "Your wellness journey begins with a one-on-one consultation with our resident Ayurvedic physician. We assess your unique constitution — your Dosha — and design a bespoke treatment and nutritional plan to restore harmony within." },
              { Icon: Sparkles,    title: "Rejuvenating Ayurvedic Therapies",     img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000", body: "From soothing Abhyanga oil massages to the transcendent flow of Shirodhara, our authentic therapies are designed to cleanse, detoxify, and revitalize — leaving you renewed in body and serene in mind." },
              { Icon: Leaf,        title: "Authentic Ayurvedic Cuisine",          img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1000", body: "Nourish from within. Our culinary team crafts wholesome, dosha-specific meals using fresh, organic produce from our own gardens. Every dish is a healing ritual — full of flavor, intention, and vitality." },
              { Icon: Sun,         title: "Yoga & Meditation Sessions",           img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000", body: "Reconnect with your inner self amidst the serene beauty of our riverfront gardens. Daily yoga and guided meditation sessions, led by seasoned instructors, offer stillness, clarity, and a deep return to center." },
            ].map(({ Icon, title, img, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <article className="group bg-warm-white border border-mist rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover vana-img transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <div className="h-11 w-11 rounded-full bg-sage/15 grid place-items-center text-sage-dark">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-bark leading-snug">{title}</h3>
                    <p className="mt-3 text-bark/70 leading-relaxed text-sm">{body}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX STRIP ── */}
      <section ref={stripRef} className="bg-ivory py-12 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900", y: yA },
            { src: "https://images.unsplash.com/photo-1470072768013-bf9532016c10?w=900", y: yB },
            { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900", y: yC },
            { src: "https://images.unsplash.com/photo-1596436819489-e01c8f84d7fc?w=900", y: yD },
          ].map((it, i) => (
            <div key={i} className="relative aspect-[3/2] overflow-hidden border-r border-gold/40 last:border-r-0">
              <motion.img
                style={{ y: it.y }}
                src={it.src}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-[120%] w-full object-cover vana-img"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="gold-frame">
            <img
              src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1000"
              alt="Peaceful Sri Lankan riverside"
              loading="lazy"
              className="w-full h-[520px] object-cover rounded-2xl vana-img shadow-warm"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-script text-3xl text-earth">Our Heritage</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-bark leading-tight">
              A Family Devoted to the Art of Healing
            </h2>
            <div className="mt-6 space-y-5 text-bark/70 leading-relaxed">
              <p>
                At Vana Ayurveda, we are more than a hospitality destination. We are a family united
                by a profound devotion to wellness and healing. With decades of experience in Sri
                Lankan tourism and holistic medicine, we welcome small, intimate groups — ensuring
                every guest receives deeply personal care and attention.
              </p>
              <p>
                Our team comprises celebrated Ayurvedic physicians, experienced therapists, and warm
                hospitality professionals. Here, you are not just a guest. You are family.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sage-dark font-medium border-b border-sage-dark/40 hover:border-sage-dark transition-colors"
            >
              Meet Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TREATMENTS TEASER ── */}
      <section className="bg-bark py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-script text-3xl text-gold">What We Heal</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl text-ivory">
                Ancient Therapies for Modern Life
              </h2>
            </div>
            <Link to="/ayurveda" className="text-sage hover:text-gold transition-colors inline-flex items-center gap-2">
              View All Treatments <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6">
          {teaserTreatments.map((t) => (
            <div
              key={t.name}
              className="snap-start shrink-0 w-[280px] md:w-[320px] rounded-2xl border border-gold/40 bg-bark/40 p-7 hover:bg-bark/60 transition-colors"
            >
              <Leaf className="h-6 w-6 text-gold" />
              <h3 className="mt-5 font-display text-3xl text-ivory">{t.name}</h3>
              <p className="mt-3 text-ivory/65 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="text-center">
            <p className="font-script text-3xl text-earth">Kind Words</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-bark">Words from Our Guests</h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="h-full bg-ivory border border-mist rounded-2xl p-8 shadow-warm flex flex-col">
                  <Quote className="h-8 w-8 text-gold" />
                  <p className="mt-4 font-display italic text-xl text-bark/85 leading-snug flex-1">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-full grid place-items-center text-ivory text-sm font-medium shrink-0"
                      style={{ background: "linear-gradient(135deg, #8A9E7F, #C4916A)" }}
                    >
                      {t.name.split(" ").map((s) => s[0]).join("")}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-bark">{t.name}</p>
                      <p className="text-xs text-bark/50">{t.location}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5 text-earth">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 text-center overflow-hidden bg-sage-dark">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.15), transparent 40%)",
          }}
        />
        <div className="mx-auto max-w-3xl px-6 relative">
          <ScrollReveal>
            <h2 className="font-display text-ivory text-4xl md:text-5xl leading-tight">
              Begin Your Healing Journey Today
            </h2>
            <p className="mt-4 text-ivory/80">Limited spaces available. Book your personalized retreat now.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-earth px-7 py-3.5 text-ivory hover:bg-bark transition-colors"
            >
              Book a Retreat <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-5 text-ivory/70 text-sm inline-flex items-center gap-2 justify-center">
              <Phone className="h-4 w-4" /> Or call us at +94 77 000 0000
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
