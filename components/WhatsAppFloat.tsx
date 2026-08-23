"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/config";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > 600); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return visible ? <a className="whatsapp-float" href={CONFIG.WHATSAPP_URL} aria-label="Entrar no WhatsApp" target="_blank" rel="noreferrer">WA</a> : null;
}
