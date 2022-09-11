import React from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const OuterContainer = React.forwardRef<HTMLInputElement, ContainerProps>(
  function OuterContainer(
    { className, children, ...props }: ContainerProps,
    ref
  ) {
    return (
      <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

const InnerContainer = React.forwardRef<HTMLInputElement, ContainerProps>(
  function InnerContainer(
    { className, children, ...props }: ContainerProps,
    ref
  ) {
    return (
      <div
        ref={ref}
        className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

export const Container = React.forwardRef<HTMLInputElement, ContainerProps>(
  function Container({ children, ...props }: ContainerProps, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }
);
