import { campanha } from "@/content/campanha";
import Reveal from "@/components/Reveal";

/** SECOES 06 A 09 — AS QUATRO BANDEIRAS. Converte a critica em entregas. */
export default function S06a09Bandeiras() {
  return (
    <>
      {campanha.bandeiras.map((item, index) => (
        <section
          id={index === 0 ? "bandeiras" : undefined}
          className={`section flag ${index === 0 ? "first-flag" : ""} ${index === 1 ? "health-flag" : ""} ${index === 2 ? "party-flag" : ""} ${index % 2 ? "alt" : ""}`}
          key={item.id}
        >
          <div className="flag-number" aria-hidden="true">
            {index > 3 ? item.numero : ""}
          </div>
          <Reveal>
            <span className="eyebrow">{item.inimigo}</span>
            <h2>{item.titulo}</h2>
            <p className="flag-promise">{item.promessa}</p>
            <div className="deliveries">
              {item.entregas.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>
      ))}
    </>
  );
}
