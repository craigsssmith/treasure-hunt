import { Position, useParticles } from "@overreact/engine";
import { useCallback, useMemo } from "react";
import { Confetti } from "./Confetti";

export const useConfetti = () => {
  const particles = useParticles();
  
  const trigger = useCallback((element: HTMLElement | null) => {
    if (element) {
      const pos: Position = [
        element.offsetLeft + element.offsetWidth / 2,
        element.offsetTop + element.offsetHeight / 2,
      ];

      for (let i = 0; i < 300; i++) {
        particles.attach(new Confetti(pos));
      }
    }
  }, [particles]);

  return useMemo(() => ({ trigger }), [trigger]);
};
