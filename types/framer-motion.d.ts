import type { RefObject } from "react";

declare module "framer-motion" {
  interface ExtendedUseInViewOptions {
    root?: RefObject<Element | null>;
    once?: boolean;
    amount?: "some" | "all" | number;
    margin?: string;
    initial?: boolean;
  }

  // Allow calling useInView with a ref and options when older type
  // definitions only expose the zero-argument signature.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export function useInView(
    ref: RefObject<Element | null>,
    options?: ExtendedUseInViewOptions
  ): boolean;
}
