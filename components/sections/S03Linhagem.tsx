import { campanha } from "@/content/campanha";
import Reveal from "@/components/Reveal";

/** SECAO 03 — A LINHAGEM. Mostra a luta e a escolha de continua-la. */
export default function S03Linhagem() {
  return (
    <section id="linhagem" className="section lineage">
      <Reveal>
        <span className="eyebrow">{campanha.linhagem.eyebrow}</span>
        <h2>{campanha.linhagem.titulo}</h2>
        <p className="lead">{campanha.linhagem.apoio}</p>
        <div className="lineage-grid">
          {campanha.linhagem.nomes.map(([nome, frase], index) => (
            <article className={index === 3 ? "lineage-card featured" : "lineage-card"} key={nome}>
              <small>0{index + 1}</small>
              <h3>{nome}</h3>
              <p>{frase}</p>
            </article>
          ))}
        </div>
        <strong className="statement">{campanha.linhagem.destaque}</strong>
        <p className="center-text">{campanha.linhagem.fecho}</p>
      </Reveal>
    </section>
  );
}
