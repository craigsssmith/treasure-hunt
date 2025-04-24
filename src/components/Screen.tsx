import { CSSProperties } from "react";

type ScreenProps = {
  pos: number;
  children: React.ReactNode;
  show?: boolean;
};

export const Screen: React.FC<ScreenProps> = ({ children, pos, show = false }) => {
  const style = {
    '--pos': pos,
    'opacity': show ? '1' : '0',
    'pointerEvents': show ? 'auto' : 'none',
  };

  return (
    <div className="screen" style={style as CSSProperties}>
      {children}
    </div>
  );
};
