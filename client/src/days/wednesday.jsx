import { Link } from "react-router-dom";

const Wednesday = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="flex items-center justify-start border-2 border-black h-[30rem] w-[50rem] rounded-md flex-col gap-6">
        <div className="flex items-center justify-around w-[78rem] pt-4 ">
          <div className="flex items-center justify-center flex-col gap-4">
            <span className="text-lg font-medium animate__animated animate__zoomIn">
              Date :{" "}
            </span>
            <span className="text-lg font-medium animate__animated animate__zoomIn">
              Day :{" "}
            </span>
          </div>
          <div>
            <Link>
              <button
                id="ofr-btn"
                className="p-2 rounded-md text-lg font-medium animate__animated animate__zoomIn text-white bg-red-500 hover:bg-red-600"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default Wednesday;
