import { campanha } from "@/content/campanha";
import Reveal from "@/components/Reveal";

/** SECAO 04 — QUEM E JOAO. Apresenta o candidato. */
export default function S04QuemEJoao() { return <section id="quem" className="section profile"><div className="profile-image">FOTO<br />PENDENTE</div><Reveal><span className="eyebrow">{campanha.quem.eyebrow}</span><h2>{campanha.quem.titulo}</h2><p>{campanha.quem.texto}</p><div className="tags">{campanha.quem.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p className="pending">DADO PENDENTE: formacao, onde atuou e historia pessoal.</p></Reveal></section>; }
