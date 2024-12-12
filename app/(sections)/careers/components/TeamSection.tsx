import Container from "@/app/components/ui/Container";
// import Image from "next/image";

// const teamMembers = [
//   {
//     name: "Aarav Sharma",
//     position: "CEO",
//     description:
//       "Aarav leads ZenCharge with a vision for sustainable mobility and innovative solutions.",
//     image: "/images/team/aarav.png",
//     socialLinks: {
//       twitter: "#",
//       linkedin: "#",
//     },
//   },
//   {
//     name: "Aarav Sharma",
//     position: "CEO",
//     description:
//       "Aarav leads ZenCharge with a vision for sustainable mobility and innovative solutions.",
//     image: "/images/team/aarav.png",
//     socialLinks: {
//       twitter: "#",
//       linkedin: "#",
//     },
//   },
//   {
//     name: "Aarav Sharma",
//     position: "CEO",
//     description:
//       "Aarav leads ZenCharge with a vision for sustainable mobility and innovative solutions.",
//     image: "/images/team/aarav.png",
//     socialLinks: {
//       twitter: "#",
//       linkedin: "#",
//     },
//   },
// ];

// const LinkedInIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//   </svg>
// );

// const XIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );

export default function TeamSection() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="space-y-12 md:space-y-16">
          {/* <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed tracking-tight">
              Our dedicated team is committed to revolutionizing the EV charging
              experience.
            </p>
          </div> */}

          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col gap-4 md:gap-6">
                <div className="relative w-full h-[300px] md:h-[361px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-3xl font-bold leading-10 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-lg font-light tracking-tight">
                    {member.position}
                  </p>
                  <p className="text-lg font-light leading-7 tracking-tight">
                    {member.description}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={member.socialLinks.twitter}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <XIcon />
                    </a>
                    <a
                      href={member.socialLinks.linkedin}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </Container>
    </div>
  );
}
