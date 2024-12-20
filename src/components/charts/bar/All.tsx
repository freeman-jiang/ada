import { actorAge } from "@/content/data/actorAge";
import { actorGender } from "@/content/data/actorGender";
import { HorizontalBar } from "./HorizontalBar";

export const AgeBar = () => {
  return <HorizontalBar chart={actorAge} />;
};

export const GenderBar = () => {
  return <HorizontalBar chart={actorGender} />;
};
