export default function Hero() {
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold tracking-tighter mb-4">
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
            <div className="max-w-xs mx-auto">
              <button className="btn btn-primary btn-lg w-full mb-4 text-base">
                Start Shopping
              </button>
              <button className="btn btn-neutral btn-lg w-full text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
