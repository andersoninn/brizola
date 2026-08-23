"use client";

import { useState } from "react";
import { campanha } from "@/content/campanha";
import { CONFIG } from "@/lib/config";

const links = [
  { label: "A luta", href: "#promessa" },
  { label: "Quem é João", href: "#quem" },
  { label: "Bandeiras", href: "#bandeiras" },
  { label: "Compromissos", href: "#metas" },
  {
    label: "DOAR",
    href: CONFIG.VAQUINHA_URL,
    external: true,
    className: "button button-small",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Inicio">
        <span>JLB</span>
        <strong>BRIZOLA</strong>
        <b>{campanha.numero}</b>
      </a>
      <button
        className="menu-toggle"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <i />
        <i />
        <i />
      </button>
      <nav className={open ? "nav-open" : ""}>
        {links.map(({ label, href, external, className }) => (
          <a
            key={href}
            className={className}
            href={href}
            onClick={() => setOpen(false)}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {label}
          </a>
        ))}
        <a className="button button-small" href="#convite" onClick={() => setOpen(false)}>
          Quero fazer parte
        </a>
      </nav>
    </header>
  );
}
