import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, CalendarDays, Check, ChevronDown, Clock3, Copy,
  Heart, MapPin, Menu, Phone, Send, Share2, Sparkles, X
} from "lucide-react";
// @ts-ignore CSS is loaded by the bundler, which doesn't provide TypeScript declarations.
import "./index.css";

const weddingData = {
  deity: "माणिक प्रभू महाराज",
  groom: "चिरंजीव विनायक",
  bride: "ची. सौ. का. निहारीका",
  date: "16 November 2026",
  dateMr: "१६ नोव्हेंबर २०२६",
  weekday: "सोमवार",
  time: "12:04 PM",
  timeMr: "दुपारी १२:०४ वा.",
  groomFamily: "सौ. अलकाबाई व श्री. प्रभाकर माणिकराव श्रीवास्तव",
  groomAddress: "राहणार उदगीर, तालुका उदगीर, जिल्हा लातूर",
  groomRelation: "यांचे ज्येष्ठ चिरंजीव",
  brideFamily: "श्रीमती ज्योती व कै. व्यंकटेश टी.",
  brideAddress: "राहणार लिंगमपल्ली, जिल्हा हैदराबाद",
  brideRelation: "यांची",
  panchang: ["शके १९४८", "पराभव", "कार्तिक मासे", "शुक्ल पक्ष समाप्ती तिथी"],
  haldiTitle: "हळदी व देवकार्य",
  haldiVenue: "स्वगृही दिनांक १५ नोव्हेंबर २०२६, वार: रविवार ",
  haldiAddress: "समता नगर, यनकी मानकी रोड, उदगीर",
  venue: "भागीरथी मंगल कार्यालय",
  venueAddress: "समता नगर, डॅम रोड, उदगीर",
  mapUrl: "https://maps.app.goo.gl/nFawh5ANsbJZr18Q6",
  phones: ["8459847568", "8459859234"],
  host: "श्री. प्रभाकर माणिकराव श्रीवास्तव",
  invitationText:
    "सोमवार, दिनांक १६ नोव्हेंबर २०२६ रोजी दुपारी १२ वाजून ०४ मिनिटांनी या शुभमुहूर्तावर विवाह सोहळा करण्याचे योजिले असून या कार्यसिद्धीस उपस्थित राहून वधूवरांना शुभ आशीर्वाद द्यावेत ही नम्र विनंती."
};

function useReveal() {
  const reduce = useReducedMotion();
  return {
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }
  };
}

function SectionKicker({ no, title }: { no: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-display text-xs tracking-[.32em] text-[#d6b875]/70">{no}</span>
      <span className="h-px w-12 bg-[#b58a3a]/50" />
      <span className="text-xs tracking-[.18em] text-[#d6b875]/70">{title}</span>
    </div>
  );
}

function Opening({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8 }}
      className="noise fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#1d0c12] heritage-pattern"
    >
      <div className="absolute left-1/2 top-1/2 h-[74vw] w-[74vw] max-h-[620px] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b58a3a]/10" />
      <motion.div
        initial={{ rotate: -18, scale: .8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="ornament-ring relative mx-5 flex w-full max-w-[560px] flex-col items-center justify-center rounded-[999px] px-8 py-20 text-center"
      >
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .35, duration: .8 }}
          className="text-sm tracking-[.28em] text-[#d6b875]"
        >
          श्री गणेशाय नमः
        </motion.div>
        <div className="my-8 h-px w-24 bg-[#b58a3a]/50" />
        <motion.div
          initial={{ opacity: 0, scale: .92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .65, duration: 1 }}
        >
          <p className="text-xs tracking-[.32em] text-[#d6b875]/65">कुळदैवत</p>
          <h1 className="mt-2 text-3xl font-medium text-[#fff8ec] sm:text-4xl">{weddingData.deity}</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
          className="mt-10 text-sm text-[#fff8ec]/60"
        >
          एक सुंदर सुरुवात...
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          whileTap={{ scale: .96 }}
          whileHover={{ scale: 1.03 }}
          onClick={onEnter}
          className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#b58a3a]/55 bg-[#b58a3a]/10 px-6 py-3 text-xs tracking-[.22em] text-[#f0d996]"
        >
          ENTER INVITATION <ArrowRight size={15} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const reveal = useReveal();
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#1d0c12] heritage-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(181,138,58,.13),transparent_36%),linear-gradient(180deg,#1d0c12,#2c101a)]" />
      <div className="absolute left-1/2 top-20 h-52 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d6b875]/50 to-transparent" />
      <div className="section-shell relative flex min-h-[92svh] flex-col items-center justify-center text-center">
        <motion.div {...reveal} className="text-xs tracking-[.38em] text-[#d6b875]/70">THE ROYAL WEDDING JOURNEY</motion.div>
        <motion.div {...reveal} transition={{ delay: .12, duration: .85 }} className="mt-12">
          <div className="text-3xl text-[#fff8ec] sm:text-5xl">{weddingData.groom}</div>
          <div className="my-3 font-display text-3xl text-[#d6b875]">&</div>
          <div className="text-3xl text-[#fff8ec] sm:text-5xl">{weddingData.bride}</div>
        </motion.div>
        <motion.div {...reveal} transition={{ delay: .24, duration: .85 }} className="mt-10">
          <div className="text-xs tracking-[.22em] text-[#d6b875]/75">शुभ विवाह सोहळा</div>
          <div className="mt-3 text-lg text-[#fff8ec]/85">{weddingData.weekday} · {weddingData.dateMr}</div>
          <div className="mt-1 text-sm text-[#fff8ec]/55">{weddingData.timeMr}</div>
        </motion.div>
        <motion.a
          href="#invitation"
          {...reveal}
          transition={{ delay: .4, duration: .85 }}
          className="absolute bottom-8 inline-flex flex-col items-center gap-2 text-[10px] tracking-[.25em] text-[#d6b875]/70"
        >
          SCROLL TO BEGIN <ChevronDown size={17} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}

