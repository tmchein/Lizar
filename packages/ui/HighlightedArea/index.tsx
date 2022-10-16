interface HighlightedAreaProps {
  title: string;
  subtitle?: string;
}

export const HighlightedArea = ({ title, subtitle }: HighlightedAreaProps) => {
  return (
    <div className="relative w-max group">
      <span
        className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600
        rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
      ></span>
      <span className="absolute -inset-[1px] bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg"></span>
      <button
        className="relative px-7 py-4 bg-black rounded-lg leading-none flex
        items-center divide-x divide-gray-600"
      >
        <span className="flex items-center space-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-emerald-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
          <span className="pr-6 text-gray-100">{title}</span>
        </span>
        <span
          className="pl-6 text-indigo-400 group-hover:text-gray-100
        transition duration-200"
        >
          {subtitle} &rarr;
        </span>
      </button>
    </div>
  );
};
