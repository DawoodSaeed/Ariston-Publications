// components/NewsletterBanner.tsx

import { Button } from "@/components/ui/button";

export default function NewsletterBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-16 bg-gradient-to-r from-[#0D0B39] to-[#110247] p-8 rounded-xl flex flex-col md:flex-row items-center justify-between text-white gap-6">
      <div className="flex flex-col max-w-2xl w-full">
        <h2 className="text-4xl font-bold leading-snug text-left">
          Subscribe To Get Information, Latest
          <br />
          News And Other Interesting Events!
        </h2>
        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <input
            type="email"
            placeholder="Your email"
            className="px-6 py-3 rounded-full text-black placeholder:text-gray-500 w-[500px] max-w-full"
          />
          <Button className="rounded-full px-8 py-3 bg-gradient-to-r from-[#3D1DF3] to-[#6B28D6] text-white hover:opacity-90 transition">
            Subscribe
          </Button>
        </div>
      </div>
      <img
        src="/images/logo.svg"
        alt="Ariston Logo"
        className="w-56 h-auto object-contain hidden md:block"
      />
    </div>
  );
}
