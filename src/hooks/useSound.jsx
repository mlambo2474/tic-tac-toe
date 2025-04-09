import React, { useEffect, useState } from "react";

const useSound = (url, options) => {
  const [sound, setSound] = useState(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio(url);
    audio.load();
    audio.volume = options.volume || 0.05;
    setSound(audio);

    // Listen for user interaction to enable sound playback
    const enableSound = () => setIsUserInteracted(true);
    document.addEventListener("click", enableSound, { once: true });

    return () => {
      document.removeEventListener("click", enableSound);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [url, options.volume]);

  const playSound = () => {
    if (sound && isUserInteracted) {
      sound.play().catch((error) => {
        console.error("Error playing sound:", error);
      });

      // Set a timeout to pause and reset the sound
      if (options.timeout) {
        setTimeout(() => {
          if (sound) {
            sound.pause();
            sound.currentTime = 0;
          }
        }, options.timeout);
      }
    }
  };

  return playSound;
};

export default useSound;
