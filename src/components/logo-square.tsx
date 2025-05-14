import clsx from "clsx";
import LogoIcon from "./icons/logo";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center  bg-white dark:border-neutral-700 dark:bg-white",
        {
          "h-[30px] w-[60px] rounded-xl": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
        }
      )}
    >
      <LogoIcon
        className={clsx({
          "h-[30px] w-[60px]": !size,
          "h-[30px] w-[30px]": size === "sm",
        })}
      />
    </div>
  );
}
