import {
  Camera,
  FilmSlate,
  FilmStrip,
  Lightning,
  PlayCircle,
  Sparkle,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { ContactForm } from "./components/ContactForm";
import { Nav } from "./components/Nav";
import { TaglineReveal } from "./components/TaglineReveal";
import { useReveal } from "./hooks/useReveal";
import "./App.css";

function RevealSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={`section reveal ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}

const benefits = [
  {
    icon: Lightning,
    title: "Social that earns attention",
    body: "Formats built for feeds, not leftover cutdowns. Your brand shows up with rhythm people finish watching.",
  },
  {
    icon: FilmSlate,
    title: "Sitcom and gameshow energy",
    body: "Character, tension, and punchlines that travel across episodes so one shoot becomes a content engine.",
  },
  {
    icon: FilmStrip,
    title: "Cinema grade production",
    body: "Direction, grade, and edit that hold up on a big screen and still feel sharp on a phone.",
  },
  {
    icon: Sparkle,
    title: "A beginner mind on every brief",
    body: "We start curious, drop assumptions, and chase the first spark of possibility for every brand.",
  },
];

const steps = [
  {
    n: "01",
    title: "Brief the spark",
    body: "Share the brand, audience, and the feeling you need. We map format, tone, and proof points.",
  },
  {
    n: "02",
    title: "Shape the story",
    body: "Treatments, shot plans, and social cuts get locked before cameras roll so the set stays focused.",
  },
  {
    n: "03",
    title: "Shoot and ship",
    body: "Production, grade, and delivery in packages ready for campaign, feed, and long form release.",
  },
];

const socialWork = [
  {
    label: "Production BTS",
    src: "/assets/work/social-bts.png",
    alt: "Behind the scenes camera crew filming a low angle shot at night",
  },
  {
    label: "Sitcom",
    src: "/assets/work/social-sitcom.png",
    alt: "Sitcom style vertical video still of two people in a car at night",
  },
  {
    label: "Gameshow",
    src: "/assets/work/social-gameshow.png",
    alt: "Gameshow style vertical video still with score overlay",
  },
];

const videoTiles = [
  "video-00",
  "video-01",
  "video-02",
  "video-10",
  "video-11",
  "video-12",
  "video-20",
  "video-21",
  "video-22",
].map((id) => ({
  id,
  src: `/assets/work/${id}.png`,
  alt: `Hajime Studio video production still ${id}`,
}));

const team = [
  {
    name: "Leo Lam",
    role: "Cofounder of Hajime",
    src: "/assets/team/leo.png",
    bio: (
      <>
        <p className="body-3">
          Leo is a dedicated advertising professional with a{" "}
          <strong>Master of Social Science in Advertising from The Chinese University of Hong Kong</strong>.
        </p>
        <p className="body-3">
          Experience handling <strong>social content</strong> for government and commercial clients including
          FEHD, EPD, Centre for Food Safety, Maxim’s Chinese Cuisine, and Macao Government Tourism Office.
        </p>
      </>
    ),
  },
  {
    name: "Bob Ngan",
    role: "Cofounder of Hajime",
    src: "/assets/team/bob.png",
    bio: (
      <>
        <p className="body-3">
          Bob is a marketing professional with a{" "}
          <strong>Bachelor of Science in Marketing and Management from Newcastle University, UK</strong>, and a
          member of the <strong>Hong Kong national Ice Hockey team</strong>.
        </p>
        <p className="body-3">
          He uses social media to promote sports entertainment for the Challenger Sports Association and to build a
          resonant social image for the local ice hockey community.
        </p>
      </>
    ),
  },
  {
    name: "Max Chau",
    role: "Art Director and Filmmaker of Hajime",
    src: "/assets/team/max.png",
    bio: (
      <>
        <p className="body-3">
          Max drives visual storytelling from concept to screen: directing shoots, overseeing post production, and
          keeping quality high across every cut.
        </p>
        <p className="body-3">
          Work includes photography at Hong Kong Comics Festival, color grading at AT Studio, and the Kwai Chung Photo
          Gallery community project.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "Who is Hajime Studio for?",
    a: "Hong Kong brands and agencies that need social content, sitcom or gameshow formats, and video production with a clear creative point of view.",
  },
  {
    q: "What does a typical project include?",
    a: "Concept, treatment, production, and finishing. Packages can cover feed cuts, episode formats, and longer cinematic pieces.",
  },
  {
    q: "Do you only work in English?",
    a: "English is our primary landing language. The studio name and on set communication stay bilingual when the brief needs it.",
  },
  {
    q: "How fast can we start?",
    a: "Most briefs move from first call to treatment within one to two weeks, then into production once creative is locked.",
  },
  {
    q: "Can you handle government and commercial clients?",
    a: "Yes. The cofounders have shipped social content for government departments and commercial brands across hospitality and tourism.",
  },
  {
    q: "What is the next step?",
    a: "Use Start a project to send a short note. We reply with availability, fit, and a clear path into a first workshop.",
  },
];

export default function App() {
  return (
    <>
      <a className="skip-link button-sm" href="#main">
        Skip to content
      </a>
      <Nav />

      <main id="main">
        <section id="top" className="hero">
          <div className="hero-atmosphere" aria-hidden="true">
            <div className="sunburst" />
            <div className="hero-slashes slash-row">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </div>

          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="hero-chinese title-3">好嚟喇製作公司</p>
              <h1 className="hero-brand">
                HAJIME
                <br />
                STUDIO
              </h1>
              <p className="hero-tag body-1">It starts right now</p>
              <p className="hero-sub body-3">
                A Hong Kong studio for social content, sitcom and gameshow formats, and video production that begins
                with curiosity.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary button-md" href="#contact">
                  Start a project
                </a>
                <a className="btn btn-ghost button-md" href="#work">
                  See the work
                </a>
              </div>
              <p className="hero-proof caption-1">
                <Camera size={16} weight="bold" aria-hidden="true" />
                Built for brands that need attention that lasts past the scroll
              </p>
            </div>
          </div>
        </section>

        <RevealSection id="philosophy" className="philosophy">
          <div className="shell philosophy-grid">
            <div>
              <p className="section-kicker title-5">Philosophy</p>
              <h2 className="heading-3">
                Hajime (始め):
                <br />
                The Art of the Beginning.
              </h2>
            </div>
            <div className="philosophy-copy">
              <p className="body-3">
                It’s a Japanese principle meaning <strong>to start</strong>. For us, it’s our core philosophy. It means
                we approach every project, every brand, every new challenge with a beginner’s mindset full of{" "}
                <strong>curiosity</strong>, <strong>free of preconceptions</strong>, and driven by the{" "}
                <strong>original spark of possibility</strong>.
              </p>
              <p className="body-3">
                No matter how far we’ve come, we never lose the <strong>passion of that first step</strong>.
              </p>
            </div>
          </div>
        </RevealSection>

        <TaglineReveal />

        <RevealSection className="benefits">
          <div className="shell">
            <div className="section-head">
              <p className="section-kicker title-5">Why Hajime</p>
              <h2 className="heading-3">Outcomes for brands that need to start strong</h2>
            </div>
            <ul className="benefit-list">
              {benefits.map((item) => (
                <li key={item.title} className="benefit-item">
                  <item.icon size={28} weight="regular" aria-hidden="true" />
                  <div>
                    <h3 className="title-1">{item.title}</h3>
                    <p className="body-6">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection className="steps">
          <div className="shell">
            <div className="section-head">
              <p className="section-kicker title-5">How it works</p>
              <h2 className="heading-3">Three steps from spark to shipped cut</h2>
            </div>
            <ol className="step-list">
              {steps.map((step) => (
                <li key={step.n} className="step-item">
                  <p className="step-n title-5">{step.n}</p>
                  <h3 className="heading-6">{step.title}</h3>
                  <p className="body-6">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </RevealSection>

        <RevealSection id="work" className="work-social">
          <div className="shell-wide">
            <div className="section-head work-head">
              <div>
                <p className="section-kicker title-5">Social Content Creation</p>
                <h2 className="heading-3">Production BTS · Sitcom · Gameshow</h2>
              </div>
              <div className="slash-row" aria-hidden="true">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
            </div>
            <div className="social-grid">
              {socialWork.map((item) => (
                <figure key={item.label} className="social-figure">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption className="title-3">{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="work-video">
          <div className="shell-wide">
            <div className="section-head work-head">
              <div>
                <p className="section-kicker title-5">Video Production</p>
                <h2 className="heading-3">Cinematic stills from recent sets</h2>
              </div>
              <PlayCircle size={32} weight="regular" aria-hidden="true" />
            </div>
            <div className="video-grid" role="list">
              {videoTiles.map((tile) => (
                <figure key={tile.id} className="video-tile" role="listitem">
                  <img src={tile.src} alt={tile.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="team" className="team">
          <div className="shell">
            <div className="section-head section-head-center">
              <p className="section-kicker title-5">People</p>
              <h2 className="heading-3">Our Core Team</h2>
            </div>
            <div className="team-list">
              {team.map((member) => (
                <article key={member.name} className="team-row">
                  <div className="team-meta">
                    <img src={member.src} alt={`Portrait of ${member.name}`} loading="lazy" />
                    <div>
                      <h3 className="heading-6">{member.name}</h3>
                      <p className="title-4">{member.role}</p>
                    </div>
                  </div>
                  <div className="team-bio">{member.bio}</div>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="faq" className="faq">
          <div className="shell faq-grid">
            <div>
              <p className="section-kicker title-5">FAQ</p>
              <h2 className="heading-3">Answers before you write</h2>
              <p className="body-6 faq-lead">
                Clear next steps, no hard sell. If the fit is right, we start.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary className="title-2">{item.q}</summary>
                  <p className="body-6">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="contact" className="contact">
          <div className="shell contact-grid">
            <div>
              <p className="section-kicker title-5">Contact</p>
              <h2 className="heading-3">Start a project</h2>
              <p className="body-3 contact-lead">
                Tell us what you want audiences to feel. We reply with availability and a first path forward. No
                retainers required to say hello.
              </p>
            </div>
            <ContactForm />
          </div>
        </RevealSection>
      </main>

      <footer className="footer">
        <div className="shell footer-grid">
          <div>
            <p className="footer-brand">HAJIME STUDIO</p>
            <p className="caption-2">好嚟喇製作公司 · Hajime Entertainment Limited</p>
          </div>
          <div className="footer-links">
            <a className="caption-1" href="#philosophy">
              Philosophy
            </a>
            <a className="caption-1" href="#work">
              Work
            </a>
            <a className="caption-1" href="#team">
              Team
            </a>
            <a className="caption-1" href="#contact">
              Contact
            </a>
            <a className="caption-1" href="/privacy.html">
              Privacy
            </a>
            <a className="caption-1" href="/terms.html">
              Terms
            </a>
          </div>
          <p className="caption-5 footer-note">It starts right now.</p>
        </div>
      </footer>
    </>
  );
}
