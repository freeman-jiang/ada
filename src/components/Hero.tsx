import { Sun, Sparkles, Cloud, Flame, Ghost, Skull } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Hero() {
  return (
    <div className="w-full rounded-md flex flex-col items-center justify-start antialiased bg-grid-white/[0.02] relative overflow-hidden font-sans min-h-screen">
      <div className="p-4 mx-auto relative z-10 w-full pt-20">
        <h1 className="text-4xl font-medium text-center tracking-tight">
          Emotions as the Secret Architects of Cinema
        </h1>
        <h2 className="text-xl text-center text-zinc-400 mt-2">
          An analysis of emotions and their effects in movies.
        </h2>

        <div className="relative w-[90vw] md:w-[600px] h-[90vw] md:h-[600px] mx-auto mt-16">
          {/* Joy - Top */}
          <div className="absolute top-[13%] left-[13%] w-36 md:w-48 p-3 md:p-4 rounded-lg bg-black border border-yellow-500/20 shadow-[0_0_30px_-5px] shadow-yellow-500/50 transition-all hover:shadow-yellow-500/75">
            <div className="flex items-center justify-center gap-2">
              <Sun className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
              <h3 className="text-yellow-500 text-lg md:text-xl font-medium">
                Joy
              </h3>
            </div>
          </div>

          {/* Surprise - Top Right */}
          <div className="absolute top-[13%] right-[13%] w-36 md:w-48 p-3 md:p-4 rounded-lg bg-black border border-orange-500/20 shadow-[0_0_30px_-5px] shadow-orange-500/50 transition-all hover:shadow-orange-500/75">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
              <h3 className="text-orange-500 text-lg md:text-xl font-medium">
                Surprise
              </h3>
            </div>
          </div>

          {/* Sadness - Middle Right */}
          <div className="absolute top-[50%] right-0 -translate-y-1/2 w-36 md:w-48 p-3 md:p-4 rounded-lg bg-black border border-blue-500/20 shadow-[0_0_30px_-5px] shadow-blue-500/50 transition-all hover:shadow-blue-500/75">
            <div className="flex items-center justify-center gap-2">
              <Cloud className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
              <h3 className="text-blue-500 text-lg md:text-xl font-medium">
                Sadness
              </h3>
            </div>
          </div>

          {/* Anger - Bottom Right */}
          <div className="absolute bottom-[13%] right-[13%] w-36 md:w-48 p-3 md:p-4 rounded-lg bg-black border border-red-500/20 shadow-[0_0_30px_-5px] shadow-red-500/50 transition-all hover:shadow-red-500/75">
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
              <h3 className="text-red-500 text-lg md:text-xl font-medium">
                Anger
              </h3>
            </div>
          </div>

          {/* Fear - Bottom Left */}
          <div className="absolute bottom-[13%] left-[13%] w-36 md:w-48 p-3 md:p-4 rounded-lg bg-black border border-purple-500/20 shadow-[0_0_30px_-5px] shadow-purple-500/50 transition-all hover:shadow-purple-500/75">
            <div className="flex items-center justify-center gap-2">
              <Ghost className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
              <h3 className="text-purple-500 text-lg md:text-xl font-medium">
                Fear
              </h3>
            </div>
          </div>

          {/* Disgust - Middle Left */}
          <div className="absolute top-[50%] left-0 -translate-y-1/2 w-36 md:w-48 p-3 md:p-4 rounded-lg bg-black border border-green-500/20 shadow-[0_0_30px_-5px] shadow-green-500/50 transition-all hover:shadow-green-500/75">
            <div className="flex items-center justify-center gap-2">
              <Skull className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
              <h3 className="text-green-500 text-lg md:text-xl font-medium">
                Disgust
              </h3>
            </div>
          </div>

          {/* Optional: Add connecting lines */}
          <div className="absolute inset-0 rounded-full border border-zinc-800/50"></div>
        </div>
        <Link
          href="https://en.wikipedia.org/wiki/Emotion_classification"
          target="_blank"
          className="mt-6 font-normal text-secondary max-w-3xl text-center mx-auto text-sm block hover:underline"
        >
          {"Paul Ekman's 6 Basic Emotions"}
        </Link>

        <p className="mt-12 text-secondary w-full text-center">
          Made by Team PHPJJ
        </p>
        <div className="flex items-center justify-center gap-2 text-secondary text-sm">
          <span>asdf</span>
          <span>•</span>
          <span>asdf</span>
          <span>•</span>
          <span>asdf</span>
          <span>•</span>
          <span>asdf</span>
          <span>•</span>
          <span>asdf</span>
        </div>
      </div>
    </div>
  );
}