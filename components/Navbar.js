"use client"
import Image from "next/image";
import Link from "next/link"

const Navbar = () => {
  const toggleModes = () => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("dark");
    };
  }
  return (
    <nav>
      <div className="flex md:flex-row md:gap-0 gap-5 flex-col py-9 px-5 my-3 lg:w-3/4 mx-auto md:justify-between justify-center items-center">
        <div className="logo lg:text-4xl text-2xl font-bold">
          <Link href="/">iShortener</Link>
        </div>
        <ul className='flex lg:gap-8 gap-5 items-center text-xl'>
          <li>
            <button
              onClick={toggleModes}
              className="hover:opacity-80 transition-all"
            >
              <Image
                src={"/modeToggle.svg"}
                width={25}
                height={25}
                className="dark:invert invert-0"
              />
            </button>
          </li>
          <li className='hover:opacity-80 transition-all'><Link className="transition-all" href="/">Home</Link></li>
          <li className='hover:opacity-80 transition-all'><Link className="transition-all" href="/features">Features</Link></li>
          <li className='hover:opacity-80 transition-all'><Link className="transition-all" href="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
