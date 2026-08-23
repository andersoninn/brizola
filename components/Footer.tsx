import { campanha } from "@/content/campanha";
import { CONFIG } from "@/lib/config";

export default function Footer() { return <footer><div className="footer-brand"><strong>JLB</strong><span>{campanha.candidato}</span></div><p>{campanha.cargo} · {campanha.numero} · {campanha.partido}</p><a href={CONFIG.POLITICA_PRIVACIDADE_URL}>Politica de privacidade</a><small>DADO PENDENTE: CNPJ da campanha</small></footer>; }
