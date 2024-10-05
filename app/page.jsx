import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[600px] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="h-40"></div>
      <Hero></Hero>
      <h1>Next Spiritual Vitamins</h1>
    </div>
  );
}
