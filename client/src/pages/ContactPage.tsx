import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { LotusIcon } from "@/components/layout/Logo";
import { submitInquiry, type InquiryPayload } from "@/utils/api";

const countries = [
  "United Kingdom","Germany","France","Spain","Italy","Netherlands","Sweden","Switzerland",
  "United States","Canada","Australia","India","Sri Lanka","United Arab Emirates","Singapore",
  "Japan","China","South Korea","South Africa","Other",
];

const inquiryTypes = ["General Inquiry","Treatment Consultation","Room Booking","Group Retreat","Other"];
const stayOptions  = ["3 Days","5 Days","7 Days","10 Days","14 Days","Custom"];

const inputCls =
  "w-full rounded-lg border border-mist bg-ivory text-bark placeholder-bark/40 px-4 py-3 outline-none focus:ring-2 focus:ring-sage focus:border-sage transition";
const labelCls = "block text-[11px] uppercase tracking-[0.18em] text-bark/60 mb-2";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const payload: InquiryPayload = {
      name:    fd.get("name") as string,
      email:   fd.get("email") as string,
      phone:   fd.get("phone") as string,
      country: fd.get("country") as string,
      inquiry: fd.get("inquiry") as string,
      date:    fd.get("date") as string,
      stay:    fd.get("stay") as string,
      message: fd.get("message") as string,
    };

    try {
      await submitInquiry(payload);
      toast.success("Thank you! We received your inquiry.", {
        description: "Our wellness team will respond within 24 hours.",
        icon: <LotusIcon className="h-5 w-5 text-sage" />,
        duration: 6000,
      });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again or call us directly.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-ivory py-20 text-center px-6">
        <p className="font-script text-3xl text-earth">Get in Touch</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl text-bark">We'd Love to Hear from You</h1>
        <p className="mt-5 max-w-2xl mx-auto text-bark/70">
          Whether you're ready to book a retreat or simply want to learn more, our team is here to guide you.
        </p>
      </section>

      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12">
          {/* ── Contact Info ── */}
          <ScrollReveal className="lg:col-span-2 relative overflow-hidden">
            <LotusIcon className="absolute -right-10 -top-10 h-64 w-64 text-sage/10 pointer-events-none" />
            <div className="relative space-y-6">
              {[
                { Icon: MapPin, label: "Address",  content: <>Serenity Lane, Riverside Gardens,<br />Kalutara, Sri Lanka</> },
                { Icon: Phone,  label: "Phone",    content: "+94 77 000 0000" },
                { Icon: Mail,   label: "Email",    content: "hello@vanaayurveda.com" },
                { Icon: Clock,  label: "Hours",    content: "Open daily, 7:00 AM – 8:00 PM" },
              ].map(({ Icon, label, content }) => (
                <div key={label} className="flex gap-4">
                  <Icon className="h-5 w-5 text-sage-dark mt-1 shrink-0" />
                  <div>
                    <p className={labelCls}>{label}</p>
                    <p className="text-bark">{content}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="h-10 w-10 rounded-full grid place-items-center bg-ivory border border-mist hover:bg-earth hover:text-ivory hover:border-earth transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-mist mt-6">
                <iframe
                  title="Vana Ayurveda location"
                  src="https://www.google.com/maps?q=Kalutara%2C%20Sri%20Lanka&output=embed"
                  className="w-full h-72 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* ── Inquiry Form ── */}
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="bg-ivory rounded-2xl p-8 md:p-10 border border-mist shadow-warm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Full Name</label>
                  <input required name="name" type="text" placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Email Address</label>
                  <input required name="email" type="email" placeholder="you@example.com" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Phone Number</label>
                  <input name="phone" type="tel" placeholder="+94 ..." className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Country of Residence</label>
                  <select required name="country" className={inputCls} defaultValue="">
                    <option value="" disabled>Select country</option>
                    {countries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Type of Inquiry</label>
                  <select required name="inquiry" className={inputCls} defaultValue="">
                    <option value="" disabled>Select inquiry type</option>
                    {inquiryTypes.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Preferred Arrival Date</label>
                  <input name="date" type="date" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Duration of Stay</label>
                  <select required name="stay" className={inputCls} defaultValue="">
                    <option value="" disabled>Select duration</option>
                    {stayOptions.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className={labelCls}>Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your wellness goals..."
                  className={inputCls}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-sage-dark text-ivory py-4 hover:bg-bark transition-colors disabled:opacity-60 font-body tracking-wide"
              >
                {submitting ? "Sending…" : "Send My Inquiry"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
