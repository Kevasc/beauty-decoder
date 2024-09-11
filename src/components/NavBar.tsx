import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="bg-white bg-opacity-10 text-white p-4">
      <div className="px-8 mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/">Skincare</a>
        </h1>
        <nav>
          <ul className="flex gap-8 justify-center">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/routine-builder">Routine Builder</Link>
            </li>
            <li>
              <Link href="/compare">Compare</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
