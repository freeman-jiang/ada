import { Hero } from "@/components/Hero";
import { getContent, getJSONContent } from "@/lib/content";
import { Markdown } from "@/components/Markdown";
import { AllEmotions } from "@/components/charts/pie/AllEmotions";
import { HorizontalBar } from "@/components/charts/bar/HorizontalBar";
import { VerticalBar } from "@/components/charts/bar/VerticalBar";

export default async function Home() {
  const content = await getContent("README.md");
  const actorEmotionData = await getJSONContent("actor_emotion.json");
  const actorGenderData = await getJSONContent("actor_gender.json");
  return (
    <div className="bg-grid-white/[0.02] font-sans">
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-50/20 to-transparent my-20" />
      <div className="w-full flex flex-col px-4 lg:px-[25vw] items-center">
        <div className="max-w-[65ch]">
          <AllEmotions />
          <HorizontalBar chart={actorEmotionData} />
          <VerticalBar chart={actorEmotionData} />
          <HorizontalBar chart={actorGenderData} />
          <VerticalBar chart={actorGenderData} />
          <Markdown content={content} />
        </div>
      </div>
    </div>
  );
}
