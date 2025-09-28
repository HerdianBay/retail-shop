export default function Hero() {
  return (
    <section>
      <div className="hero pt-32 pb-12 mt-16 md:pt-40 md:pb-20">
        <div className="hero-content text-center">
          <div className="max-w-md md:max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
              Make your Outfit{" "}
              <span className="bg-gradient-to-r from-primary to-base-300 bg-clip-text text-transparent">
                wonderful
              </span>
            </h1>
            <p className="text-xl mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              soluta iusto expedita veniam asperiores, cumque id, tempora
              numquam voluptatibus.
            </p>
            <div className="max-w-xs mx-auto md:flex justify-between">
              <button className="btn btn-primary btn-lg w-full mb-4 text-base md:w-fit">
                Start Shopping
              </button>
              <button className="btn btn-neutral btn-lg w-full text-base md:w-fit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
