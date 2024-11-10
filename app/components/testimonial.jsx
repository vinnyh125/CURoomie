import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Vinny",
      quote:
        "CURoomie has made my housing search so much easier! I found my perfect roommate within a week.",
      image: "/img/face.png",
    },
    {
      name: "Vinny",
      quote:
        "Awesome platform! It’s accessible, intuitive, and gets the job done.",
      image: "/img/face.png",
    },
    {
      name: "Vinny",
      quote:
        "I found a great off-campus apartment and the best roommate through CURoomie. I definitely recommend it.",
      image: "/img/face.png",
    },
  ];

  return (
    <div className="flex space-x-4">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-custom-dark-tan shadow-lg rounded-lg p-6 text-center max-w-xs flex flex-col items-center"
        >
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} photo`}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <p className="text-custom-burgandy italic mb-4">{`"${testimonial.quote}"`}</p>
          <h3 className="text-lg font-semibold text-custom-burgandy">
            {testimonial.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
