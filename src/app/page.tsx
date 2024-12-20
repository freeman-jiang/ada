import { Hero } from "@/components/Hero";
import { getContent } from "@/lib/content";
import { Markdown } from "@/components/Markdown";
import { AllEmotions } from "@/components/charts/pie/AllEmotions";

const content = await getContent("README.md");

export default function Home() {
  return (
    <div className="bg-grid-white/[0.02] font-sans">
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-50/20 to-transparent my-20" />
      <div className="w-full flex flex-col px-4 lg:px-[25vw] items-center">
        <div className="max-w-[65ch]">
          <AllEmotions />

          <Markdown content={content} />
        </div>
      </div>
    </div>
  );
}
