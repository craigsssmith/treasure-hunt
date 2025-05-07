import React from "react";

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ onPress, children }, ref) => (
  <button
    ref={ref}
    onPointerDown={() => setTimeout(onPress, 500)}
  >
    {children}
  </button>
));