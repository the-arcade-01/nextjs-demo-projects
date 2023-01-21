import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

const Edit = ({session}) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { data: session } = useSession();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {};
    if (name.length > 0) data = { ...data, name };
    if (bio.length > 0) data = { ...data, bio };
    if (phone.length > 0) {
      const phoneInt = parseInt(phone);
      data = { ...data, phone: phoneInt };
    }
    if (email.length > 0) data = { ...data, email };
    console.log(session);
    fetch(`/api/user/${session?.user.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setName("");
    setBio("");
    setPhone("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <Link href="/" className="self-start mx-80">
        <div className="text-blue-400 flex gap-2 items-center ">
          <SlArrowLeft /> Back
        </div>
      </Link>
      <div className="w-[800px] h-[615px] border-2 border-gray-100 my-4 rounded-xl shadow-md py-6 px-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <h1 className="text-[18px]">Change Info</h1>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg"
              type="submit"
            >
              Save
            </button>
          </div>
          <div className="flex flex-col items-start gap-2 w-[400px]">
            <p className="text-gray-600 font-medium">Name</p>
            <input
              type="text"
              className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none w-full"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-[400px]">
            <p className="text-gray-600 font-medium">Bio</p>
            <textarea
              className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none w-full resize-none"
              placeholder="Enter your bio..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-[400px]">
            <p className="text-gray-600 font-medium">Phone</p>
            <input
              type="text"
              className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none w-full"
              placeholder="Enter your phone..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-[400px]">
            <p className="text-gray-600 font-medium">Email</p>
            <input
              type="email"
              className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none w-full"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-[400px]">
            <p className="text-gray-600 font-medium">Password</p>
            <input
              type="password"
              className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none w-full"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/Login",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
