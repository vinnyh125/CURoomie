import Link from "next/link"

export default function Nav() {
  return (
    <>
      <div className="flex min-w-screen justify-between">
        <Link
          href="/"
        >
          CURoomie
        </Link>
        <div className="flex">
          <Link
            href="/"
          >
            Home
          </Link>
          <Link
            href="/pages/faq"
          >
            FAQ
          </Link>
          <Link
            href="/pages/login"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  )
}