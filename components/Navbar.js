import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='flex border border-white py-9 px-5 lg:w-3/4 mx-auto my-3 justify-between'>
      <div className="logo lg:text-4xl text-2xl font-bold">
        <Link href="/">iShortener</Link>
      </div>
      <ul className='flex lg:gap-8 gap-3 items-center text-xl'>
        <li className='hover:font-semibold'><Link href="/">Home</Link></li>
        <li className='hover:font-semibold'><Link href="/features">Features</Link></li>
        <li className='hover:font-semibold'><Link href="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
