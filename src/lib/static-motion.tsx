import React from "react";

type ElementForTag<T extends keyof JSX.IntrinsicElements> =
  T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : HTMLElement;

type MotionlessComponent<T extends keyof JSX.IntrinsicElements> = React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<T> & React.RefAttributes<ElementForTag<T>>
>;

function createMotionComponent<T extends keyof JSX.IntrinsicElements>(
  component: T
): MotionlessComponent<T> {
  const Component = React.forwardRef<ElementForTag<T>, React.ComponentPropsWithoutRef<T>>(
    (props, ref) => {
      const cleanedProps = { ...props } as Record<string, unknown>;

      ["initial", "animate", "exit", "transition", "whileInView", "variants", "viewport"].forEach(
        (prop) => {
          delete cleanedProps[prop];
        }
      );

      return React.createElement(component, { ...(cleanedProps as Record<string, unknown>), ref });
    }
  );

  Component.displayName = `Motionless(${String(component)})`;

  return Component;
}

export const motion: Record<string, MotionlessComponent<keyof JSX.IntrinsicElements>> = new Proxy(
  {},
  {
    get: (_target, prop: string) => createMotionComponent(prop as keyof JSX.IntrinsicElements),
  }
);

export const useInView = (): boolean => true;

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
