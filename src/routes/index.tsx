import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

import heroAsset from "../assets/koi-garden-hero.jpg.asset.json";
import cafeAsset from "../assets/koi-cafe-table.jpg.asset.json";
import dessertsAsset from "../assets/koi-desserts.jpg.asset.json";
import mascotAsset from "../assets/koi-mascot.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Koi Fish | Japanese Garden Café" },
      { name: "description", content: "Discover The Koi Fish, a peaceful Japanese garden café with original drinks, food, and a calm pond-side experience." },
      { property: "og:title", content: "The Koi Fish | Japanese Garden Café" },
      { property: "og:description", content: "Every Moment, Flowing. A Japanese garden café made for calm, connection, and beautiful flavors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  {
    category: "Coffee & Drinks",
    note: "Thoughtful drinks, inspired by the colors of the pond.",
    items: [
      ["Kohaku Espresso", "Double espresso · orange peel", "$55"],
      ["Asagi Americano", "Espresso · mineral water", "$58"],
      ["Kohaku Cappuccino", "Espresso · silky milk · koi stencil", "$72"],
      ["Ogon Latte", "Turmeric · vanilla · espresso", "$78"],
      ["Matcha Garden", "Ceremonial matcha · oat milk", "$82"],
      ["Sakura Fizz", "Cherry blossom · yuzu · soda", "$76"],
    ],
  },
  {
    category: "Bakery & Savory",
    note: "Freshly prepared with garden herbs and Japanese accents.",
    items: [
      ["Kohaku Caprese", "Tomato · mozzarella · shiso pesto", "$128"],
      ["Sanke Prosciutto", "Milk bread · prosciutto · pear", "$142"],
      ["Garden Pond Bagel", "Salmon · cucumber · wasabi cream", "$136"],
      ["Miso Mushroom Toast", "Shiitake · miso butter · sesame", "$118"],
      ["Tamago Sando", "Japanese egg salad · shokupan", "$105"],
    ],
  },
  {
    category: "Desserts",
    note: "Small, sculptural sweets made to slow the moment down.",
    items: [
      ["Matcha Koi Mochi", "Matcha bean paste · rice flour", "$68"],
      ["Sakura Koi Mochi", "Cherry blossom · white bean", "$68"],
      ["Koi Cloud Cheesecake", "Yuzu · vanilla · sesame crust", "$94"],
      ["Black Sesame Pond", "Sesame mousse · mandarin gel", "$98"],
      ["Maple Dorayaki", "Red bean · maple cream", "$82"],
    ],
  },
];

const team = [
  { name: "Ernesto", role: "Brand & Logo", mark: "01" },
  { name: "Iker", role: "Menu & Direction", mark: "02" },
  { name: "Diego", role: "Website & Layout", mark: "03" },
  { name: "Sebastian", role: "Copy & Research", mark: "04" },
];

