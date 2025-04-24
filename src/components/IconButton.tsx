type IconButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  big?: boolean;
  disabled?: boolean;
};

export const IconButton: React.FC<IconButtonProps> = ({ children, onPress, big, disabled }) => (
  <button
    className={`icon ${big ? 'big' : ''} ${disabled ? 'disabled' : ''}`}
    onPointerDown={() => {
      setTimeout(onPress, 500);
    }}
  >
    <span>
      {children}
    </span>
  </button>
);
