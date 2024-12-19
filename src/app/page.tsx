import { Hero } from "@/components/Hero";
import { getMarkdownContent } from "@/lib/utils";
import { Markdown } from "@/components/Markdown";

const content = await getMarkdownContent("README.md");

export default function Home() {
  return (
    <div className="bg-grid-white/[0.02] font-sans">
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-50/20 to-transparent my-20" />
      <div className="w-full flex justify-center flex-col px-[25vw]">
        <Markdown content={content} />
      </div>
    </div>
  );
}
