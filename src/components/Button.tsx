import { Prop, useProperty, useRender, useUpdate } from "@overreact/engine";
import React, { useRef } from "react";
import { usePropertyChange } from "../hooks/usePropertyChange";

const PRESS_TIME = 200;

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'small' | 'regular' | 'large';
  fast?: boolean;
  enabled?: Prop<boolean>;
  active?: Prop<boolean>;
  onPress?: (element?: HTMLButtonElement | null) => void;
};

export const Button: React.FC<ButtonProps> = ({ children, className, fast = true, onPress, ...props }) => {
  // const audio = useAudio();
  // const haptics = useHaptics();
  
  const ref = useRef<HTMLButtonElement>(null);

  const enabled = useProperty(props.enabled ?? true);
  const active = useProperty(props.active ?? false);
  const duration = useProperty(0);

  const press = () => {
    active.current = true;
  };
  
  const handleTouchStart = () => {
    if (enabled.current && !active.current && fast) {
      press();
    }
  };

  const handleClick = () => {
    if (!fast) {
      press();
      setTimeout(() => onPress?.(ref.current), PRESS_TIME);
    }
  };

  // const provideFeedback = () => {
  //   // haptics.notification('success');
  //   // if (!silent) {
  //   //   audio.play(sounds[Math.floor(Math.random() * sounds.length)]);
  //   // }
  // }

  usePropertyChange(active, () => {
    console.log(active.current);
    // if (active.current) {
    //   duration.current = 0;
    //   provideFeedback();
    // }
  });

  useUpdate((delta) => {    
    if (enabled.current) {
      if (active.current) {
        duration.current += delta;
      }

      if (duration.current >= PRESS_TIME) {
        active.current = false;
        duration.current = 0;
        if (fast) {
          setTimeout(() => onPress?.(ref.current), PRESS_TIME);
        }
      }
    }
  });

  useRender(() => {
    if (enabled.invalidated) {
      ref.current?.toggleAttribute('disabled', !enabled.current);;
      enabled.invalidated = false;
    }

    if (active.invalidated) {
      ref.current?.classList.toggle('active', active.current);
      active.invalidated = false;
    }
  });

  return (
    <button
      ref={ref}
      className={className}
      disabled={!enabled.current}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
    >
      {children}
    </button>
  );
};



{/* <button
ref={ref}
disabled={!enabled.current}
onClick={handleClick}
onTouchStart={handleTouchStart}
>
<span className="button-edge" />
<span className="button-face">{children}</span>
<span className="button-outline" />
</button> */}