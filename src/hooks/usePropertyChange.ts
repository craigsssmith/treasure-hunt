import { Property, useProperty, useUpdate } from "@overreact/engine";

export function usePropertyChange<T>(next: Property<T>, fn: (value: T) => void): void {
  const previous = useProperty(next.current);

  useUpdate(() => {
    if (previous.current !== next.current) {
      fn(next.current);
    }

    previous.current = next.current;
  });
}
