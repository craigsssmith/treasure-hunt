type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children, onPress }) => (
  <button onPointerDown={() => {
    setTimeout(onPress, 500);
  }}>
    {children}
  </button>
);
