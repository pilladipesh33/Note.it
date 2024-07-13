import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { CONSTANT } from "@/utils/constant";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        className="dark:hidden"
        src={"/logo.png"}
        height={"40"}
        width={"40"}
        alt="Logo"
      />
      <Image
        className=" hidden dark:block"
        src={"/logo-dark.png"}
        height={"40"}
        width={"40"}
        alt="Logo"
      />
      <p className={cn("font-semibold", font.className)}>{CONSTANT.TITLE}</p>
    </div>
  );
};
