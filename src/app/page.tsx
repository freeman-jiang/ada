import { Hero } from "@/components/Hero";
import Content from "@/content/content.mdx";

export default function Home() {
  return (
    <div className="bg-grid-white/[0.02] font-sans">
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-50/20 to-transparent my-20" />
      <div className="w-full flex flex-col px-4 lg:px-[25vw] items-center">
        <div className="max-w-[65ch] prose prose-invert prose-zinc prose-headings:font-semibold mb-36">
          <Content />
        </div>
      </div>
    </div>
  );
}
