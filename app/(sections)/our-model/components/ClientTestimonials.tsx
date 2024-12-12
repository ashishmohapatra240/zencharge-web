import Container from "@/app/components/ui/Container";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Frequent Traveler",
    feedback: "ZenCharge's FeVL stations are a game changer! I can recharge my EV while enjoying a delicious meal. It's the perfect pit stop.",
  },
  {
    name: "Anita Sharma",
    title: "Eco-Conscious Diner",
    feedback: "Evaraa offers a fantastic dining experience. I love that I can charge my car and enjoy a gourmet meal at the same time!",
  },
  {
    name: "Vikram Singh",
    title: "Business Executive",
    feedback: "The convenience of charging my EV at Zencharge locations has made my travels so much easier. Highly recommend!",
  },
  {
    name: "Priya Desai",
    title: "Sustainable Living Advocate",
    feedback: "Sustainability. Their services make it easy to support eco-friendly practices.",
  },
  {
    name: "Ravi Mehta",
    title: "Tech Enthusiast",
    feedback: "Brilliant! ZenCharge is leading the way in EV infrastructure.",
  },
  {
    name: "Sita Rani",
    title: "Urban Professional",
    feedback: "Meeting. Plus, I can charge my car while I work. It's a win-win!",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-12 lg:py-24">
      <Container>
        <h2 className="text-2xl lg:text-[36px] font-bold font-montserrat mb-4 lg:mb-6 tracking-tight text-center">
          What Our Clients Say
        </h2>
        <p className="text-base lg:text-lg font-montserrat mb-12 lg:mb-16 tracking-tight text-center max-w-3xl mx-auto">
          Discover how ZenCharge is transforming the EV experience with our innovative
          models and exceptional service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-200 p-6 lg:p-8">
              <div className="text-xl lg:text-2xl mb-4 text-yellow-400">★★★★★</div>
              <p className="text-sm lg:text-base mb-6 tracking-tight min-h-[60px]">
                {testimonial.feedback}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-base mr-3">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold tracking-tight text-sm lg:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs lg:text-sm tracking-tight text-gray-600">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 