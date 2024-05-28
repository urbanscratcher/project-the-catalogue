import Link from "next/link";
import LanguageBtn from "./LanguageBtn";

function Header() {
  return (
    <header className="fixed w-full flex px-3 text-center justify-between py-1 max-w-[1920px] left-1/2 -translate-x-1/2 bg-white z-10">
      <Link className="text-lg" href="/">
        The Catalogue
      </Link>
      <div className="flex gap-2">
        <Link href="/projects" className="hover:underline">
          projects
        </Link>
        <Link href="/about" className="hover:underline">
          about
        </Link>
        <LanguageBtn />
      </div>
    </header>
  );
}

export default Header;
