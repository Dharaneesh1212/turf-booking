import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="flex items-center justify-start border-2 border-black h-[30rem] w-[27rem] rounded-md flex-col gap-6 p-16">
        <h1 className="flex items-center justify-center text-xl font-medium text-black">
          Sign-In
        </h1>
        <form action="" className="flex flex-col gap-8">
          <input
            type="email"
            className="h-12 w-[17rem] text-xl font-large text-black p-1 outline-none border-b-2 border-gray-400"
            placeholder="email"
          />
          <input
            type="password"
            className="h-12 w-[17rem] text-xl font-large text-black p-1 outline-none border-b-2 border-gray-400"
            placeholder="password"
          />
          <button className="h-12 w-[17rem] bg-red-500 hover:bg-red-600 rounded-md text-lg">
            sign-in
          </button>
        </form>
        <Link className="font-large hover:underline">Forgot Password ?</Link>
        <div className="text-lg">
          <h1>
            Don't have an account?{"  "}
            <Link>
              <span className="font-medium hover:underline cursor-pointer">
                Register
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Auth;
