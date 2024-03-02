"use client"
import React, { useRef, useState } from "react";
import { handleSubmit } from "../actions/handle-link";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const ref = useRef();
  const [shortenedLink, setShortenedLink] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleGetStarted = () => {
    const inp = document.querySelector(".link-inp");
    if (inp) {
      inp.focus();
    }
  };

  const handleRemoveInvalidMsg = () => {
    setErrorMessage('');
  }

  const handleLinkCopy = () => {
    const copyImg = document.querySelector("#copy-img");
    copyImg.src = "/tick.svg";
    setTimeout(() => {
      copyImg.src = "/copy.svg";
    }, 1500);
    navigator.clipboard.writeText(shortenedLink)
  }

  const submitForm = async () => {
    const response = await handleSubmit(ref.current.link.value);
    if (!response.isValid) {
      setErrorMessage("Invalid Link");
      setShortenedLink(null);
    }
    else {
      setShortenedLink(response.shortenedLink);
      setErrorMessage(null);
    }
    ref.current.reset();
  };

  return (
    <>
      <div className="main-heading lg:w-[70%] w-[90%] p-8 mt-14">
        <h1 className="lg:text-7xl text-4xl font-semibold">
          Shorten All Your Links with&nbsp;
          <span className="font-extrabold">&apos;&apos;iShortener&apos;&apos;</span>
        </h1>
      </div>
      <div className="details lg:w-[70%] w-[90%] p-8 my-5">
        <p className="text-xl text-gray-300">
          The best app on the internet to shorten your big links. Get a short
          link and be productive!
        </p>
      </div>
      <div className="getstarted lg:w-[70%] w-[90%] p-6">
        <button
          onClick={handleGetStarted}
          className="bg-teal-400 hover:bg-teal-500 text-black hover:text-white transition-all text-md font-semibold px-7 py-4 rounded-full"
        >
          Get Started
        </button>
      </div>
      <div className="shorten-form bg-indigo-700 bg-opacity-65 rounded-xl lg:w-[85%] w-full py-12 px-10 my-8">
        <form
          ref={ref}
          className="flex gap-8 justify-between"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <input
            type="text"
            placeholder="Enter a link"
            name="link"
            id="link"
            className="link-inp text-black px-4 py-5 text-md font-semibold w-full rounded-xl"
          />
          <button
            type="submit"
            className="lg:min-w-44 min-w-36 bg-teal-400 hover:bg-teal-500 text-black hover:text-white transition-all text-lg font-semibold lg:px-7 px-5 lg:py-4 py-2 rounded-full"
          >
            Shorten It
          </button>
        </form>
      </div>
      <div className="message-container">
        {errorMessage &&
          <div id="error-msg" className="border-2 rounded-sm border-red-700 bg-red-400 lg:w-[85%] w-full mx-1 my-4 px-5 py-7 font-semibold text-lg flex justify-between mb-16">
            <div>{errorMessage}</div>
            <button onClick={handleRemoveInvalidMsg}>
              <Image
                src="/cancel.svg"
                width={25}
                height={25}
                alt="cancel"
              />
            </button>
          </div>
        }
        {shortenedLink &&
          <div id="shortened-link" className="border-2 rounded-lg border-zinc-700 bg-zinc-700 lg:w-[85%] w-full my-4 px-5 py-7 font-semibold text-lg flex justify-between items-center mb-16">
            <div>
              <span className="font-normal">Shortened Link :- </span>
              <Link href={shortenedLink} target="_blank" className="text-blue-500 hover:text-blue-600 transition-all">
                {shortenedLink}
              </Link>
            </div>
            <button onClick={handleLinkCopy} className="border-2 rounded-2xl border-zinc-700 bg-zinc-800 hover:bg-zinc-600 transition-all p-3">
              <Image
                src="/copy.svg"
                width={25}
                height={25}
                alt="cancel"
                id="copy-img"
              />
            </button>
          </div>
        }
      </div >
    </>
  );
}
