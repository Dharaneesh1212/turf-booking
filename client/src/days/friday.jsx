import { Link } from "react-router-dom";

const Friday = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="flex items-center justify-start border-2 border-black h-[20rem] w-[30rem] rounded-md flex-col gap-6">
        <div className="flex justify-center items-center w-full rounded-md bg-green-300">
          <img src="" alt="" className="bg-zinc-600 h-[13rem]" />
        </div>
        <div className="flex items-center justify-between flex-row w-[28rem]">
          <div className="flex items-center justify-center flex-col gap-4">
            <span className="text-lg font-medium">Date : </span>
            <span className="text-lg font-medium">Day : </span>
          </div>
          <div>
            <Link>
              <button
                id="ofr-btn"
                className="p-2 rounded-md text-lg font-medium text-white bg-red-500 hover:bg-red-600"
              >
                Book Slot
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Friday;
