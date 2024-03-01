import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "iShortener | Arnav Nagpurkar",
  description: "iShortner is a link shortner created by Arnav Nagpurkar and is a open source app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <Navbar />
        <div className="container lg:w-3/4 mx-auto my-6">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
