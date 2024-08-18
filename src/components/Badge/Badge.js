import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Badge({
  children,
  brand,
  neutral,
  success,
  warning,
  error,
  small,
  medium,
  large,
  ...rest
}) {
  const classes = twMerge(
    classNames(
      rest.className,
      "rounded-full border justify-center items-center inline-flex w-min",
      {
        "bg-indigo-50 border-indigo-200 text-indigo-700": brand,
        "bg-neutral-50 border-neutral-200 text-neutral-900":
          neutral || (!brand && !neutral && !success && !warning && !error),
        "bg-green-50 border-green-200 text-green-700": success,
        "text-amber-700 bg-amber-50 boder-amber-200": warning,
        "text-red-600 bg-red-50 border-red-200": error,
      },
      {
        "text-xs h-5 px-1.5 py-0.5": small,
        "text-sm h-6 px-2 py-0.5 ": medium || (!medium && !small && !large),
        "text-sm h-7 px-2.5 py-1 ": large,
      }
    )
  );
  return <span className={classes}>{children}</span>;
}

export default Badge;
