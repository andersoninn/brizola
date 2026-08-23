import { campanha } from "@/content/campanha";
import Reveal from "@/components/Reveal";

/** SECAO 11 — METAS, NAO DISCURSOS. Troca promessa por cobranca. */
export default function S11Metas() {
  return (
    <section id="metas" className="section goals">
      <Reveal>
        <h2>
          O PROBLEMA DA POLITICA BRASILEIRA NAO E A FALTA DE DISCURSO. E A ESCASSEZ DE RESULTADO.
        </h2>
        <div className="goal-list">
          {campanha.metas.map((meta, i) => (
            <span key={meta}>
              <b>0{i + 1}</b>
              {meta}
            </span>
          ))}
        </div>
        <strong>Voce vai poder cobrar. Por escrito.</strong>
      </Reveal>
    </section>
  );
}
