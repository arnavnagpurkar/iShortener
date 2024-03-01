import FeatureCard from "@/components/FeatureCard";

export default function FeaturesPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold my-4 mt-0">
            Features of iShortener
          </h2>
          <p className="text-lg text-gray-400">
            Discover the amazing features of iShortener that make URL
            shortening a breeze.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureCard
            title="Quick Shortening"
            description="iShortener allows you to shorten URLs instantly with just a few clicks. Say goodbye to long and unwieldy links, and start sharing concise and clean URLs in seconds!"
          />
          <FeatureCard
            title="Shareable Links"
            description="Share your shortened links easily on social media, emails, or messages. With iShortener, spreading the word has never been easier. Share your content seamlessly without cluttering your messages with long and messy URLs."
          />
          <FeatureCard
            title="Secure Shortening"
            description="iShortener ensures the security of your shortened links. Your data is encrypted and protected, giving you peace of mind knowing that your links are safe and secure, even when shared across various platforms."
          />
          <FeatureCard
            title="No Registration Required"
            description="Start shortening links immediately without the hassle of registration. iShortener offers a seamless experience without any sign-up process. Simply paste your link, shorten it, and start sharing right away!"
          />
        </div>
      </div>
    </div>
  );
}
