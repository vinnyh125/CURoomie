import Link from "next/link"

export default function Nav() {
  return (
    <>
      <div className="flex min-w-screen justify-between mx-[8%] my-[1%]">
        <Link
          href="/"
          className="text-2xl"
        >
          🏠CURoomie
        </Link>
        <div className="flex text-lg w-1/4 justify-between items-center">
          <Link
            href="/"
          >
            HOME
          </Link>
          <Link
            href="/pages/faq"
          >
            FAQ
          </Link>
          <Link
            href="/pages/login"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  )
}