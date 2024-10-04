import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="flex items-center justify-start border-2 border-black h-[30rem] w-[25rem] rounded-md flex-col gap-6 p-10">
        <h1 className="flex items-center justify-center text-xl font-medium text-black animate__animated animate__zoomIn">
          Register
        </h1>
        <form action="" className="flex flex-col gap-8">
          <input
            type="text"
            className="h-12 w-[17rem] text-xl font-large text-black p-1 outline-none border-b-2 border-gray-400 animate__animated animate__zoomIn capitalize"
            placeholder="name"
          />
          <input
            type="email"
            className="h-12 w-[17rem] text-xl font-large text-black p-1 outline-none border-b-2 border-gray-400 animate__animated animate__zoomIn"
            placeholder="email"
          />
          <input
            type="password"
            className="h-12 w-[17rem] text-xl font-large text-black p-1 outline-none border-b-2 border-gray-400 animate__animated animate__zoomIn"
            placeholder="password"
          />
          <button className="h-12 w-[17rem] bg-sky-500 hover:bg-sky-600 rounded-md text-lg animate__animated animate__zoomIn">
            Regster
          </button>
        </form>
        <div className="text-lg animate__animated animate__zoomIn">
          <h1>
            Already have an account?{"  "}
            <Link to="/signin">
              <span className="font-medium hover:underline cursor-pointer">
                Log-in
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Register;
