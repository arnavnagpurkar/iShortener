"use client"
import Link from "next/link";
import { handleSubmit } from "@/actions/handle-link";
import { useRef, useState } from "react";

export default function Home() {
  const ref = useRef();
  const [shortenedLink, setShortenedLink] = useState(null)

  const submitForm = async (e) => {
    e.preventDefault();
    const response = await handleSubmit(ref.current.link.value);
    console.log(response) // was supposed to be the shortened link, but as project is not completes returns the link is valid or not, will be updated when the logic will be written and then the shortened url will be returned here and then passed to variable "shortenedLink" and the UI changes would be made
    setShortenedLink(response);
    ref.current.reset();
  };

  return (
    <>
      <div className="container lg:w-3/4 mx-auto my-6">
        <div className="border border-white main-heading lg:w-[70%] w-[90%] p-8 mt-14">
          <h1 className="lg:text-7xl text-4xl font-semibold">
            Shorten All Your Links with <span className="font-extrabold">"iShortener"</span>
          </h1>
        </div>
        <div className="border border-white details lg:w-[70%] w-[90%] p-8 my-5">
          <p className="text-xl text-gray-300">The best app on the internet to shorten your big links. Get a short link and be productive!</p>
        </div>
        <div className="border border-white getstarted lg:w-[70%] w-[90%] p-6">
          <Link href="" className="bg-teal-400 hover:bg-teal-500 text-black hover:text-white transition-all text-md font-semibold px-7 py-4 rounded-full">Get Started</Link>
        </div>
        <div className="shortern-form">
          <form ref={ref} onSubmit={submitForm} className="lg:w-[85%] w-full border border-white py-12 px-10 my-8 flex gap-8 justify-between">
            <input type="text" placeholder="Enter a link" name="link" id="link" className="text-black px-4 py-5 text-md font-semibold w-full rounded-xl" />
            <button type="submit" className="lg:min-w-44 min-w-36 bg-teal-400 hover:bg-teal-500 text-black hover:text-white transition-all text-lg font-semibold lg:px-7 px-5 lg:py-4 py-2 rounded-full">Shortern It</button>
          </form>
        </div>
      </div>
    </>
  );
}
