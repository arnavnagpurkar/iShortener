import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="py-8 text-zinc-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-4xl font-bold my-4 mt-0">About iShortener</h2>
            <p className="text-lg text-gray-400">
              iShortener is a fast, reliable, and secure URL shortening service designed to make sharing links easier and more efficient.
            </p>
          </div>
          <div className="text-lg">
            <p className="mx-3 my-4">
              Whether you're sharing links on social media, sending emails, or communicating through messages, iShortener helps you create concise and manageable URLs that are easy to share and remember.
            </p>
            <p className="mx-3 my-4">
              Our service prioritizes simplicity and speed, allowing you to shorten URLs instantly without any unnecessary steps or registrations. Just paste your link, click a button, and you're ready to share your shortened URL with the world.
            </p>
            <p className="mx-3 my-4">
              We understand the importance of security and privacy, which is why iShortener employs advanced encryption techniques to safeguard your data. You can trust us to protect your information and ensure the integrity of your shortened links.
            </p>
            <p className="mx-3 my-4">
              iShortener is an open-source project created by&nbsp;
              <Link href="https://github.com/arnavnagpurkar" passHref>
                <a className="text-blue-500 hover:text-blue-400 transition-all" target="_blank">Arnav Nagpurkar</a>
              </Link>.
              It is built using Next.js and Tailwind CSS, leveraging the power of modern web technologies to provide a seamless and efficient URL shortening experience.
            </p>
            <p className="mx-3 my-4">
              You can contribute to its development or report issues on&nbsp;
              <Link href="https://github.com/arnavnagpurkar/iShortener" passHref>
                <a className="text-blue-500 hover:text-blue-400 transition-all" target="_blank">GitHub</a>
              </Link>.
            </p>
            <p className="mx-3 my-4">
              Thank you for choosing iShortener. We&apos;re dedicated to providing you with the best URL shortening experience possible, and we appreciate your support.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
export const metadata = {
  title: "About - iShortener | Arnav Nagpurkar",
  description: "Features Page of iShortner",
};
