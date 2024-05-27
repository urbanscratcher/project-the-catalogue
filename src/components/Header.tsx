import Link from "next/link";
import LanguageBtn from "./LanguageBtn";

function Header() {
  return (
    <header className="flex px-3 text-center justify-between py-1 max-w-[1920px] mx-auto">
      <Link className="text-lg" href="/">
        The Catalogue
      </Link>
      <div className="flex gap-2">
        <Link href="/about" className="hover:underline">
          about
        </Link>
        <LanguageBtn />
      </div>
    </header>
  );
}

export default Header;
