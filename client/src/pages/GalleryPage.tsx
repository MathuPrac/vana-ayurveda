import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? null : (i + 1) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-bark py-24 text-center -mt-[72px] pt-[calc(72px+6rem)]">
        <p className="font-script text-3xl text-gold">Glimpses of Serenity</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl text-ivory">A Visual Journey Through Vana</h1>
      </section>

      {/* ── MASONRY GRID ── */}
      <section className="bg-ivory py-20 px-6">
        <div className="mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {gallery.map((g, i) => (
            <button
              key={g.url}
              onClick={() => setOpenIndex(i)}
              className="group relative mb-6 block w-full overflow-hidden rounded-2xl break-inside-avoid"
            >
              <img
                src={g.url}
                alt={g.alt}
                loading="lazy"
                className="w-full vana-img transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-bark/95 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setOpenIndex(null)}
          >
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-5 right-5 text-ivory p-2"
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
              }}
              className="absolute left-3 md:left-8 text-ivory p-2 hover:text-gold"
              aria-label="Previous"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <motion.img
              key={gallery[openIndex].url}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={gallery[openIndex].url}
              alt={gallery[openIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain vana-img shadow-warm-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? null : (i + 1) % gallery.length));
              }}
              className="absolute right-3 md:right-8 text-ivory p-2 hover:text-gold"
              aria-label="Next"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
