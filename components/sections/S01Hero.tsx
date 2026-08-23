import Image from "next/image";
import { campanha } from "@/content/campanha";

/** SECAO 01 — A CHAMADA. Para o scroll e planta a tese. */
export default function S01Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-watermark">{campanha.numero}</div>
      <div className="hero-copy">
        <span className="badge">{campanha.hero.badge}</span>
        <h1>
          {campanha.hero.titulo.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p>{campanha.hero.subtitulo}</p>
        <div className="hero-actions">
          <a className="button" href="#convite">
            Quero fazer parte
          </a>
          <a className="button button-outline" href="#promessa">
            Conheca a luta
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <Image
          className="hero-image hero-image-desktop"
          src="/hero-desktop.png"
          alt="Imagem do candidato"
          fill
          priority
          sizes="(max-width: 860px) 0vw, 35vw"
        />
        <Image
          className="hero-image hero-image-mobile"
          src="/hero-mobile.png"
          alt="Imagem do candidato"
          fill
          priority
          sizes="(max-width: 860px) 58vw, 0vw"
        />
        <div className="hero-vote"><span>DEPUTADO<br />FEDERAL</span><strong>4012</strong></div>
      </div>

      <svg
        className="hero-wave"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="wave-fill"
          d="M0 60 C120 60 170 12 310 12 C470 12 510 72 680 72 C820 72 875 38 1000 38 V100 H0 Z"
        />
        <path
          className="wave-line"
          d="M0 60 C120 60 170 12 310 12 C470 12 510 72 680 72 C820 72 875 38 1000 38"
        />
      </svg>
    </section>
  );
}
