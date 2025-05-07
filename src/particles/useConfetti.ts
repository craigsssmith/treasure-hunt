import { Position, useParticles } from "@overreact/engine";
import { useCallback, useMemo } from "react";
import { Confetti } from "./Confetti";

export const useConfetti = () => {
  const particles = useParticles();
  
  const trigger = useCallback((element?: HTMLElement | null) => {
    let pos: Position = [window.innerWidth / 2, window.innerHeight / 2];

    if (element) {
      const rect = element.getBoundingClientRect();
      pos = [rect.left + rect.width / 2, rect.top + rect.height / 2];
    }
    
    for (let i = 0; i < 350; i++) {
      particles.attach(new Confetti(pos));
    }
  }, [particles]);

  return useMemo(() => ({ trigger }), [trigger]);
};
