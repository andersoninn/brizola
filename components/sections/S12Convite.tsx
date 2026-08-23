"use client";

import { FormEvent, useState } from "react";
import { CONFIG } from "@/lib/config";

/** SECAO 12 — O CONVITE. Fecha a narrativa com participacao. */
export default function S12Convite() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <section id="convite" className="section invite">
      <svg
        className="invite-wave invite-wave-top"
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
      <div>
        <span className="eyebrow">FAÇA PARTE</span>
        <h2>Nenhum legado se continua sozinho.</h2>
        <p className="invite-lead">Ele começou. Eu continuo. Mas quem termina é a gente.</p>
        <div className="invite-grid">
          <form onSubmit={submit}>
            <h3>Quero fazer parte</h3>
            {[
              ["nome", "Nome", "text"],
              ["email", "E-mail", "email"],
              ["whatsapp", "WhatsApp", "tel"],
              ["cep", "CEP", "text"],
              ["cidade", "Cidade", "text"],
              ["bairro", "Bairro", "text"],
            ].map(([id, label, type]) => (
              <label key={id}>
                {label}
                <input id={id} name={id} type={type} required />
              </label>
            ))}
            <label>
              Estado
              <select id="estado" name="estado" required>
                <option value="">Selecione</option>
                <option>RJ</option>
              </select>
            </label>
            <label className="check">
              <input type="checkbox" required /> Aceito a{" "}
              <a href={CONFIG.POLITICA_PRIVACIDADE_URL}>política de privacidade</a>.
            </label>
            <button className="button" type="submit">
              Quero fazer parte
            </button>
            {sent && <p className="success">Cadastro recebido. A equipe entrara em contato.</p>}
          </form>
          <aside>
            <h3>Vem com a gente.</h3>
            <a className="button button-light" href={CONFIG.WHATSAPP_URL}>
              Entrar no WhatsApp
            </a>
            <a
              className="button button-outline-light"
              href={CONFIG.VAQUINHA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ajudar na vaquinha
            </a>
            <small>Prestação de contas aberta.</small>
          </aside>
        </div>
        <strong className="vote">VOTE 4012</strong>
      </div>
      <svg
        className="invite-wave invite-wave-bottom"
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
