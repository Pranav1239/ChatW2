import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="md:w-2/3 w-full px-4 text-black flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1 className="w-full md:w-2/3">
              How can we help you. get in touch
            </h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full md:w-2/3 text-black">
              Do you want to talk to the maker of this website? Contact me using
              the link below. Feel free to collaborate or simply chat.
              <span className="text-yellow-600">Have a great day!</span>
            </p>
            <div className="w-44 pt-6 md:pt-0">
              <a className="bg-slate-950 text-white justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <Link
                href={""}
                className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase"
              >
                <Instagram />
              </Link>
              <Link
                href={""}
                className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase"
              >
                <Twitter />
              </Link>
              <Link
                href={""}
                className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase"
              >
                <GitHub />
              </Link>
              <Link
                href={""}
                className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase"
              >
                <LinkedIn />
              </Link>
            </div>
            <hr className="border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
