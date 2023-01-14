import { SiProtocolsdotio } from "react-icons/si";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="m-auto h-[600px] w-[500px] border-2 border-gray-200 rounded-2xl p-12 flex flex-col gap-4">
      <div className="flex gap-2 items-center cursor-pointer">
        <SiProtocolsdotio size={26} className="text-blue-500" />
        <p className="font-semibold text-blue-500">raccoon</p>
      </div>
      <h2 className="text-xl">Login</h2>
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChangeEmail}
          value={email}
          required
          className="text-gray-500 py-3 px-4 border-2 border-gray-200 focus:outline-none rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
          value={password}
          required
          className="text-gray-500 py-3 px-4 border-2 border-gray-200 focus:outline-none rounded-md"
        />
        <button className="bg-blue-400 p-2 rounded-md text-white hover:bg-blue-500 transition duration-300 ease-in-out mt-2">
          Login
        </button>
      </form>
      <p className="text-center text-[16px] text-gray-500">
        or continue with these social profile
      </p>
      <div className="flex self-center gap-2">
        <FaGoogle size={20} className=" text-gray-500 cursor-pointer" />
        <FaGithub size={20} className=" text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Login;
