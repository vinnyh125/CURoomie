"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { signInWithGoogle } from "@/auth";

export default function Login() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        router.push("/pages/dashboard");
      }
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen min-w-screen bg-custom-tan">
        <div className="mt-[12%] p-6 border border-black rounded-md shadow-2xl w-full max-w-sm bg-custom-dark-tan">
          <h1 className="font-bold text-custom-navy text-3xl">Sign in</h1>
          <div className="mt-4 mb-2">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full border-black rounded-sm"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="border p-2 w-full border-black rounded-sm"
            />
          </div>
          <div>
            <button className="border border-black rounded-3xl w-full py-2 bg-custom-burgandy text-white">
              Sign in
            </button>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col justify-center w-full">
              <div className="ml-1 border border-gray-400"></div>
            </div>
            <div className="px-2 py-2 text-gray-500">or</div>
            <div className="flex flex-col justify-center w-full">
              <div className="mr-1 border border-gray-400"></div>
            </div>
          </div>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="flex justify-center items-center bg-black text-white border border-black rounded-3xl w-full py-2"
            >
              <Image
                width={20}
                height={20}
                src="/img/googlelogo.png"
                alt="Google Logo"
                className="mr-2"
              />
              <h1>Sign in with Google</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
