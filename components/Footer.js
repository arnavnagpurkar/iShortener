import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="lg:w-3/4 mx-auto bg-zinc-900 rounded-lg py-5 px-8">
      <div className="footer flex justify-between items-center">
        <div className="logo lg:text-2xl text-md font-medium">
          <Link href="/">iShortener</Link>
        </div>
        <ul className='flex lg:gap-7 gap-3 items-center text-md'>
          <li className='hover:font-semibold'><Link className="transition-all" href="/">Home</Link></li>
          <li className='hover:font-semibold'><Link className="transition-all" href="/features">Features</Link></li>
          <li className='hover:font-semibold'><Link className="transition-all" href="/about">About</Link></li>
          <li>
            <Link href="https://github.com/arnavnagpurkar/iShortener" target="_blank">
              <Image
                src="/github-mark-white.svg"
                width={25}
                height={25}
                className="hover:opacity-70 transition-all"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text mt-3 flex justify-between">
        <div>&copy; Created in 2024 by <Link href="https://github.com/arnavnagpurkar" target="_blank" className="text-blue-500 hover:text-blue-400 transition-all">arnavnagpurkar</Link>
        </div>
        <div>|</div>
        <div>
          &copy; iShortener - All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
