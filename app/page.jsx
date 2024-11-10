import Link from "next/link";
import Image from "next/image";
import Testimonial from "./components/testimonial";

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
          <Link
            href="/pages/faq"
            className="text-custom-burgandy text-center block"
          >
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
        <div className="flex flex-col w-[40%] mb-20">
          <h1 className="font-staatliches text-4xl text-custom-red mb-10">
            A COMMUNITY LIKE NO OTHER
          </h1>
          <h2 className="text-custom-navy text-xl mb-10">
            Join an incredible community of students that are just like you!
          </h2>
          <div className="flex flex-row gap-x-[5%]">
            <div>
              <h1 className="text-custom-red text-3xl">2</h1>
              <h2 className="text-custom-navy text-xl">Happy Users</h2>
            </div>
            <div>
              <h1 className="text-custom-red text-3xl">0</h1>
              <h2 className="text-custom-navy text-xl">Matches Daily</h2>
            </div>
            <div>
              <h1 className="text-custom-red text-3xl">1</h1>
              <h2 className="text-custom-navy text-xl">Matches Made</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[80%] mb-20">
          <Testimonial />
        </div>
        <div className="flex flex-col w-[70%] mb-20">
          <h1 className="text-custom-red text-4xl font-staatliches mb-10">
            GOT QUESTIONS? WE&apos;VE GOT ANSWERS!
          </h1>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col flex-1">
              <h1 className="text-custom-red text-2xl mb-3">
                What makes CURoomie different?
              </h1>
              <h2 className="text-custom-navy text-xl">
                CURoomie is tailor-made for Cornell students by Cornell
                students. Our tailored process of matching and widespread
                listings make us the best in the business.
              </h2>
            </div>
            <div className="flex flex-col flex-1">
              <h1 className="text-custom-red text-2xl mb-3">
                Can I choose on or off-campus?
              </h1>
              <h2 className="text-custom-navy text-xl">
                Yes, you have absolute control over your preferences, including
                your preferred location.
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[70%] mb-16">
          <h1 className="text-custom-navy text-4xl font-staatliches mb-10">
            READY TO FIND THE PERFECT ROOMMATE? YOU&apos;RE JUST A FEW CLICKS
            AWAY!
          </h1>
          <div className="flex flex-row gap-4">
            <Link href="/">
              <div className="bg-custom-navy text-white p-4 rounded-2xl">
                Join Now
              </div>
            </Link>
            <Link href="/pages/faq">
              <div className="bg-black text-white p-4 rounded-2xl">
                Find Out More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
