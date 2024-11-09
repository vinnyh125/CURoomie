import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-w-screen min-h-screen items-center justify-center bg-custom-red">
        <div className="flex text-center m-20">
          <h1 className="text-white text-8xl font-staatliches">
            FIND YOUR PERFECT CORNELL ROOMMATE
          </h1>
        </div>
        <div className="flex w-[80%] justify-center gap-2">
          <Link href="/" className="text-custom-tan text-center block">
            <div className="bg-custom-burgandy px-4 py-2 rounded-2xl w-32">
              Get Started
            </div>
          </Link>
          <Link href="/" className="text-custom-burgandy text-center block">
            <div className="bg-custom-tan px-4 py-2 rounded-2xl w-32">
              Learn More
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col min-w-screen items-center h-auto bg-custom-tan">
        <div className="flex flex-row my-20 gap-x-[10%]">
          <div className="flex flex-col flex-1 justify-center max-w-[300px]">
            <h1 className="text-custom-navy font-staatliches text-3xl">
              PERFECT MATCH, PERFECT ROOMMATE
            </h1>
            <h2 className="text-custom-navy">
              Our intuitive matchmaking system helps you find the roommate who
              complements your lifestyle, habits and preferences.
            </h2>
          </div>
          <div className="flex flex-1">
            <Image
              src="/img/roommates.jpg"
              width={300}
              height={300}
              quality={100}
              alt="Picture of creator"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-row mb-20 gap-x-[10%]">
          <div className="flex flex-1">
            <Image
              src="/img/couchfriends.jpg"
              width={300}
              height={300}
              quality={100}
              alt="Picture of creator"
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center max-w-[300px]">
            <h1 className="text-custom-navy font-staatliches text-3xl">
              EXPANSIVE LISTINGS, TAILORED OPTIONS
            </h1>
            <h2 className="text-custom-navy">
              Our intuitive matchmaking system helps you find the roommate who
              complements your lifestyle, habits and preferences.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
