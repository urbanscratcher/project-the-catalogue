import Link from "next/link";
import LanguageBtn from "./LanguageBtn";

function Header() {
  return (
    <header className="fixed w-full flex px-3 text-center justify-between py-1 max-w-[1920px] left-1/2 -translate-x-1/2 bg-white z-10">
      <Link className="text-lg capitalize" href="/">
        The Catalogue
      </Link>
      <div className="flex gap-4">
        <Link href="/about" className="hover:underline lowercase">
          about
        </Link>
        <Link href="/projects" className="hover:underline lowercase">
          projects
        </Link>
        <Link href="/interests" className="hover:underline lowercase">
          interests
        </Link>
        <LanguageBtn />
      </div>
    </header>
  );
}

export default Header;
