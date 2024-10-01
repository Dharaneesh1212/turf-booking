import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main id="navbar" className="flex items-center justify-center w-[84.3rem]">
      <div className="h-20 w-full flex justify-center items-center flex-row gap-40">
        <Link
          to="/"
          className=" flex justify-center items-center gap-1 font-medium text-xl text-black hover:underline"
        >
          Home
        </Link>
        <Link
          to="/signin"
          className=" flex justify-center items-center gap-1 font-medium text-xl text-black hover:underline"
        >
          Log-in
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
