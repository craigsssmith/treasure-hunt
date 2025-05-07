import { Button } from "./Button";

type IconButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  big?: boolean;
  disabled?: boolean;
};

export const IconButton: React.FC<IconButtonProps> = ({ children, onPress, big, disabled }) => (
  <Button
    className={`icon ${big ? 'big' : ''}`}
    onPress={onPress}
    enabled={!disabled}
  >
    <span>
      {children}
    </span>
  </Button>
);
