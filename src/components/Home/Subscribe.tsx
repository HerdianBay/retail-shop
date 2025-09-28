export default function Subscribe() {
  return (
    <section>
      <div className="px-4 md:px-6">
        <div className="card bg-neutral text-neutral-content overflow-hidden">
          <div className="absolute right-0 bottom-0 z-30 hidden lg:block">
            <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient
                  cx="35.542%"
                  cy="34.553%"
                  fx="35.542%"
                  fy="34.553%"
                  r="96.031%"
                  id="ni-a"
                >
                  <stop stop-color="#c6afff" offset="0%"></stop>
                  <stop stop-color="#5c1bff" offset="44.317%"></stop>
                  <stop stop-color="#4b03ff" offset="100%"></stop>
                </radialGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <g fill="#b99dff">
                  <ellipse
                    fill-opacity=".04"
                    cx="185"
                    cy="15.576"
                    rx="16"
                    ry="15.576"
                  ></ellipse>
                  <ellipse
                    fill-opacity=".24"
                    cx="100"
                    cy="68.402"
                    rx="24"
                    ry="23.364"
                  ></ellipse>
                  <ellipse
                    fill-opacity=".12"
                    cx="29"
                    cy="251.231"
                    rx="29"
                    ry="28.231"
                  ></ellipse>
                  <ellipse
                    fill-opacity=".64"
                    cx="29"
                    cy="251.231"
                    rx="8"
                    ry="7.788"
                  ></ellipse>
                  <ellipse
                    fill-opacity=".12"
                    cx="342"
                    cy="31.303"
                    rx="8"
                    ry="7.788"
                  ></ellipse>
                  <ellipse
                    fill-opacity=".48"
                    cx="62"
                    cy="126.811"
                    rx="2"
                    ry="1.947"
                  ></ellipse>
                  <ellipse
                    fill-opacity=".12"
                    cx="78"
                    cy="7.072"
                    rx="2"
                    ry="1.947"
                  ></ellipse>
                  <ellipse
                    fill-opacity=".64"
                    cx="185"
                    cy="15.576"
                    rx="6"
                    ry="5.841"
                  ></ellipse>
                </g>
                <circle fill="url(#ni-a)" cx="276" cy="237" r="200"></circle>
              </g>
            </svg>
          </div>
          <div className="card-body items-center text-center md:px-12 md:py-16 lg:items-start lg:text-start">
            <h4 className="card-title">Powering your business</h4>
            <p className="text-lg text-gray-300 mb-6 lg:max-w-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit nemo
              expedita voluptas culpa sapiente.
            </p>
            <div className="card-actions flex-col w-full md:flex-row md:justify-center lg:justify-start">
              <input
                type="text"
                placeholder="Your email..."
                className="input input-lg bg-neutral border border-gray-800 text-base px-4"
              />
              <button className="btn btn-primary btn-lg text-base w-full md:w-fit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
