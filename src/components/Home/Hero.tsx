export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute hidden lg:block lg:left-1/3 -translate-x-1/2 top-10 xl:left-1/2">
        <svg
          width="1200"
          height="490"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stop-color="#A685FA" offset="0%"></stop>
              <stop stop-color="#8254F8" offset="77.402%"></stop>
              <stop stop-color="#703BF7" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fill-rule="evenodd">
            <circle cx="1232" cy="128" r="128"></circle>
            <circle cx="155" cy="443" r="64"></circle>
          </g>
        </svg>
      </div>
      <div className="hero pt-32 pb-12 mt-16 md:pt-40 md:pb-20 xl:mt-0 xl:max-w-6xl xl:mx-auto">
        <div className="hero-content text-center">
          <div className="max-w-md md:max-w-2xl lg:max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
              data-aos="zoom-y-out"
              data-aos-delay="0"
            >
              Make your Outfit{" "}
              <span className="bg-gradient-to-r from-primary to-base-300 bg-clip-text text-transparent">
                wonderful
              </span>
            </h1>
            <p
              className="text-xl mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              soluta iusto expedita veniam asperiores, cumque id, tempora
              numquam voluptatibus.
            </p>
            <div
              className="max-w-xs mx-auto md:flex justify-between"
              data-aos="zoom-y-out"
              data-aos-delay="600"
            >
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
