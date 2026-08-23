"use client";

import Image from "next/image";
import { useRef } from "react";
import { campanha } from "@/content/campanha";
import Reveal from "@/components/Reveal";
import { CONFIG } from "@/lib/config";

/** SECAO 02 — A PROMESSA QUE FICOU PELA METADE. Cria a tensao. */
export default function S02Promessa() {
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playFullscreen = async () => {
    const player = playerRef.current;
    if (!player) return;
    if (videoRef.current) await videoRef.current.play();
    if (document.fullscreenEnabled) await player.requestFullscreen();
  };
  const closeFullscreen = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
  };
  return (
    <section id="promessa" className="section promise">
      <div className="promise-layout">
        <Reveal>
          <span className="eyebrow">{campanha.promessa.eyebrow}</span>
          <h2>{campanha.promessa.titulo}</h2>
        </Reveal>
        <Reveal className="promise-video">
          <div className="video-frame" ref={playerRef}>
            {CONFIG.VIDEO_URL ? (
              <>
                <video ref={videoRef} controls src={CONFIG.VIDEO_URL} />
                <button
                  className="play"
                  type="button"
                  onClick={playFullscreen}
                  aria-label="Reproduzir em tela cheia"
                >
                  ▶
                </button>
              </>
            ) : (
              <>
                {/* TODO(campanha): imagem ilustrativa ate o video final entrar */}
                <Image
                  className="video-poster"
                  src="/VIDEO-1.jpg"
                  alt="Previa do video da campanha"
                  fill
                  sizes="(max-width: 860px) 92vw, 60vw"
                />
                <button
                  className="play"
                  type="button"
                  onClick={playFullscreen}
                  aria-label="Abrir video em tela cheia"
                >
                  ▶
                </button>
              </>
            )}
            <button
              className="video-close"
              type="button"
              onClick={closeFullscreen}
              aria-label="Fechar tela cheia"
            >
              FECHAR
            </button>
            <small className="fullscreen-hint">APERTE ESC PARA SAIR</small>
          </div>
        </Reveal>
        <Reveal className="promise-copy">
          {campanha.promessa.paragrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <strong className="statement">{campanha.promessa.destaque}</strong>
        </Reveal>
      </div>
    </section>
  );
}
