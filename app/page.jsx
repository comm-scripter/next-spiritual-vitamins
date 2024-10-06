import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="grid grid-rows-[4px_1fr_20px] items-center justify-center min-h-[600px] w-full p-4 pb-8 gap-10 sm:p-8 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-200 to-emerald-100">
      <div className="flex"></div>
      <Hero></Hero>
      <h1>Next Spiritual Vitamins</h1>
    </div>
  );
}
