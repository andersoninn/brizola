"use client";

import { useState } from "react";
import { campanha } from "@/content/campanha";

const links = [
  ["A luta", "#promessa"],
  ["Quem é João", "#quem"],
  ["Bandeiras", "#bandeiras"],
  ["Compromissos", "#metas"],
  ["Faça parte", "#convite"],
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
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
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
