"use client";

import { useRef } from "react";
import { CONFIG } from "@/lib/config";

/** SECAO 10 — OUCA DE MIM. Abre um espaco de escuta direta. */
export default function S10Video() { const playerRef = useRef<HTMLDivElement>(null); const videoRef = useRef<HTMLVideoElement>(null); const playFullscreen = async () => { const player = playerRef.current; if (!player) return; if (videoRef.current) await videoRef.current.play(); if (document.fullscreenEnabled) await player.requestFullscreen(); }; const closeFullscreen = () => { if (document.fullscreenElement) void document.exitFullscreen(); }; return <section className="section video-section"><div><span className="eyebrow">EM PRIMEIRA PESSOA</span><h2>Dois minutos, sem intermediario.</h2><div className="video-frame" ref={playerRef}>{CONFIG.VIDEO_URL ? <><video ref={videoRef} controls src={CONFIG.VIDEO_URL} /><button className="play" type="button" onClick={playFullscreen} aria-label="Reproduzir em tela cheia">▶</button></> : <><button className="play" type="button" onClick={playFullscreen} aria-label="Abrir video em tela cheia">▶</button><small>VIDEO PRINCIPAL PENDENTE</small></>}<button className="video-close" type="button" onClick={closeFullscreen} aria-label="Fechar tela cheia">FECHAR</button><small className="fullscreen-hint">APERTE ESC PARA SAIR</small></div></div></section>; }
