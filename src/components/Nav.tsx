import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const links = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["philosophy", "work", "team", "faq", "contact"];
      let current = "#top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActive(current);
    };

    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary">
          <a className="nav-brand" href="#top" aria-current={active === "#top" ? "page" : undefined}>
            <span className="mark" aria-hidden="true">
              <img src="/assets/team/hic-logo.png" alt="" width={28} height={28} />
            </span>
            <span className="title-4">HAJIME STUDIO</span>
          </a>

          <div className="nav-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`title-4 nav-link${active === link.href ? " is-active" : ""}`}
                aria-current={active === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
            <a className="btn btn-primary button-sm" href="#contact">
              Start a project
            </a>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`nav-toggle-icon${open ? " is-open" : ""}`}>
              {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </span>
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <div className="mobile-menu-inner">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="heading-5 mobile-link"
              style={{ transitionDelay: open ? `${Math.min(index * 60, 400)}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary button-md mobile-cta"
            href="#contact"
            style={{ transitionDelay: open ? "240ms" : "0ms" }}
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}
