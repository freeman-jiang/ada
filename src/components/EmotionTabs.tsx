import { EMOTIONS } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

export const EmotionTabs = () => {
  return (
    <Tabs defaultValue={EMOTIONS[0]}>
      <TabsList>
        {EMOTIONS.map((emotion) => (
          <TabsTrigger key={emotion} value={emotion}>
            {emotion}
          </TabsTrigger>
        ))}
      </TabsList>
      {EMOTIONS.map((emotion) => (
        <TabsContent key={emotion} value={emotion}>
          <div className="w-full h-[32rem] relative">
            <Image
              src={`/images/genre/${emotion}.png`}
              alt={emotion}
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
