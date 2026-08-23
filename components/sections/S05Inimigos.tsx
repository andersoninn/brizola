import { campanha } from "@/content/campanha";
import Reveal from "@/components/Reveal";

/** SECAO 05 — OS QUATRO INIMIGOS. Nomeia o que precisa ser enfrentado. */
export default function S05Inimigos() {
  return (
    <section className="section enemies">
      <Reveal>
        <span className="eyebrow">{campanha.inimigos.eyebrow}</span>
        <h2>{campanha.inimigos.titulo}</h2>
        <div className="enemy-grid">
          {campanha.inimigos.itens.map(([title, text], i) => (
            <article key={title}>
              <b>0{i + 1}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <strong className="enemy-close">CONTRA CADA UM DELES, UMA BANDEIRA.</strong>
      </Reveal>
    </section>
  );
}
