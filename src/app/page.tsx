import { Hero } from "@/components/Hero";
import { getContent } from "@/lib/content";
import { Markdown } from "@/components/Markdown";
import { Component } from "@/components/BarGraph";

const content = await getContent("README.md");

export default function Home() {
  return (
    <div className="bg-grid-white/[0.02] font-sans">
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-50/20 to-transparent my-20" />
      <div className="w-full flex justify-center flex-col px-[25vw]">
        <div className="flex flex-col gap-8">
          <Component />
          <Component />
          <Component />
        </div>

        <Markdown content={content} />
      </div>
    </div>
  );
}
