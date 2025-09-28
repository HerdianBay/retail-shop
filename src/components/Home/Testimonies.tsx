export default function Testimonies() {
  return (
    <div className="card border border-violet-600 shadow-sm relative ">
      <div className="card-body items-center text-center pt-20 md:px-8">
        <div className="avatar absolute top-0 -translate-y-1/3">
          <div className="w-24 rounded-full">
            <img src="/avatar.png" />
          </div>
        </div>
        <blockquote className="font-medium text-xl text-gray-400 mb-3">
          " I love this product and would recommend it to anyone. Could be not
          easier to use, and our multiple Branch are doing wonderful. We get
          nice comments all the time"
        </blockquote>
        <cite className="text-lg font-bold not-italic">Darya Finger</cite>
        <div className="text-base text-gray-400">
          <span>CEO & Co-Founder </span>
          <a href="#" className="text-sky-500 hover:underline">
            @Ashon
          </a>
        </div>
      </div>
    </div>
  );
}
