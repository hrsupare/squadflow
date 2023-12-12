import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
 
const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={160}
          width={190}
        />
      </div>
    </Link>
  );
};