const meetings = [
  ["01", "Monday · Sep 14", "10:00–11:00 AM", "Define concept and assign roles"],
  ["02", "Wednesday · Sep 16", "10:00–11:00 AM", "Review website and menu"],
  ["03", "Thursday · Sep 17", "10:00–11:00 AM", "Finalize project and presentation"],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-3 ${light ? "text-paper" : "text-ink"}`} aria-label="The Koi Fish home">
      <svg viewBox="0 0 52 36" className="h-8 w-12 transition-transform duration-500 group-hover:rotate-6" fill="none" aria-hidden="true">
        <path d="M8 18C17 4 34 5 42 17C34 31 17 32 8 18Z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 18 2 8v20l6-10ZM26 9c-5 5-5 13 0 19M40 14c3 2 5 2 9 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="15" r="1.5" fill="currentColor" />
      </svg>
      <span className="font-display text-xl">The Koi Fish</span>
    </a>
  );
}

function SectionTitle({ eyebrow, children, intro }: { eyebrow: string; children: ReactNode; intro?: string }) {
  return (
    <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase text-primary">{eyebrow}</p>
        <h2 className="max-w-2xl font-display text-5xl leading-[0.98] text-ink md:text-7xl">{children}</h2>
      </div>
      {intro && <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">{intro}</p>}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [["Concept", "#concept"], ["Menu", "#menu"], ["Team", "#team"], ["Project", "#project"]];

  return (
    <main id="top" className="overflow-hidden bg-background">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-paper/30 text-paper">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          <Logo light />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {nav.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium transition-opacity hover:opacity-60">{label}</a>)}
          </nav>
          <a href="#location" className="hidden items-center gap-2 rounded-md bg-paper px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 md:inline-flex">Visit us <ArrowUpRight className="size-4" /></a>
          <button className="grid size-10 place-items-center rounded-md border border-paper/60 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-paper/30 bg-pond px-5 py-5 md:hidden" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-lg">{label}</a>)}</nav>}
      </header>

      <section className="relative min-h-[92svh] bg-pond text-paper">
        <img src={heroAsset.url} alt="Koi fish swimming through a sunlit Japanese garden pond" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-36 md:px-10 md:pb-20">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase"><span className="h-px w-10 bg-salmon" /> Japanese Garden Café · Mexico City</p>
          <h1 className="max-w-5xl font-display text-7xl leading-[0.82] md:text-9xl lg:text-[10rem]">The Koi<br/><em className="font-normal text-salmon-soft">Fish</em></h1>
          <div className="mt-8 flex flex-col gap-7 border-t border-paper/40 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-display text-2xl md:text-3xl">Every Moment, Flowing.</p>
            <a href="#concept" className="inline-flex items-center gap-2 text-sm font-semibold">Enter the garden <ArrowDown className="size-4" /></a>
          </div>
        </div>
      </section>

      <section id="concept" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="01 · Our concept" intro="We chose the Japanese Garden Café concept because it transforms a simple coffee break into an intentional pause—a place where thoughtful flavors and natural beauty move at the same pace.">A café shaped by <em className="text-primary">calm.</em></SectionTitle>
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="relative min-h-[520px] overflow-hidden lg:col-span-5">
              <img src={cafeAsset.url} alt="Matcha and sakura mochi served in a Japanese garden" loading="lazy" width={912} height={1200} className="absolute inset-0 h-full w-full object-cover" />
              <span className="absolute bottom-4 left-4 rounded-md bg-paper px-3 py-2 text-xs font-semibold text-ink">A slower kind of café</span>
            </div>
            <div className="flex flex-col justify-between bg-pond p-8 text-paper lg:col-span-4 md:p-12">
              <Leaf className="size-10 text-salmon" strokeWidth={1.5} />
              <div>
                <p className="font-display text-3xl leading-tight md:text-4xl">“Like koi in water, the best moments arrive when we stop forcing the current.”</p>
                <p className="mt-8 text-sm leading-6 text-paper/70">Koi symbolize perseverance and harmony. Japanese gardens create room for reflection. Coffee brings people together. Here, those ideas become one peaceful ritual.</p>
              </div>
            </div>
            <div className="grid gap-5 lg:col-span-3">
              {[["Koi", "Harmony in motion"], ["Garden", "Nature as a room"], ["Café", "Connection by design"]].map(([title, copy], i) => (
                <div key={title} className={`flex min-h-40 flex-col justify-between border p-6 ${i === 1 ? "bg-salmon-soft" : "bg-paper"}`}>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  <div><h3 className="font-display text-3xl text-ink">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionTitle eyebrow="02 · Visual identity" intro="A warm, confident identity built around the movement of water, the spirit of the koi, and the tactile calm of a garden café.">A living <em className="text-primary">identity.</em></SectionTitle>
          <div className="grid border border-border lg:grid-cols-2">
            <div className="flex min-h-[410px] flex-col justify-between bg-cream p-8 md:p-12">
              <span className="text-xs font-semibold uppercase text-primary">Primary mark</span>
              <div className="scale-150 origin-left"><Logo /></div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">A single continuous fish form suggests movement, balance, and the quiet rhythm of water.</p>
            </div>
            <div className="grid min-h-[410px] grid-cols-2 grid-rows-2">
              {[
                ["Koi orange", "bg-primary", "text-primary-foreground"],
                ["Sakura pink", "bg-salmon-soft", "text-ink"],
                ["Garden green", "bg-pond", "text-paper"],
                ["Rice paper", "bg-cream", "text-ink"],
              ].map(([name, bg, text]) => <div key={name} className={`flex items-end p-5 ${bg} ${text}`}><span className="text-xs font-semibold uppercase">{name}</span></div>)}
            </div>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-12">
            <div className="relative overflow-hidden bg-salmon-soft p-8 lg:col-span-5 md:p-12">
              <span className="text-xs font-semibold uppercase text-koi-red">Meet Kō-chan</span>
              <h3 className="mt-3 max-w-xs font-display text-4xl text-ink">Our little keeper of calm.</h3>
              <img src={mascotAsset.url} alt="Kō-chan, the orange and white koi café mascot" loading="lazy" width={1024} height={1024} className="koi-drift mx-auto mt-4 w-3/4 mix-blend-multiply" />
            </div>
            <div className="relative min-h-[540px] overflow-hidden bg-pond text-paper lg:col-span-7">
              <img src={heroAsset.url} alt="Koi pond and Japanese maple banner" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-pond via-pond/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-8 md:p-12">
                <div className="flex justify-between text-xs font-semibold uppercase"><span>Brand banner</span><span>庭 · 水 · 珈琲</span></div>
                <div><p className="font-display text-6xl leading-none md:text-8xl">The Koi Fish</p><p className="mt-4 text-xl">Every Moment, Flowing.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="03 · The menu" intro="Familiar café rituals meet Japanese ingredients. Each item carries the color, texture, or character of a koi variety and its garden home.">Made for the <em className="text-primary">moment.</em></SectionTitle>
          <div className="grid gap-x-12 gap-y-14 lg:grid-cols-3">
            {menu.map((section, idx) => (
              <div key={section.category}>
                <div className="mb-7 border-b-2 border-primary pb-5">
                  <span className="text-xs font-semibold text-primary">0{idx + 1}</span>
                  <h3 className="mt-2 font-display text-4xl text-ink">{section.category}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{section.note}</p>
                </div>
                <div className="space-y-6">
                  {section.items.map(([name, desc, price]) => (
                    <div key={name} className="grid grid-cols-[1fr_auto] gap-4">
                      <div><h4 className="font-semibold text-ink">{name}</h4><p className="mt-1 text-sm text-muted-foreground">{desc}</p></div>
                      <span className="font-display text-xl text-primary">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 grid overflow-hidden bg-koi-red text-paper lg:grid-cols-2">
            <div className="flex flex-col justify-between p-8 md:p-14">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase"><Sparkles className="size-4" /> Weekly ritual</div>
              <div className="my-16"><p className="font-display text-6xl leading-[0.9] md:text-8xl">Koi<br/>Thursdays</p><p className="mt-6 max-w-md text-xl">Buy one drink, get the second one <strong>50% off.</strong></p></div>
              <p className="text-xs text-paper/70">Every Thursday · 4–7 PM · Equal or lesser value</p>
            </div>
            <img src={dessertsAsset.url} alt="Koi-shaped mochi and Japanese café desserts" loading="lazy" width={1200} height={912} className="h-full min-h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="location" className="bg-pond py-24 text-paper md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase text-salmon">04 · Find the garden</p>
              <h2 className="font-display text-6xl leading-none md:text-8xl">Come find<br/>your <em className="text-salmon-soft">flow.</em></h2>
              <div className="mt-10 space-y-5 text-paper/80">
                <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-salmon" /> Av. del Estanque 108, Jardines de Coyoacán,<br/>Mexico City · Fictional location</p>
                <p className="flex gap-3"><Clock3 className="mt-0.5 size-5 shrink-0 text-salmon" /> Mon–Sun · 8:00 AM–9:00 PM</p>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Coyoacan+Mexico+City" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Open in Google Maps <ArrowUpRight className="size-4" /></a>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-pond-soft text-pond">
              <div className="map-grid absolute inset-0 opacity-25" />
              <svg viewBox="0 0 800 520" className="absolute inset-0 h-full w-full" fill="none" aria-label="Stylized map of the fictional restaurant location">
                <path d="M-50 90C160 170 260 80 450 180S720 280 860 200M-80 360C150 270 260 440 470 330S720 280 860 390" stroke="currentColor" strokeWidth="22" opacity=".18" />
                <path d="M80 0v520M255 0v520M560 0v520M0 130h800M0 405h800" stroke="currentColor" strokeWidth="3" opacity=".22" />
                <path d="M350 0c-40 120 50 185 15 300s15 160 70 220" stroke="var(--salmon)" strokeWidth="12" opacity=".8" />
                <circle cx="390" cy="265" r="72" stroke="var(--primary)" strokeWidth="2" className="map-ripple" />
                <circle cx="390" cy="265" r="30" fill="var(--primary)" />
                <path d="M378 265c7-12 19-12 25 0-6 12-18 12-25 0Z" stroke="var(--paper)" strokeWidth="2" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between bg-paper p-5 text-ink">
                <div><p className="text-xs font-semibold uppercase text-primary">The Koi Fish</p><p className="mt-1 font-display text-2xl">Coyoacán Garden</p></div><MapPin className="size-7 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-paper px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="05 · The team" intro="Four disciplines, one shared idea: build a restaurant experience where every detail feels connected.">People behind the <em className="text-primary">pond.</em></SectionTitle>
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => <div key={person.name} className="min-h-56 border-b border-r border-border p-7 transition-colors hover:bg-salmon-soft"><div className="flex items-start justify-between"><Users className="size-6 text-primary"/><span className="text-xs text-muted-foreground">{person.mark}</span></div><div className="mt-20"><h3 className="font-display text-3xl">{person.name}</h3><p className="mt-1 text-sm text-muted-foreground">{person.role}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="project" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="06 · Project plan" intro="Creativity works best with a clear current. These milestones keep every contribution moving toward the same final experience.">From idea to <em className="text-primary">opening.</em></SectionTitle>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 flex items-center gap-3 font-display text-3xl"><Check className="size-6 text-primary" /> Pending tasks</h3>
              <div className="border-t border-border">
                {[["Logo system", "Ernesto", "Monday"], ["Menu & pricing", "Iker", "Wednesday"], ["Website", "Diego", "Thursday"], ["Written content", "Sebastian", "Thursday"], ["Final review", "Full team", "Friday"]].map(([task, person, date]) => <div key={task} className="grid grid-cols-[1fr_auto] gap-4 border-b border-border py-5"><div><p className="font-semibold">{task}</p><p className="mt-1 text-sm text-muted-foreground">{person}</p></div><span className="text-sm font-medium text-primary">{date}</span></div>)}
              </div>
            </div>
            <div>
              <h3 className="mb-6 flex items-center gap-3 font-display text-3xl"><CalendarDays className="size-6 text-primary" /> Meeting calendar</h3>
              <div className="space-y-3">
                {meetings.map(([num, day, time, goal]) => <div key={num} className="grid grid-cols-[auto_1fr] gap-5 bg-paper p-5"><span className="font-display text-3xl text-primary">{num}</span><div><div className="flex flex-wrap justify-between gap-2"><p className="font-semibold">{day}</p><p className="text-sm text-primary">{time}</p></div><p className="mt-2 text-sm text-muted-foreground">{goal}</p></div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-salmon-soft px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="07 · Reflection">What we learned<br/><em className="text-koi-red">along the way.</em></SectionTitle>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["How did the platform help?", "It helped us share information, organize sections, collaborate efficiently, and keep the complete project in one accessible place."],
              ["Why does visual consistency matter?", "Repeating the same colors, typography, and visual style made every part feel connected and helped the restaurant look credible and professional."],
              ["How did we promote respect?", "We listened to every idea, divided responsibilities fairly, communicated respectfully, and stayed accountable to our agreed deadlines."],
            ].map(([q, a], i) => <article key={q} className="flex min-h-72 flex-col justify-between bg-paper p-7 md:p-9"><span className="text-xs font-semibold text-primary">0{i + 1}</span><div><h3 className="font-display text-3xl leading-tight">{q}</h3><p className="mt-5 text-sm leading-6 text-muted-foreground">{a}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-paper md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start"><p className="mb-4 text-xs font-semibold uppercase text-salmon">08 · Investment story</p><h2 className="font-display text-6xl leading-none md:text-8xl">Invest in<br/>the <em className="text-salmon-soft">feeling.</em></h2><p className="mt-8 max-w-md leading-7 text-paper/70">The Koi Fish is more than food. It is a repeatable escape from the daily routine—a distinctive café experience customers will want to return to and share.</p></div>
            <div className="space-y-3">
              {[
                ["01", "The Koi Fish", "Name, logo and our promise: Every Moment, Flowing."],
                ["02", "Our Concept", "A Japanese Garden Café built around calm and connection."],
                ["03", "Visual Identity", "A memorable koi mark, warm palette, mascot and banner."],
                ["04", "Our Menu", "Unique, photographable products with accessible pricing."],
                ["05", "Why Us?", "A differentiated environment—not another generic coffee shop."],
                ["06", "The Experience", "Guests slow down, recharge and feel transported."],
                ["07", "The Opportunity", "A clear brand with repeat visits, merchandise and growth potential."],
              ].map(([num, title, copy]) => <div key={num} className="grid grid-cols-[auto_1fr] gap-6 border-b border-paper/20 py-7"><span className="text-sm text-salmon">{num}</span><div><h3 className="font-display text-3xl">{title}</h3><p className="mt-2 text-sm leading-6 text-paper/60">{copy}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary px-5 py-12 text-primary-foreground md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div><Logo light /><p className="mt-4 text-sm text-primary-foreground/70">Every Moment, Flowing.</p></div>
          <div className="flex flex-wrap gap-6 text-sm"><a href="#concept">Concept</a><a href="#menu">Menu</a><a href="#team">Team</a><a href="#top" className="inline-flex items-center gap-2">Back to top <ArrowUpRight className="size-4" /></a></div>
        </div>
      </footer>
    </main>
  );
}