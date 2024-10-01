import { Link } from "react-router-dom";
import turf from "../assets/images/turf.jpg";
import turfOne from "../assets/images/turfOne.jpg";
import turfTwo from "../assets/images/turfTwo.jpg";
import turfThree from "../assets/images/turfThree.jpg";

const Home = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-4 w-screen p-4">
        <div
          id="logo"
          className="h-72 w-full rounded-lg bg-white flex justify-center items-center flex-col border-2 border-black"
        >
          <div className="flex justify-center items-center w-full rounded-md">
            <img className="h-72 w-full" src={turf} alt="LOGO" />
          </div>
        </div>
        <div
          id="offers"
          className="h-72 w-full rounded-lg bg-white flex justify-center items-center flex-col border-2 border-black"
        >
          <div className="flex justify-center items-center w-full rounded-md bg-green-300">
            <img className="h-52 w-full" src={turfOne} alt="OFFERS" />
          </div>
          <div className="h-20 flex justify-end items-center w-full p-4">
            <Link to="/offers">
              <button
                id="ofr-btn"
                className="p-2 rounded-md text-lg font-medium text-white bg-red-500 hover:bg-red-600"
              >
                View Offers
              </button>
            </Link>
          </div>
        </div>
        <div
          id="slots"
          className="h-72 w-full rounded-lg bg-white flex justify-center items-center flex-col border-2 border-black"
        >
          <div className="flex justify-center items-center w-full rounded-md bg-green-300">
            <img className="h-52 w-full" src={turfTwo} alt="SLOTS" />
          </div>
          <div className="h-20 flex justify-end items-center w-full p-4">
            <Link to="/slots">
              <button
                id="slot-btn"
                className="p-2 rounded-md text-lg font-medium text-white bg-red-500 hover:bg-red-600"
              >
                Book Slots
              </button>
            </Link>
          </div>
        </div>
        <div
          id="tournament"
          className="h-72 w-full rounded-lg bg-white flex justify-center items-center flex-col border-2 border-black"
        >
          <div className="flex justify-center items-center w-full rounded-md bg-green-300">
            <img className="h-52 w-full" src={turfThree} alt="TOURNAMENTS" />
          </div>
          <div className="h-20 flex justify-end items-center w-full p-4">
            <Link to="/tournaments">
              <button
                id="trnmnt-btn"
                className="p-2 rounded-md text-lg font-medium text-white bg-red-500 hover:bg-red-600"
              >
                View Tournaments
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
