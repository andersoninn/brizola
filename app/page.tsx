import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import S01Hero from "@/components/sections/S01Hero";
import S02Promessa from "@/components/sections/S02Promessa";
import S03Linhagem from "@/components/sections/S03Linhagem";
import S04QuemEJoao from "@/components/sections/S04QuemEJoao";
import S05Inimigos from "@/components/sections/S05Inimigos";
import S06a09Bandeiras from "@/components/sections/S06a09Bandeiras";
import S10Video from "@/components/sections/S10Video";
import S11Metas from "@/components/sections/S11Metas";
import S12Convite from "@/components/sections/S12Convite";

export default function Home() {
  return <><Header /><main><S01Hero /><S02Promessa /><S04QuemEJoao /><S03Linhagem /><S05Inimigos /><S06a09Bandeiras /><S10Video /><S11Metas /><S12Convite /></main><Footer /><WhatsAppFloat /></>;
}
