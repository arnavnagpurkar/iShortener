"use client"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [originalLink, setOriginalLink] = useState("");

  const handleSubmit = async (e) => {
    const response = await fetch("/api/handle-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalLink })
    });

    response.json()
      .then(data => {
        console.log(data);
      })
  }

  const handleinpChange = (e) => {
    setOriginalLink(e.target.value);
  }

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
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a link" value={originalLink} onChange={handleinpChange} className="text-black" />
            <button type="submit">Shortern It</button>
          </form>
        </div>
      </div>
    </>
  );
}
