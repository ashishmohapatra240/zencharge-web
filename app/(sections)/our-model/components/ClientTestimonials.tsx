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
    <section className="py-12 md:py-[90px]">
      <Container>
        <h2 className="text-center text-2xl md:text-[36px] font-bold font-montserrat mb-6 md:mb-[35px] tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-center text-base md:text-[18px] font-montserrat mb-12 md:mb-[60px] tracking-tight">
          Discover how ZenCharge is transforming the EV experience with our innovative models and exceptional service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[30px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border p-6 md:p-[20px]">
              <div className="text-xl md:text-[24px] mb-4 md:mb-[10px]">★★★★★</div>
              <p className="text-sm md:text-[16px] mb-6 md:mb-[20px] tracking-tight">{testimonial.feedback}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-[40px] md:h-[40px] bg-black rounded-full flex items-center justify-center text-white text-base md:text-[20px] mr-3 md:mr-[10px]">
                  O
                </div>
                <div>
                  <div className="font-bold tracking-tight">{testimonial.name}</div>
                  <div className="text-xs md:text-[14px] tracking-tight">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 