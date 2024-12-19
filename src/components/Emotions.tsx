export const Emotions = () => {
  return (
    <div className="relative w-[600px] h-[600px] mx-auto mt-16">
      {/* Joy - Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 p-6 rounded-lg bg-black border border-yellow-500/20 shadow-[0_0_30px_-5px] shadow-yellow-500/50 transition-all hover:shadow-yellow-500/75">
        <h3 className="text-yellow-500 text-xl font-bold mb-2">Joy</h3>
        <p className="text-neutral-300">
          Happiness, optimism, and light in cinema
        </p>
      </div>

      {/* Surprise - Top Right */}
      <div className="absolute top-[13%] right-[13%] w-48 p-6 rounded-lg bg-black border border-orange-500/20 shadow-[0_0_30px_-5px] shadow-orange-500/50 transition-all hover:shadow-orange-500/75">
        <h3 className="text-orange-500 text-xl font-bold mb-2">Surprise</h3>
        <p className="text-neutral-300">Unexpected twists and revelations</p>
      </div>

      {/* Sadness - Middle Right */}
      <div className="absolute top-[50%] right-0 -translate-y-1/2 w-48 p-6 rounded-lg bg-black border border-blue-500/20 shadow-[0_0_30px_-5px] shadow-blue-500/50 transition-all hover:shadow-blue-500/75">
        <h3 className="text-blue-500 text-xl font-bold mb-2">Sadness</h3>
        <p className="text-neutral-300">Melancholy and calm moments</p>
      </div>

      {/* Anger - Bottom Right */}
      <div className="absolute bottom-[13%] right-[13%] w-48 p-6 rounded-lg bg-black border border-red-500/20 shadow-[0_0_30px_-5px] shadow-red-500/50 transition-all hover:shadow-red-500/75">
        <h3 className="text-red-500 text-xl font-bold mb-2">Anger</h3>
        <p className="text-neutral-300">Intensity and dramatic conflict</p>
      </div>

      {/* Fear - Bottom Left */}
      <div className="absolute bottom-[13%] left-[13%] w-48 p-6 rounded-lg bg-black border border-purple-500/20 shadow-[0_0_30px_-5px] shadow-purple-500/50 transition-all hover:shadow-purple-500/75">
        <h3 className="text-purple-500 text-xl font-bold mb-2">Fear</h3>
        <p className="text-neutral-300">Anxiety and uncertainty</p>
      </div>

      {/* Disgust - Middle Left */}
      <div className="absolute top-[50%] left-0 -translate-y-1/2 w-48 p-6 rounded-lg bg-black border border-green-500/20 shadow-[0_0_30px_-5px] shadow-green-500/50 transition-all hover:shadow-green-500/75">
        <h3 className="text-green-500 text-xl font-bold mb-2">Disgust</h3>
        <p className="text-neutral-300">Revulsion and aversion</p>
      </div>

      {/* Optional: Add connecting lines */}
      <div className="absolute inset-0 rounded-full border border-zinc-800/50"></div>
    </div>
  );
};
