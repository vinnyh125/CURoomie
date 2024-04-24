import Link from "next/link"

export default function Login() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex-col justify-center">
          <div className="border-black border-2 text-center">
            Login
          </div>
          <Link
            href="/create"
            className="underline text-blue-600 text-sm"
          >
            Create
          </Link>
        </div>
      </div>
    </>
  )
}