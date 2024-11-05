import clsx from "clsx";
import React from "react";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  isTechlist: boolean;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  (
    { as: Comp = "section", className, children, isTechlist, ...restProps },
    ref,
  ) => {
    let renderElement;
    if (isTechlist) {
      renderElement = (
        <Comp
          ref={ref}
          className={clsx("px-4 py-5 md:px-6 md:py-7 lg:py-10", className)}
          {...restProps}
        >
          <div className="mx-auto -mb-6 mt-16 w-full max-w-7xl">{children}</div>
        </Comp>
      );
    } else
      renderElement = (
        <Comp
          ref={ref}
          className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
          {...restProps}
        >
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </Comp>
      );

    return renderElement;
  },
);

Bounded.displayName = "Bounded";

export default Bounded;
