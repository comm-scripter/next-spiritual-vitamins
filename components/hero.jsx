import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="flex bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
          <img
            src="vitamin3.jpeg"
            alt="vitamins"
            className="max-w-sm rounded-lg shadow-2xl mb-20"
          />
          <h1 className="text-5xl font-bold">
            Welcome to the Spiritual Vitamins site!
          </h1>
          <div className="max-w-sm text-gray-900 font-bold text-xl mb-2"></div>
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center"></p>

            <p className="py-6 text-3xl">
              A great daily source for spiritual renewal.
            </p>
          </div>
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="get the Word out logo"
              width={40}
              height={40}
              className="inline-flex items-center pb-2"
            ></Image>
            <p className="py-6 text-3xl inline">
              &ldquo;Getting the Word out&rdquo; by sharing topical Bible
              verses, thoughtful quotes, and study notes.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <button className="bg-blue-500 hover:bg-blue-700 hover:scale-105 transition-all rounded-full py-2 px-4 text-white text-2xl shadow-lg">
              Get started!
            </button>
          </div>
        </div>
      </div>
      {/* <div className="hero bg-base-200 p-4 w-md">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="vitamin3.jpeg"
            alt="vitamins"
            className="max-w-sm rounded-lg shadow-2xl mb-20"
          />
          <div className="flex col">
            <h1 className="text-5xl font-bold">
              Welcome to the Spiritual Vitamins site!
            </h1>
            <p className="py-6 text-3xl">
              A great daily source for spiritual renewal.
            </p>
            <div>
              <Image
                src="/logo.png"
                alt="get the Word out logo"
                width={40}
                height={40}
                className="inline-flex items-center pb-2"
              ></Image>
              <p className="py-6 text-3xl inline">
                "Getting the Word out" by sharing topical Bible verses,
                thoughtful quotes, and study notes.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 rounded-full py-2 px-4 text-white shadow-lg">
                Get started!
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
