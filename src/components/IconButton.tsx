type IconButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  big?: boolean;
};

export const IconButton: React.FC<IconButtonProps> = ({ children, onPress, big }) => (
  <button
    className={`icon ${big ? 'big' : ''}`}
    onPointerDown={() => {
      setTimeout(onPress, 500);
    }}
  >
    <span>
      {children}
    </span>
  </button>
);
