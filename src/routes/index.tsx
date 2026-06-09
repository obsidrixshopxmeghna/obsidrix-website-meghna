import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Heart, ShoppingBag, Eye, Star, ChevronRight, Truck, ShieldCheck,
  Sparkles, Award, Leaf, Instagram, Mail, MapPin, ArrowRight, Menu, X, Search, Quote,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import meghna1 from "@/assets/meghna-1.jpg";
import meghna2 from "@/assets/meghna-2.jpg";
import ed1 from "@/assets/editorial-1.jpg";
import ed2 from "@/assets/editorial-2.jpg";
import ed3 from "@/assets/editorial-3.jpg";
import ed4 from "@/assets/editorial-4.jpg";
import { products } from "@/lib/products";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OBSIDRIX — Luxury Women's Kurti Collection | Featuring Meghna Chavan" },
      { name: "description", content: "Discover OBSIDRIX — premium cotton, floral & printed kurtas crafted for the modern Indian woman. Featuring Meghna Chavan as the official brand ambassador." },
      { property: "og:title", content: "OBSIDRIX — Luxury Women's Kurti Collection" },
      { property: "og:description", content: "Meghna Chavan is the face of OBSIDRIX. Shop the new women's kurti collection." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "preload", as: "image", href: hero, fetchpriority: "high" } as any],
  }),
  component: Home,
});

/* ------------------------- NAV ------------------------- */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2.5 backdrop-blur-xl bg-background/70 border-b border-border" : "py-4 bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        <a href="/" className="font-display text-xl md:text-2xl tracking-[0.35em] font-light text-ivory">
          OBSIDRIX
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[11px] tracking-[0.25em] uppercase text-ivory/80">
          <a href="/#collections" className="hover:text-gold transition">Collections</a>
          <a href="/#ambassador" className="hover:text-gold transition">Ambassador</a>
          <a href="/#trending" className="hover:text-gold transition">Trending</a>
          <a href="/#gallery" className="hover:text-gold transition">Gallery</a>
          <a href="/#why" className="hover:text-gold transition">Why Obsidrix</a>
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="hidden md:flex h-9 w-9 items-center justify-center rounded-full text-ivory/80 hover:text-gold hover:bg-white/5 transition"><Search className="h-4 w-4" /></button>
          <button aria-label="Wishlist" className="hidden md:flex h-9 w-9 items-center justify-center rounded-full text-ivory/80 hover:text-gold hover:bg-white/5 transition"><Heart className="h-4 w-4" /></button>
          <button aria-label="Bag" className="relative h-9 w-9 flex items-center justify-center rounded-full text-ivory/80 hover:text-gold hover:bg-white/5 transition">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 grid place-items-center rounded-full gold-gradient text-[10px] font-medium text-ink">2</span>
          </button>
          <button aria-label="Menu" className="md:hidden h-9 w-9 grid place-items-center text-ivory" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden fixed inset-0 bg-ink/95 backdrop-blur-xl z-50 flex flex-col">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-xl tracking-[0.35em] text-ivory">OBSIDRIX</span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="h-9 w-9 grid place-items-center text-ivory"><X className="h-5 w-5" /></button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-7 text-ivory">
            {["Collections","Ambassador","Trending","Gallery","Why Obsidrix"].map((s,i)=>(
              <motion.a key={s} href={`/#${s.toLowerCase().replace(/ /g,"-")}`} onClick={()=>setOpen(false)}
                initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}}
                className="font-display text-3xl">{s}</motion.a>
            ))}
            <div className="gold-hairline w-24 my-3" />
            <a href="/#trending" onClick={()=>setOpen(false)} className="gold-gradient text-ink text-xs tracking-[0.3em] uppercase px-7 py-3 rounded-full">Shop Now</a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

