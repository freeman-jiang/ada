import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const TimeSeriesTabs = () => {
  const emotions_genres_mapping = {
    anger: ["Action", "Crime Fiction", "Thriller"],
    surprise: ["Comedy", "Family Film"],
    joy: ["Comedy", "Family Film", "Romance Film"],
    disgust: ["Crime Fiction", "Horror", "World cinema"],
    sadness: ["Drama", "Indie", "Romance Film", "World cinema"],
    fear: ["Horror", "Thriller"],
  };

  return (
    <Tabs
      defaultValue={Object.keys(emotions_genres_mapping)[0]}
      className="w-full my-4"
    >
      <TabsList>
        {Object.keys(emotions_genres_mapping).map((emotion) => (
          <TabsTrigger key={emotion} value={emotion}>
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(emotions_genres_mapping).map(([emotion, genres]) => (
        <TabsContent key={emotion} value={emotion}>
          <Tabs defaultValue={genres[0]} className="w-full">
            <TabsList>
              {genres.map((genre) => (
                <TabsTrigger key={genre} value={genre}>
                  {genre
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </TabsTrigger>
              ))}
            </TabsList>
            {genres.map((genre) => (
              <TabsContent key={genre} value={genre} className="py-2">
                <div className="w-full aspect-video relative">
                  <Image
                    src={`/images/time_series/${emotion.toLowerCase()}_${genre.toLowerCase()}.png`}
                    alt={`${genre} ${emotion}`}
                    fill
                    className="object-cover animate-in fade-in duration-500"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      ))}
    </Tabs>
  );
};
