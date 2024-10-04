const ResetPassword = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="flex items-center justify-start border-2 border-black h-[20rem] w-[25rem] rounded-md flex-col gap-6 p-16">
        <h1 className="flex items-center justify-center text-xl font-medium text-black animate__animated animate__zoomIn">
          Reset Password
        </h1>
        <form action="" className="flex flex-col gap-8">
          <input
            type="password"
            className="h-12 w-[17rem] text-xl font-large text-black p-1 outline-none border-b-2 border-gray-400 animate__animated animate__zoomIn"
            placeholder="password"
          />
          <button className="h-12 w-[17rem] bg-yellow-500 hover:bg-yellow-600 rounded-md text-lg animate__animated animate__zoomIn">
            Reset password
          </button>
        </form>
      </div>
    </main>
  );
};

export default ResetPassword;