/* ------------------------- HERO ------------------------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-ink noise">
      {/* gold ambient orbs */}
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute bottom-0 -left-40 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />

      <Nav />

      <div className="relative pt-28 md:pt-36 pb-12 mx-auto max-w-7xl px-5 grid md:grid-cols-12 gap-8 items-center">
        <motion.div style={{ y, opacity: op }} className="md:col-span-6 md:order-1 order-2 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase text-gold">
              <Sparkles className="h-3 w-3" /> New Campaign · Autumn 2026
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display font-light text-[clamp(2.6rem,8vw,5.5rem)] leading-[1] text-ivory">
              The new face <br />
              of <span className="text-gold-gradient italic">Obsidrix</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-ivory/70 text-[15px] leading-relaxed">
              An elevated curation of precision-crafted apparel — engineered for the modern Indian silhouette.
              Featuring <span className="text-gold">Meghna Chavan</span> as our principal brand ambassador.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/#trending" className="group relative overflow-hidden gold-gradient text-ink text-xs tracking-[0.3em] uppercase px-7 py-4 rounded-full font-medium inline-flex items-center gap-2 shadow-glow">
                Shop Collection <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="/#ambassador" className="glass text-ivory text-xs tracking-[0.3em] uppercase px-7 py-4 rounded-full inline-flex items-center gap-2 hover:border-gold/60 transition">
                Explore Campaign
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-9 flex items-center gap-6 text-ivory/60 text-[11px] tracking-[0.2em] uppercase">
              <div className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-gold"/>Verified Seller</div>
              <div className="flex items-center gap-2"><Truck className="h-3.5 w-3.5 text-gold"/>Free Delivery</div>
            </div>
          </Reveal>
        </motion.div>

        <div className="md:col-span-6 md:order-2 order-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe"
          >
            <img src={hero} alt="OBSIDRIX kurti campaign featuring Meghna Chavan" width={1280} height={1600} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between">
              <div>
                <div className="text-[10px] tracking-[0.35em] uppercase text-gold">Brand Ambassador</div>
                <div className="font-display text-2xl text-ivory">Meghna Chavan</div>
              </div>
            </div>
          </motion.div>
          {/* floating glass cards */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}
            className="hidden md:flex absolute -left-10 top-1/3 glass rounded-2xl p-4 w-44 items-center gap-3">
            <div className="h-9 w-9 rounded-full grid place-items-center gold-gradient"><Award className="h-4 w-4 text-ink"/></div>
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-ivory/60">Rated</div>
              <div className="text-ivory text-sm font-medium">4.8 / 5 ★</div>
            </div>
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}
            className="hidden md:flex absolute -right-6 bottom-12 glass rounded-2xl p-4 w-48 flex-col gap-1">
            <div className="text-[10px] tracking-[0.2em] uppercase text-gold">Free Delivery</div>
            <div className="text-ivory text-sm">In 6–7 days · India</div>
          </motion.div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-y border-border bg-charcoal/40 overflow-hidden py-3 flex">
        <div className="flex w-max animate-marquee items-center text-[11px] tracking-[0.4em] uppercase text-ivory/50">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Free Delivery", "Verified Seller", "Secure Payments", "Easy Returns", "Premium Fabric", "Trusted by 50K+ Women"].map((t, j) => (
              <span key={`${i}-${j}`} className="mx-8 inline-flex shrink-0 items-center gap-3">
                <Sparkles className="h-3 w-3 shrink-0 text-gold" /> {t}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- AMBASSADOR ------------------------- */
