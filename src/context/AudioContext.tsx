"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
  useState,
} from "react";

interface AudioContextType {
  playTypingSound: () => void;
  playEnterSound: () => void;
  playArpeggio: () => void;
  playBassySquare: () => void;
  playButtonPress: () => void;
  playButtonSelect: () => void;
  playErrorSound: () => void;
  isAudioEnabled: boolean;
  enableAudio: () => void;
  disableAudio: () => void;
  showAudioModal: () => void;
  initializeAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioContextProvider = ({ children }: { children: ReactNode }) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeAudio = () => {
    if (isInitialized || typeof window === "undefined") return;

    try {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)({ latencyHint: "interactive" });
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.gain.value = 0;
      gainNodeRef.current.connect(audioContextRef.current.destination);

      const audioDisabled = localStorage.getItem("audioDisabled");
      if (audioDisabled === "true") {
        disableAudio();
      } else {
        enableAudio();
      }

      setIsInitialized(true);
    } catch (e) {
      console.error("AudioContext initialization failed", e);
      setIsAudioEnabled(false);
    }
  };

  useEffect(() => {
    // Set up click event listener for the whole window
    const handleFirstInteraction = () => {
      initializeAudio();
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      audioContextRef.current?.close();
    };
  }, []);

  const enableAudio = () => {
    if (!audioContextRef.current) return;

    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume().catch((e) => {
        console.error("Failed to resume audio context:", e);
      });
    }

    if (gainNodeRef.current) {
      const now = audioContextRef.current.currentTime;
      gainNodeRef.current.gain.cancelScheduledValues(now);
      gainNodeRef.current.gain.setValueAtTime(
        gainNodeRef.current.gain.value,
        now
      );
      gainNodeRef.current.gain.linearRampToValueAtTime(0.1, now + 1.0); // Slower ramp-up
    }
    setIsAudioEnabled(true);
    localStorage.removeItem("audioDisabled");
  };

  const disableAudio = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      const now = audioContextRef.current.currentTime;
      gainNodeRef.current.gain.cancelScheduledValues(now);
      gainNodeRef.current.gain.setValueAtTime(
        gainNodeRef.current.gain.value,
        now
      );
      gainNodeRef.current.gain.linearRampToValueAtTime(0, now + 0.5); // Slower ramp-down
    }
    setIsAudioEnabled(false);
    localStorage.setItem("audioDisabled", "true");
  };

  const showAudioModal = () => {
    disableAudio();
  };

  const safePlay = (fn: () => void) => {
    if (isAudioEnabled && audioContextRef.current) {
      try {
        fn();
      } catch (e) {
        console.error("Audio playback error", e);
      }
    }
  };

  const playTypingSound = () =>
    safePlay(() => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();

      oscillator.type = "square";
      oscillator.frequency.value = 1200 + Math.random() * 600;

      const now = audioContextRef.current.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.05, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      oscillator.connect(gain);
      gain.connect(audioContextRef.current.destination);

      oscillator.start();
      oscillator.stop(now + 0.05);
    });

  const playEnterSound = () =>
    safePlay(() => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = 800;

      gain.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gain.gain.linearRampToValueAtTime(
        0.2,
        audioContextRef.current.currentTime + 0.01
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContextRef.current.currentTime + 0.1
      );

      oscillator.connect(gain);
      gain.connect(audioContextRef.current.destination);

      oscillator.start();
      oscillator.stop(audioContextRef.current.currentTime + 0.1);
    });

  const playArpeggio = () =>
    safePlay(() => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();
      oscillator.type = "square";
      oscillator.connect(gain);
      gain.connect(audioContextRef.current.destination);

      const notes = [220, 261.63, 329.63, 392, 493.88, 587.33];
      const sequence = [];
      const noteCount = 8 + Math.floor(Math.random() * 5);

      for (let i = 0; i < noteCount; i++) {
        sequence.push(notes[Math.floor(Math.random() * notes.length)]);
      }

      const now = audioContextRef.current.currentTime;
      sequence.forEach((freq, i) => {
        oscillator.frequency.setValueAtTime(freq, now + i * 0.1);
      });

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        now + noteCount * 0.1 + 0.2
      );

      oscillator.start();
      oscillator.stop(now + noteCount * 0.1);
    });

  const playBassySquare = () =>
    safePlay(() => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();

      oscillator.type = "square";
      oscillator.frequency.value = 80 + Math.random() * 20;

      const now = audioContextRef.current.currentTime;
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      oscillator.connect(gain);
      gain.connect(audioContextRef.current.destination);

      oscillator.start();
      oscillator.stop(now + 0.2);
    });

  const playButtonPress = () =>
    safePlay(() => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();

      oscillator.type = "square";
      oscillator.frequency.value = 120 + Math.random() * 30;

      const now = audioContextRef.current.currentTime;
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      oscillator.connect(gain);
      gain.connect(audioContextRef.current.destination);

      oscillator.start();
      oscillator.stop(now + 0.1);
    });

  const playButtonSelect = () =>
    safePlay(() => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(
        800,
        audioContextRef.current.currentTime
      );
      oscillator.frequency.exponentialRampToValueAtTime(
        1000,
        audioContextRef.current.currentTime + 0.05
      );

      const now = audioContextRef.current.currentTime;
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      oscillator.connect(gain);
      gain.connect(audioContextRef.current.destination);

      oscillator.start();
      oscillator.stop(now + 0.15);
    });

  const playErrorSound = () =>
    safePlay(() => {
      if (!audioContextRef.current) return;

      const osc1 = audioContextRef.current.createOscillator();
      const osc2 = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();

      osc1.type = "sawtooth";
      osc2.type = "square";
      osc1.frequency.value = 300;
      osc2.frequency.value = 450;

      const now = audioContextRef.current.currentTime;
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioContextRef.current.destination);

      const mod = audioContextRef.current.createOscillator();
      const modGain = audioContextRef.current.createGain();
      mod.type = "sine";
      mod.frequency.value = 20;
      modGain.gain.value = 50;
      mod.connect(modGain);
      modGain.connect(osc1.frequency);
      modGain.connect(osc2.frequency);

      osc1.start();
      osc2.start();
      mod.start();
      osc1.stop(now + 0.4);
      osc2.stop(now + 0.4);
      mod.stop(now + 0.4);
    });

  return (
    <AudioContext.Provider
      value={{
        playTypingSound,
        playEnterSound,
        playArpeggio,
        playBassySquare,
        playButtonPress,
        playButtonSelect,
        playErrorSound,
        isAudioEnabled,
        enableAudio,
        disableAudio,
        showAudioModal,
        initializeAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioContextProvider");
  }
  return context;
};
