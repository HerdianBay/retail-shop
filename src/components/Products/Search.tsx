export default function Search() {
  return (
    <div className="mt-16 px-4 py-6 md:px-14">
      <label className="input w-full md:w-1/2 lg:w-1/3">
        <svg
          className="h-6 w-6 p-1 bg-violet-600 text-white rounded-md"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>
    </div>
  );
}
