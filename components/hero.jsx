export default function Hero() {
  return (
    <>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="vitamin3.jpeg"
            alt="vitamins"
            className="max-w-sm rounded-lg shadow-2xl mb-20"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to the Spiritual Vitamins site!
            </h1>
            <p className="py-6 text-3xl">
              Your daily, one-stop, source for spiritual renewal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