function Ambassador() {
  return (
    <section id="ambassador" className="relative py-24 md:py-36 bg-ink noise">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 01</div></Reveal>
          <Reveal delay={0.1}><h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory">Official Brand Ambassador</h2></Reveal>
          <Reveal delay={0.2}><div className="gold-hairline w-24 mx-auto mt-6" /></Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {[meghna1, meghna2].map((src, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative">
                <div className="absolute -inset-px gold-gradient rounded-[1.5rem] opacity-40 blur-md group-hover:opacity-70 transition" />
                <div className="relative glass rounded-[1.5rem] overflow-hidden shadow-luxe">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={src}
                      alt={`Meghna Chavan — editorial portrait ${i + 1}`}
                      width={1024} height={1280} loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70" />
                    {/* ambassador ribbon */}
                    <div className="absolute top-4 left-4 glass-gold rounded-full px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-gold">
                      {i === 0 ? "Model & Beautician" : "Official Ambassador"}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.35em] uppercase text-gold">Meghna Chavan</div>
                      <div className="font-display text-2xl md:text-3xl text-ivory mt-1">
                        {i === 0 ? "Rani Pink Floral Drape" : "Peshwai Yellow Paithani"}
                      </div>
                    </div>
                    <Sparkles className="h-5 w-5 text-gold animate-pulse-gold" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center max-w-2xl mx-auto text-ivory/80 text-sm md:text-base leading-relaxed tracking-wide">
            Presenting our official brand ambassador, Meghna Chavan, showcasing our signature campaign collection. Every drape tells a beautiful story of rich Indian traditions woven with a modern touch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- FACE OF ------------------------- */
function FaceOf() {
  return (
    <section className="relative py-24 md:py-36 bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 02</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-light text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] text-ivory">
              The face of <br/><span className="text-gold-gradient italic">Obsidrix</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="gold-hairline w-20 my-7" />
          </Reveal>
          <Reveal delay={0.3}>
            <Quote className="h-8 w-8 text-gold/40 mb-3"/>
            <p className="font-display italic text-2xl md:text-3xl text-ivory/90 leading-snug max-w-xl">
              "Obsidrix fuses structural integrity with modern Indian aesthetics — precision-crafted apparel engineered for dynamic living."
            </p>
            <div className="mt-4 text-[11px] tracking-[0.3em] uppercase text-ivory/50">— Meghna Chavan</div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "50K+", v: "Women" },
                { k: "120+", v: "Designs" },
                { k: "4.8★", v: "Rated" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl text-gold-gradient">{s.k}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-ivory/60 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal>
            <TiltCard className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-luxe">
              <img src={ed1} alt="OBSIDRIX editorial campaign" width={1280} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30"/>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="font-display text-xl text-ivory">Campaign N°1</div>
                <div className="glass-gold px-2.5 py-1 rounded-full text-[10px] tracking-[0.3em] uppercase text-gold">2026</div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- COLLECTIONS ------------------------- */
const collections = [
  { name: "Cotton", img: products[0].image, tag: "Daily Luxe" },
  { name: "Floral", img: products[6].image, tag: "Garden Edit" },
  { name: "Printed", img: products[8].image, tag: "Signature" },
  { name: "Kurta Sets", img: products[5].image, tag: "Co-ord" },
  { name: "Summer", img: products[3].image, tag: "Breezy" },
  { name: "Trending", img: products[2].image, tag: "On Repeat" },
  { name: "New Arrivals", img: products[9].image, tag: "Just Dropped" },
  { name: "Best Sellers", img: products[11].image, tag: "Top Loved" },
];

function Collections() {
  return (
    <section id="collections" className="relative py-24 md:py-36 bg-ink">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 03</div></Reveal>
            <Reveal delay={0.1}><h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory">Women's Kurti Collections</h2></Reveal>
          </div>
          <Reveal delay={0.2}><a href="/#trending" className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-gold hover:underline underline-offset-4">View All <ChevronRight className="h-4 w-4"/></a></Reveal>
        </div>

        {/* mobile swipe */}
        <div className="md:hidden -mx-5 px-5 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {collections.map((c) => <CollectionCard key={c.name} c={c} />)}
        </div>
        {/* desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-5">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04}><CollectionCard c={c} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ c }: { c: typeof collections[number] }) {
  return (
    <TiltCard className="snap-start shrink-0 w-[72vw] md:w-auto group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
      <img src={c.img} alt={`${c.name} kurti collection`} width={768} height={1024} loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"/>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="text-[10px] tracking-[0.35em] uppercase text-gold">{c.tag}</div>
        <div className="mt-1 flex items-center justify-between">
          <div className="font-display text-2xl text-ivory">{c.name}</div>
          <div className="h-9 w-9 grid place-items-center rounded-full glass-gold text-gold group-hover:gold-gradient group-hover:text-ink transition">
            <ArrowRight className="h-4 w-4"/>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

/* ------------------------- SHOWCASE ------------------------- */
function Showcase() {
  return (
    <section className="relative py-24 md:py-36 bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-12">
          <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 04</div></Reveal>
          <Reveal delay={0.1}><h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory">A Luxury Fashion Showcase</h2></Reveal>
          <Reveal delay={0.2}><div className="gold-hairline w-24 mx-auto mt-6"/></Reveal>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe">
              <img src={ed1} alt="Editorial moment" width={1280} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"/>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Chapter I</div>
                <div className="font-display text-3xl md:text-5xl text-ivory mt-2">Light, fabric, motion</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5" delay={0.1}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe">
              <img src={ed2} alt="Gold embroidery detail" width={1024} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"/>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Chapter II</div>
                <div className="font-display text-2xl md:text-3xl text-ivory mt-2">The art of zari</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5" delay={0.15}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxe">
              <img src={ed3} alt="Pink kurta in motion" width={1024} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"/>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Chapter III</div>
                <div className="font-display text-2xl md:text-3xl text-ivory mt-2">Soft rebellion</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={0.2}>
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-luxe">
              <img src={ed4} alt="Emerald kurta editorial" width={1024} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"/>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Chapter IV</div>
                <div className="font-display text-3xl md:text-5xl text-ivory mt-2">An emerald hush</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- TRENDING / PRODUCTS ------------------------- */
function Trending() {
  return (
    <section id="trending" className="relative py-24 md:py-36 bg-ink">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 05</div></Reveal>
            <Reveal delay={0.1}><h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory">Trending Kurti Collection</h2></Reveal>
            <Reveal delay={0.2}><p className="mt-3 text-ivory/60 text-sm max-w-md">High-performance silhouettes from our latest drop. Premium textiles, architectural cuts, uncompromising quality.</p></Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.05}><ProductCard p={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: typeof products[number] }) {
  const [wish, setWish] = useState(false);
  return (
    <TiltCard className="group relative rounded-2xl overflow-hidden glass shadow-luxe">
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        <img src={p.image} alt={p.title} width={768} height={1024} loading="lazy"
          onClick={() => window.location.href = 'https://obsidrix.online/'}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"/>
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
          <span className="gold-gradient text-ink text-[10px] font-semibold px-2 py-1 rounded-md tracking-wider">{p.discount}% OFF</span>
          {p.badge && <span className="glass-gold text-gold text-[10px] font-medium px-2 py-1 rounded-md">{p.badge}</span>}
        </div>
        <button aria-label="Wishlist" onClick={() => setWish(!wish)} className="absolute top-2.5 right-2.5 h-8 w-8 grid place-items-center rounded-full glass hover:bg-white/15 transition">
          <Heart className={`h-3.5 w-3.5 ${wish ? "fill-gold text-gold" : "text-ivory"}`}/>
        </button>
        <div className="absolute bottom-2.5 left-2.5 glass-gold px-2 py-1 rounded-md flex items-center gap-1 text-[10px] text-gold">
          <ShieldCheck className="h-3 w-3"/> Verified
        </div>
        {/* hover quick actions */}
        <div className="absolute inset-x-2.5 bottom-12 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition flex gap-2">
          <button className="flex-1 glass rounded-full text-[10px] tracking-[0.2em] uppercase text-ivory py-2 inline-flex items-center justify-center gap-1.5 hover:border-gold/60"><Eye className="h-3 w-3"/> Quick</button>
          <button onClick={() => window.location.href = 'https://obsidrix.online/'} className="flex-1 gold-gradient text-ink rounded-full text-[10px] tracking-[0.2em] uppercase py-2 inline-flex items-center justify-center gap-1.5 font-medium"><ShoppingBag className="h-3 w-3"/> Add</button>
        </div>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="text-ivory text-[13px] leading-snug font-medium line-clamp-2 min-h-[34px]">{p.title}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-[11px]">
          <Star className="h-3 w-3 fill-gold text-gold"/>
          <span className="text-ivory">{p.rating}</span>
          <span className="text-ivory/50">({p.reviews})</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-xl text-ivory">₹{p.price}</span>
          <span className="text-ivory/40 line-through text-xs">₹{p.mrp}</span>
          <span className="text-gold text-[10px] font-medium ml-auto">Save ₹{p.mrp - p.price}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {p.sizes.slice(0,4).map(s => (
            <span key={s} className="text-[9px] tracking-wider uppercase text-ivory/70 px-1.5 py-0.5 border border-border rounded">{s}</span>
          ))}
          {p.sizes.length > 4 && <span className="text-[9px] text-gold px-1.5 py-0.5">+{p.sizes.length - 4}</span>}
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[10px] text-ivory/60">
          <Truck className="h-3 w-3 text-gold"/> Free delivery · 6–7 days
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button onClick={() => window.location.href = 'https://obsidrix.online/'} className="glass rounded-full text-[10px] tracking-[0.2em] uppercase text-ivory py-2 hover:border-gold/60 transition">Cart</button>
          <button onClick={() => window.location.href = 'https://obsidrix.online/'} className="gold-gradient text-ink rounded-full text-[10px] tracking-[0.2em] uppercase py-2 font-medium">Buy</button>
        </div>
      </div>
    </TiltCard>
  );
}

/* ------------------------- MASONRY ------------------------- */
function Masonry() {
  const imgs = [products[1].image, ed3, products[5].image, ed4, products[3].image, products[8].image, ed1, products[11].image];
  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-12">
          <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 06</div></Reveal>
          <Reveal delay={0.1}><h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory">Premium Collection</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-3 text-ivory/60 text-sm max-w-md mx-auto">A curated visual archive — bookmarked and endorsed by our global clientele.</p></Reveal>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-5 [column-fill:_balance]">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05} className="mb-3 md:mb-5 break-inside-avoid">
              <div className="group relative rounded-xl overflow-hidden">
                <img src={src} alt="" loading="lazy" className={`w-full ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-square"} object-cover transition-transform duration-700 group-hover:scale-105`}/>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"/>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- WHY ------------------------- */
const whys = [
  { icon: Leaf, t: "Premium Fabric", d: "Engineered textiles designed for optimal breathability and thermal regulation." },
  { icon: Sparkles, t: "Architectural Cuts", d: "Precision-engineered silhouettes conceptualized by our core design facility." },
  { icon: Award, t: "Loved by 50K+", d: "A global demographic demonstrating high retention and repeat procurement." },
  { icon: ShieldCheck, t: "Verified Quality", d: "Stringent multi-phase QA protocols applied to every outgoing unit." },
  { icon: Truck, t: "Expedited Logistics", d: "Complimentary shipping via secure logistics partners. 100% prepaid secure checkout." },
  { icon: Heart, t: "Ethical Sourcing", d: "Sustainable manufacturing infrastructure with zero compromise on labor standards." },
];

function Why() {
  return (
    <section id="why" className="relative py-24 md:py-36 bg-ink">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 07</div></Reveal>
          <Reveal delay={0.1}><h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory">Why Obsidrix</h2></Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {whys.map((w, i) => (
            <Reveal key={w.t} delay={(i % 3) * 0.05}>
              <TiltCard className="relative glass rounded-2xl p-7 h-full group hover:border-gold/40 transition">
                <div className="h-12 w-12 grid place-items-center rounded-xl gold-gradient text-ink mb-5 group-hover:scale-110 transition"><w.icon className="h-5 w-5"/></div>
                <div className="font-display text-2xl text-ivory">{w.t}</div>
                <p className="mt-2 text-ivory/60 text-sm leading-relaxed">{w.d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- GALLERY (community editorial) ------------------------- */
function CustomerGallery() {
  const imgs = [products[0].image, products[3].image, products[6].image, products[9].image, products[2].image, products[11].image];
  return (
    <section className="relative py-24 md:py-36 bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between mb-10">
          <div>
            <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 08</div></Reveal>
            <Reveal delay={0.1}><h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory">Customer Fashion Gallery</h2></Reveal>
          </div>
        </div>
        <div className="-mx-5 md:mx-0 overflow-x-auto md:overflow-visible scrollbar-hide">
          <div className="flex md:grid md:grid-cols-6 gap-3 md:gap-4 px-5 md:px-0">
            {imgs.map((src, i) => (
              <Reveal key={i} delay={i * 0.04} className="shrink-0 w-[55vw] md:w-auto">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden group">
                  <img src={src} alt={`Customer wearing OBSIDRIX ${i+1}`} width={768} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"/>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-ivory">@obsidrix.shop</span>
                    <Heart className="h-3.5 w-3.5 text-gold"/>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- INSTAGRAM ------------------------- */
function InstagramSection() {
  const tiles = [products[1].image, products[4].image, products[7].image, products[10].image];
  return (
    <section className="relative py-24 md:py-36 bg-ink">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-12">
          <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 09</div></Reveal>
          <Reveal delay={0.1}>
            <a href="https://instagram.com/obsidrix.shop" target="_blank" rel="noreferrer">
              <h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory inline-flex items-center gap-3 justify-center hover:text-gold transition">
                <Instagram className="h-8 w-8 text-gold"/> @obsidrix.shop
              </h2>
            </a>
          </Reveal>
          <Reveal delay={0.2}><p className="mt-3 text-ivory/60 text-sm">Follow the campaign — daily drops, behind-the-scenes & style edits.</p></Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {tiles.map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <a href="#" className="group relative block aspect-square rounded-xl overflow-hidden">
                <img src={src} alt="Instagram post" width={600} height={600} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition grid place-items-center">
                  <Instagram className="h-7 w-7 text-gold"/>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- TESTIMONIALS ------------------------- */
const testimonials = [
  { name: "Ananya R.", city: "Mumbai", text: "The textile integrity and finishing surpass brands at quadruple the price point. Obsidrix is now my default standard." },
  { name: "Priya S.", city: "Bengaluru", text: "Precision fit across all silhouettes procured. Print fidelity matches digital assets perfectly. Seamless logistics." },
  { name: "Kavya M.", city: "Delhi", text: "Appreciate the strong structural direction. Obsidrix garments add immediate intent to any look. Procurement repeated." },
];

function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 bg-charcoal overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[160px]"/>
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <Reveal><div className="text-[10px] tracking-[0.4em] uppercase text-gold">Section 10</div></Reveal>
          <Reveal delay={0.1}><h2 className="mt-3 font-display font-light text-4xl md:text-6xl text-ivory">Loved Out Loud</h2></Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <TiltCard className="glass rounded-2xl p-7 h-full">
                <Quote className="h-6 w-6 text-gold/60"/>
                <p className="mt-4 text-ivory/85 leading-relaxed text-[15px] font-display italic">"{t.text}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-ivory text-sm font-medium">{t.name}</div>
                    <div className="text-ivory/50 text-xs flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3"/>{t.city}</div>
                  </div>
                  <div className="flex gap-0.5">{Array.from({length:5}).map((_,k)=>(<Star key={k} className="h-3 w-3 fill-gold text-gold"/>))}</div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- FOOTER ------------------------- */
export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-3xl tracking-[0.35em] text-ivory">OBSIDRIX</div>
            <p className="mt-5 text-ivory/60 text-sm max-w-md leading-relaxed">
              Engineered luxury apparel for the modern demographic. Featuring Meghna Chavan as our principal brand ambassador.
            </p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-7 flex max-w-md">
              <div className="flex-1 flex items-center glass rounded-l-full px-5">
                <Mail className="h-4 w-4 text-gold mr-2"/>
                <input type="email" required placeholder="Your email" aria-label="Email"
                  className="flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 py-3 focus:outline-none"/>
              </div>
              <button className="gold-gradient text-ink text-xs tracking-[0.3em] uppercase font-medium px-6 rounded-r-full">Join</button>
            </form>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com/obsidrix.shop", target: "_blank" },
                { Icon: Mail, href: "mailto:obsidrixshop@gmail.com", target: "_self" }
              ].map(({ Icon, href, target }, i) => (
                <a key={i} href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined} className="h-10 w-10 grid place-items-center rounded-full glass hover:border-gold/60 text-ivory hover:text-gold transition">
                  <Icon className="h-4 w-4"/>
                </a>
              ))}
            </div>
          </div>

          {[
            { h: "Shop", l: [{name: "Cotton", href: "/#collections"},{name: "Floral", href: "/#collections"},{name: "Printed", href: "/#collections"},{name: "Kurta Sets", href: "/#collections"},{name: "New Arrivals", href: "/#collections"},{name: "Best Sellers", href: "/#collections"}] },
            { h: "Company", l: [{name: "About", href: "/#why"},{name: "Ambassador", href: "/#ambassador"},{name: "Sustainability", href: "/#why"},{name: "Careers", href: "/#"},{name: "Press", href: "/#"}] },
            { h: "Help", l: [{name: "Shipping", href: "/shipping"},{name: "Returns", href: "/returns"},{name: "Size Guide", href: "/#"},{name: "Contact", href: "/contact"},{name: "Track Order", href: "https://obsidrix.online"}] },
          ].map(b => (
            <div key={b.h} className="md:col-span-2">
              <div className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4">{b.h}</div>
              <ul className="space-y-2.5">
                {b.l.map(i => <li key={i.name}><a href={i.href} className="text-ivory/65 hover:text-gold text-sm transition">{i.name}</a></li>)}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1">
            <div className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4">Reach</div>
            <div className="text-ivory/65 text-sm flex items-start gap-2"><MapPin className="h-3.5 w-3.5 text-gold mt-0.5"/>Mumbai, IN</div>
          </div>
        </div>

        <div className="gold-hairline mt-12 mb-6"/>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-ivory/45 text-[11px] tracking-[0.2em] uppercase">
          <div>© 2026 OBSIDRIX. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-gold transition">Privacy</a>
            <a href="/terms" className="hover:text-gold transition">Terms</a>
            <a href="/cookies" className="hover:text-gold transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------- LOADER ------------------------- */
function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 1100); return () => clearTimeout(t); }, []);
  if (done) return null;
  return (
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 0.9, duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-ink grid place-items-center pointer-events-none">
      <div className="text-center">
        <motion.div initial={{ letterSpacing: "0.05em", opacity: 0 }} animate={{ letterSpacing: "0.5em", opacity: 1 }} transition={{ duration: 1.1, ease: [0.22,1,0.36,1] }}
          className="font-display text-2xl md:text-3xl text-ivory">OBSIDRIX</motion.div>
        <motion.div initial={{ width: 0 }} animate={{ width: "8rem" }} transition={{ duration: 1.1 }} className="mt-4 h-px gold-gradient mx-auto"/>
      </div>
    </motion.div>
  );
}

/* ------------------------- PAGE ------------------------- */
function Home() {
  return (
    <main className="bg-ink text-ivory">
      <Loader />
      <Hero />
      <Ambassador />
      <FaceOf />
      <Collections />
      <Showcase />
      <Trending />
      <Masonry />
      <Why />
      <CustomerGallery />
      <InstagramSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