function Invitation() {
  const reveal = useReveal();
  const [opened, setOpened] = useState(false);
  return (
    <section id="invitation" className="bg-[#fff8ec] text-[#2a1713]">
      <div className="section-shell">
        <motion.div {...reveal}>
          <SectionKicker no="03" title="THE INVITATION" />
          <div className="mx-auto max-w-3xl rounded-[28px] border border-[#b58a3a]/35 bg-[#fffaf2] p-7 shadow-[0_25px_90px_rgba(42,23,19,.12)] sm:p-12">
            <div className="text-center">
              <div className="text-xs tracking-[.25em] text-[#8d642b]">सस्नेह निमंत्रण</div>
              <div className="mx-auto my-7 h-px w-20 bg-[#b58a3a]/50" />
              <p className="leading-8">{weddingData.groomFamily}<br />{weddingData.groomAddress}<br />{weddingData.groomRelation}</p>
              <h2 className="mt-5 text-2xl font-semibold text-[#6e1f2a]">{weddingData.groom}</h2>
              <div className="my-7 text-sm text-[#8d642b]">आणि</div>
              <p className="leading-8">{weddingData.brideFamily}<br />{weddingData.brideAddress}<br />{weddingData.brideRelation}</p>
              <h2 className="mt-5 text-2xl font-semibold text-[#6e1f2a]">{weddingData.bride}</h2>
            </div>

            <div className="my-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {weddingData.panchang.map((item) => (
                <div key={item} className="rounded-xl border border-[#b58a3a]/20 px-3 py-4 text-center text-sm text-[#6b4a3a]">{item}</div>
              ))}
            </div>

            <p className="mx-auto max-w-2xl text-center leading-8 text-[#3d2923]">{weddingData.invitationText}</p>

            <div className="mt-10 flex flex-col items-center">
              <p className="mb-4 text-sm text-[#8d642b]">आशीर्वादाचे दार उघडा</p>
              <button
                onClick={() => setOpened(v => !v)}
                aria-expanded={opened}
                className="reveal-seal relative flex items-center justify-center text-[#d6b875] transition-transform hover:scale-105"
              >
                <span className="absolute inset-3 rounded-full border border-[#d6b875]/20" />
                {opened ? <Check size={25} /> : <Sparkles size={25} />}
              </button>
              <AnimatePresence>
                {opened && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    className="mt-6 max-w-xl overflow-hidden rounded-2xl border border-[#b58a3a]/20 bg-[#f8eddc] p-5 text-center text-sm leading-7 text-[#4c3328]"
                  >
                    विनायक आणि निहारीका यांच्या शुभविवाह सोहळ्यास आपली उपस्थिती लाभावी आणि वधूवरांना शुभ आशीर्वाद मिळावेत, ही मनःपूर्वक विनंती.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ShubhKshan() {
  const reveal = useReveal();
  return (
    <section className="bg-[#1d0c12] heritage-pattern">
      <div className="section-shell">
        <motion.div {...reveal} className="mx-auto max-w-4xl text-center">
          <SectionKicker no="04" title="THE SHUBH KSHAN" />
          <div className="py-10 sm:py-16">
            <p className="text-sm tracking-[.25em] text-[#d6b875]/70">एक सुंदर सुरुवात...</p>
            <h2 className="mt-8 text-4xl leading-[1.35] text-[#fff8ec] sm:text-6xl">
              दोन कुटुंबे<br />
              <span className="text-[#d6b875]">एक नातं</span><br />
              दोन जीव<br />
              <span className="text-[#d6b875]">आयुष्यभराचा सहवास</span>
            </h2>
            <div className="mx-auto mt-12 h-px w-32 bg-[#b58a3a]/50" />
            <p className="mt-8 text-lg text-[#fff8ec]/75">{weddingData.dateMr} · {weddingData.timeMr}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Countdown() {
  const target = useMemo(() => new Date("2026-11-16T12:04:00+05:30").getTime(), []);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const distance = Math.max(0, target - now);
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance / 3600000) % 24);
  const minutes = Math.floor((distance / 60000) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  const values = [["दिवस", days], ["तास", hours], ["मिनिटे", minutes], ["सेकंद", seconds]];
  const reveal = useReveal();
  return (
    <section className="bg-[#32121d]">
      <div className="section-shell">
        <motion.div {...reveal} className="text-center">
          <div className="text-xs tracking-[.25em] text-[#d6b875]/70">THE MOMENT</div>
          <h2 className="mt-4 text-3xl text-[#fff8ec]">The joyous countdown begins.</h2>
          {distance === 0 ? (
            <div className="mt-12 text-2xl text-[#d6b875]">शुभ विवाह सोहळा सुरू झाला आहे!</div>
          ) : (
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {values.map(([label, value]) => (
                <div key={label as string} className="border border-[#d6b875]/20 bg-[#1d0c12]/35 px-3 py-7">
                  <div className="font-display text-4xl text-[#d6b875] sm:text-5xl">{String(value).padStart(2, "0")}</div>
                  <div className="mt-2 text-xs tracking-[.15em] text-[#fff8ec]/55">{label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Events() {
  const reveal = useReveal();
  return (
    <section className="bg-[#fff8ec] text-[#2a1713]">
      <div className="section-shell">
        <motion.div {...reveal}>
          <SectionKicker no="05" title="THE CELEBRATION" />
          <h2 className="text-4xl text-[#6e1f2a] sm:text-5xl">विवाह सोहळा</h2>
          <div className="relative mt-12 max-w-3xl">
            <div className="absolute bottom-5 left-[15px] top-5 w-px bg-[#b58a3a]/40 sm:left-[19px]" />
            {[
              { no: "01", title: weddingData.haldiTitle, sub: weddingData.haldiVenue, address: weddingData.haldiAddress },
              { no: "02", title: "शुभ विवाह", sub: `${weddingData.weekday} · ${weddingData.dateMr}`, address: `${weddingData.timeMr} · ${weddingData.venue}` }
            ].map((event) => (
              <div key={event.no} className="relative flex gap-7 pb-12 last:pb-0">
                <div className="z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b58a3a]/50 bg-[#fff8ec] text-xs text-[#8d642b]">{event.no}</div>
                <div className="rounded-2xl border border-[#b58a3a]/20 bg-white/60 p-6">
                  <h3 className="text-2xl text-[#6e1f2a]">{event.title}</h3>
                  <p className="mt-3 font-medium text-[#4b3429]">{event.sub}</p>
                  <p className="mt-2 text-sm leading-7 text-[#765b4b]">{event.address}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Venue() {
  const reveal = useReveal();
  const [copied, setCopied] = useState(false);

  const shareVenue = async () => {
    const shareData = {
      title: "विनायक & निहारीका — शुभ विवाह",
      text: `विनायक & निहारीका यांच्या शुभविवाहाचे सस्नेह निमंत्रण.\n${weddingData.dateMr} | ${weddingData.timeMr}\n${weddingData.venue}, ${weddingData.venueAddress}`,
      url: window.location.href
    };
    if (navigator.share) {
      await navigator.share(shareData).catch(() => {});
    } else {
      await navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section className="bg-[#1d0c12]">
      <div className="section-shell">
        <motion.div {...reveal}>
          <SectionKicker no="06" title="THE DESTINATION" />
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm tracking-[.22em] text-[#d6b875]/65">जिथे दोन जीव</p>
              <h2 className="mt-3 text-4xl text-[#fff8ec] sm:text-6xl">एक होतील...</h2>
              <div className="mt-9 h-px w-24 bg-[#b58a3a]/50" />
              <h3 className="mt-9 text-2xl text-[#d6b875]">{weddingData.venue}</h3>
              <p className="mt-3 leading-7 text-[#fff8ec]/65">{weddingData.venueAddress}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={weddingData.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d6b875]/35 px-5 py-3 text-sm text-[#f0d996] hover:bg-[#d6b875]/10">
                  <MapPin size={16} /> मार्ग पहा
                </a>
                <button onClick={shareVenue} className="inline-flex items-center gap-2 rounded-full border border-[#d6b875]/20 bg-[#fff8ec]/5 px-5 py-3 text-sm text-[#fff8ec]/80 hover:bg-[#fff8ec]/10">
                  {copied ? <Copy size={16} /> : <Share2 size={16} />} {copied ? "कॉपी झाले" : "लोकेशन शेअर करा"}
                </button>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-[32px] border border-[#d6b875]/20 bg-[#32121d] p-5">
              <div className="absolute inset-5 rounded-[24px] border border-[#d6b875]/15" />
              <div className="relative flex h-full min-h-[260px] items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-[#d6b875]" size={38} strokeWidth={1.2} />
                  <p className="mt-4 text-xs tracking-[.25em] text-[#d6b875]/70">UDGIR · MAHARASHTRA</p>
                  <p className="mt-2 text-sm text-[#fff8ec]/60">{weddingData.venue}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Blessings() {
  const reveal = useReveal();
  const share = async () => {
    const text = `विनायक & निहारीका यांच्या शुभविवाहाचे सस्नेह निमंत्रण.\n१६ नोव्हेंबर २०२६ | दुपारी १२:०४ वा.\nभागीरथी मंगल कार्यालय, उदगीर.\n${window.location.href}`;
    if (navigator.share) await navigator.share({ title: "विनायक & निहारीका", text }).catch(() => {});
    else {
      await navigator.clipboard?.writeText(text);
      alert("निमंत्रणाची माहिती कॉपी झाली.");
    }
  };
  return (
    <section className="bg-[#2a1018]">
      <div className="section-shell text-center">
        <motion.div {...reveal}>
          <SectionKicker no="07" title="THE BLESSINGS" />
          <Heart className="mx-auto text-[#d6b875]" size={24} strokeWidth={1.2} />
          <h2 className="mx-auto mt-8 max-w-2xl text-3xl leading-[1.6] text-[#fff8ec] sm:text-5xl">
            Just love<br />and<br />
            <span className="text-[#d6b875]">blessings.</span><br />
          </h2>
          <div className="mx-auto mt-10 h-px w-24 bg-[#b58a3a]/50" />
          <p className="mt-8 text-sm text-[#fff8ec]/55">आपले विनीत</p>
          <p className="mt-2 text-lg text-[#d6b875]">{weddingData.host}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {weddingData.phones.map(phone => (
              <a key={phone} href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-full border border-[#d6b875]/30 px-5 py-3 text-sm text-[#fff8ec]">
                <Phone size={15} /> {phone}
              </a>
            ))}
          </div>
          <button onClick={share} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d6b875] px-6 py-3 text-sm text-[#2a1713]">
            <Send size={15} /> आमंत्रण शेअर करा
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const links = [
    ["आमंत्रण", "#invitation"], ["शुभ क्षण", "#shubh-kshan"], ["कार्यक्रम", "#events"],
    ["स्थळ", "#venue"], ["संपर्क", "#blessings"]
  ];
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 12, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .96 }}
            className="mb-3 w-44 overflow-hidden rounded-2xl border border-[#d6b875]/25 bg-[#1d0c12]/95 p-2 shadow-2xl backdrop-blur-xl">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-[#fff8ec]/80 hover:bg-[#fff8ec]/10">{label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(v => !v)} aria-label="Menu"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b875]/35 bg-[#2a1018]/95 text-[#d6b875] shadow-xl backdrop-blur-xl">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d6b875]/10 bg-[#1d0c12] py-12 text-center">
      <div className="font-display text-2xl text-[#d6b875]">विनायक & निहारीका</div>
      <div className="mt-3 text-xs tracking-[.22em] text-[#fff8ec]/45">१६ • ११ • २०२६</div>
      <div className="mt-6 text-xs text-[#fff8ec]/35">With love & blessings</div>
    </footer>
  );
}

function App() {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [entered]);

  return (
    <>
      <AnimatePresence>{!entered && <Opening onEnter={() => setEntered(true)} />}</AnimatePresence>
      <main>
        <Hero />
        <div id="shubh-kshan"><ShubhKshan /></div>
        <Countdown />
        <div id="events"><Events /></div>
        <div id="venue"><Venue /></div>
        <div id="blessings"><Blessings /></div>
        <Footer />
      </main>
      <FloatingMenu />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);