export default function Subscribe() {
  return (
    <section>
      <div className="px-4">
        <div className="card bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h4 className="card-title">Powering your business</h4>
            <p className="text-lg text-gray-300 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit nemo
              expedita voluptas culpa sapiente.
            </p>
            <div className="card-actions flex-col w-full">
              <input
                type="text"
                placeholder="Your email..."
                className="input input-lg bg-neutral border border-gray-800 text-base px-4"
              />
              <button className="btn btn-primary btn-lg text-base w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
