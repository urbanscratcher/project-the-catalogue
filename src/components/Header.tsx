import Link from "next/link";

function Header() {
  return (
    <header className="flex px-3 text-center justify-between py-1">
      <Link className="text-lg" href=".">
        The Catalogue
      </Link>
      <Link href="./about" className="hover:text-gray-700">
        about
      </Link>
    </header>
  );
}

export default Header;
