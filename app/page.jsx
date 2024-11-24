import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="grid grid-rows-[4px_1fr_20px] items-center justify-center min-h-screen h-full w-full p-4 pb-8 gap-4 sm:p-4 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-200 to-emerald-100">
      <div className="flex"></div>
      <Hero></Hero>
    </div>
  );
}
