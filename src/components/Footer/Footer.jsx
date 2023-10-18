export default function Footer() {
  return (
    <div>
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-7xl font-bold">
              <h1 className="w-full md:w-2/3">How can we help you. get in touch</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
              <p className="w-full md:w-2/3 text-gray-400">
                To ensure that all Wikipedia content is verifiable, anyone may
                question an uncited claim. If your work has been tagged
              </p>
              <div className="w-44 pt-6 md:pt-0">
                <a className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-24 mb-12 flex-row justify-between">
                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  About
                </a>
                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  Services
                </a>
                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  Why us
                </a>
                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  Contact
                </a>
              </div>
              <hr className="border-gray-600" />
            </div>
          </div>
        </div>
      </div>
  );
}
