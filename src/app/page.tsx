import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MovingCard from "@/components/MovingCard";
import UpcommingWebnairs from "@/components/UpcommingWebnairs";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h2 className="text-2xl text-center">Hello</h2> */}
      <Hero />
      <Featured />
      <WhyChoose />
      <MovingCard />
      <UpcommingWebnairs />

      {/* <Footer /> */}
    </main>
  );
}
