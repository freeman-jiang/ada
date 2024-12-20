import { Sun, Sparkles, Cloud, Flame, Ghost, Skull } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Hero() {
  return (
    <div className="w-full rounded-md flex flex-col items-center justify-start antialiased relative overflow-hidden min-h-screen">
      <div className="p-4 mx-auto relative z-10 w-full pt-20">
        <h1 className="text-4xl font-medium text-center tracking-tight">
          Emotions as the Secret Architects of Cinema
        </h1>
        <h2 className="text-xl text-center text-zinc-400 mt-2">
          An analysis of emotions and their effects in movies.
        </h2>

        <div className="w-[90vw] md:w-[600px] mx-auto mt-16">
          <div className="block md:hidden space-y-4">
            {/* Joy */}
            <div className="w-full p-4 rounded-lg bg-black border border-yellow-500/20 shadow-[0_0_30px_-5px] shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/75">
              <div className="flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                <h3 className="text-yellow-500 text-xl font-medium">Joy</h3>
              </div>
            </div>

            {/* Surprise */}
            <div className="w-full p-4 rounded-lg bg-black border border-orange-500/20 shadow-[0_0_30px_-5px] shadow-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/75">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <h3 className="text-orange-500 text-xl font-medium">
                  Surprise
                </h3>
              </div>
            </div>

            {/* Sadness */}
            <div className="w-full p-4 rounded-lg bg-black border border-blue-500/20 shadow-[0_0_30px_-5px] shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/75">
              <div className="flex items-center gap-2">
                <Cloud className="w-6 h-6 text-blue-500" />
                <h3 className="text-blue-500 text-xl font-medium">Sadness</h3>
              </div>
            </div>

            {/* Anger */}
            <div className="w-full p-4 rounded-lg bg-black border border-red-500/20 shadow-[0_0_30px_-5px] shadow-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-red-500/75">
              <div className="flex items-center gap-2">
                <Flame className="w-6 h-6 text-red-500" />
                <h3 className="text-red-500 text-xl font-medium">Anger</h3>
              </div>
            </div>

            {/* Fear */}
            <div className="w-full p-4 rounded-lg bg-black border border-purple-500/20 shadow-[0_0_30px_-5px] shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/75">
              <div className="flex items-center gap-2">
                <Ghost className="w-6 h-6 text-purple-500" />
                <h3 className="text-purple-500 text-xl font-medium">Fear</h3>
              </div>
            </div>

            {/* Disgust */}
            <div className="w-full p-4 rounded-lg bg-black border border-green-500/20 shadow-[0_0_30px_-5px] shadow-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-green-500/75">
              <div className="flex items-center gap-2">
                <Skull className="w-6 h-6 text-green-500" />
                <h3 className="text-green-500 text-xl font-medium">Disgust</h3>
              </div>
            </div>
          </div>

          {/* Desktop circular layout */}
          <div className="hidden md:block relative h-[600px]">
            {/* Joy - Top */}
            <div className="absolute top-[13%] left-[13%] w-48 p-4 rounded-lg bg-black border border-yellow-500/20 shadow-[0_0_30px_-5px] shadow-yellow-500/50 transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-yellow-500/75">
              <div className="flex items-center justify-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                <h3 className="text-yellow-500 text-xl font-medium">Joy</h3>
              </div>
            </div>

            {/* Surprise - Top Right */}
            <div className="absolute top-[13%] right-[13%] w-48 p-4 rounded-lg bg-black border border-orange-500/20 shadow-[0_0_30px_-5px] shadow-orange-500/50 transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/75">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <h3 className="text-orange-500 text-xl font-medium">
                  Surprise
                </h3>
              </div>
            </div>

            {/* Sadness - Middle Right */}
            <div className="absolute top-[50%] right-0 -translate-y-1/2 w-48 p-4 rounded-lg bg-black border border-blue-500/20 shadow-[0_0_30px_-5px] shadow-blue-500/50 transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-x-2 hover:shadow-blue-500/75">
              <div className="flex items-center justify-center gap-2">
                <Cloud className="w-6 h-6 text-blue-500" />
                <h3 className="text-blue-500 text-xl font-medium">Sadness</h3>
              </div>
            </div>

            {/* Anger - Bottom Right */}
            <div className="absolute bottom-[13%] right-[13%] w-48 p-4 rounded-lg bg-black border border-red-500/20 shadow-[0_0_30px_-5px] shadow-red-500/50 transform-gpu transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-red-500/75">
              <div className="flex items-center justify-center gap-2">
                <Flame className="w-6 h-6 text-red-500" />
                <h3 className="text-red-500 text-xl font-medium">Anger</h3>
              </div>
            </div>

            {/* Fear - Bottom Left */}
            <div className="absolute bottom-[13%] left-[13%] w-48 p-4 rounded-lg bg-black border border-purple-500/20 shadow-[0_0_30px_-5px] shadow-purple-500/50 transform-gpu transition-all duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-purple-500/75">
              <div className="flex items-center justify-center gap-2">
                <Ghost className="w-6 h-6 text-purple-500" />
                <h3 className="text-purple-500 text-xl font-medium">Fear</h3>
              </div>
            </div>

            {/* Disgust - Middle Left */}
            <div className="absolute top-[50%] left-0 -translate-y-1/2 w-48 p-4 rounded-lg bg-black border border-green-500/20 shadow-[0_0_30px_-5px] shadow-green-500/50 transform-gpu transition-all duration-300 hover:scale-105 hover:translate-x-2 hover:shadow-green-500/75">
              <div className="flex items-center justify-center gap-2">
                <Skull className="w-6 h-6 text-green-500" />
                <h3 className="text-green-500 text-xl font-medium">Disgust</h3>
              </div>
            </div>

            {/* Optional: Add connecting lines */}
            <div className="absolute inset-0 rounded-full border border-zinc-800/60 -z-10"></div>
          </div>
        </div>
        <Link
          href="https://en.wikipedia.org/wiki/Emotion_classification"
          target="_blank"
          className="mt-6 font-normal max-w-3xl text-center mx-auto text-sm block underline text-zinc-500"
        >
          {"Paul Ekman's 6 Basic Emotions"}
        </Link>

        <p className="mt-12 w-full text-center text-zinc-500">
          Made by Team PHPJJ
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
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
