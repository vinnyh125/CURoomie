import Link from "next/link"

export default function Login() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col items-center">
          <div className="border-black border-2 text-center w-full max-w-screen-md">
            Login
          </div>
          <Link
            href="/pages/create"
            className="underline text-blue-600 text-sm"
          >
            Create
          </Link>
        </div>
      </div>
    </>
  )
}