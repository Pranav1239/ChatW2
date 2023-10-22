import Link from "next/link";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tpyejs from "../Common/Tpyejs";
export default function Hero() {
  const errorLogin = ()=>{
    toast.error('PleaseLogin', { theme: "colored" });
  }
  return (
    <div className="bg-white">
      <section>
      <ToastContainer />
        <div className=" lg:w-3/4 xl:w-2/4 relative z-10">
          <div className="p-20">
            <h1 className="text-black text-2xl md:text-5xl xl:text-6xl font-bold leading-tight">
            you can create or join groups and chat with other members in real time.
            </h1>
            <p className="text-black text-xl md:text-2xl leading-snug mt-4">
            To chat with members or in groups, you must first log in to your account. Once you are logged in
            </p>
            <div className="flex flex-row gap-4">

              <Link
                href={"/"}
                onClick={errorLogin}
                className="px-8 py-4 bg-[#000000] hover:bg-slate-900 text-white rounded inline-block mt-8 font-semibold"
              >
               Visit Chat
              </Link>
              <Link
                href={"/login"}
                className="px-8 py-4 bg-[#000000] hover:bg-slate-900 text-white rounded inline-block mt-8 font-semibold"
              >
                Login
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
            <Tpyejs />
        </div>
      </section> 
      <section>
        <Footer />
      </section>
    </div>
  );
}
