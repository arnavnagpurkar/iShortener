import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='flex py-9 px-5 my-3 lg:w-3/4 mx-auto justify-between'>
      <div className="logo lg:text-4xl text-2xl font-bold">
        <Link href="/">iShortener</Link>
      </div>
      <ul className='flex lg:gap-8 gap-3 items-center text-xl'>
        <li className='hover:font-semibold'><Link className="transition-all" href="/">Home</Link></li>
        <li className='hover:font-semibold'><Link className="transition-all" href="/features">Features</Link></li>
        <li className='hover:font-semibold'><Link className="transition-all" href="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
