import Image from "next/image";
import Link from "next/link";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Button } from "@mui/material";
export default function Hero() {
  return (
    <div className="bg-black">
      <section>
        <Navbar />
      </section>
      <section>
        <div className="mt-10 lg:w-3/4 xl:w-2/4 relative z-10">
          <div className="p-20">
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Lorem ipsum dolor sit amet consectetur elit.
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              quibusdam ut necessitatibus?
            </p>
            <div className="flex flex-row gap-4">

              <Link
                href={"/chat"}
                className="px-8 py-4 bg-purple-700 hover:bg-purple-900 text-white rounded inline-block mt-8 font-semibold"
              >
                Book Appointment
              </Link>
              <Link href={"/login"}>
              <Button 
              className="px-8 py-4  text-white rounded inline-block mt-8 font-semibold" variant="outlined">
                Login
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8 mb-8">
        <hr />
      </div>
      <section>
        <div className="flex justify-center">
          <h1 className="text-white text-2xl lg:text-5xl font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, odit.</h1>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
