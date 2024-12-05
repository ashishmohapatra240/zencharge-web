import Container from "@/app/components/ui/Container";
import LinkedInIcon from "@heroicons/react/24/outline/LinkIcon";
import TwitterIcon from "@heroicons/react/24/outline/XMarkIcon";

const teamMembers = [
  {
    name: "Aarav Sharma",
    position: "CEO",
    description:
      "Aarav leads ZenCharge with a vision for sustainable mobility and innovative solutions.",
    image: "/images/team/aarav.png",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <div className="bg-[#F5F5F5] py-24">
      <Container>
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-[48px] font-bold leading-tight tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-xl font-light leading-[34px] tracking-tight">
              Our dedicated team is committed to revolutionizing the EV charging
              experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col gap-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[363px] h-[361px] object-cover rounded"
                />
                <div className="space-y-3">
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
                    >
                      <TwitterIcon className="w-6 h-6" />
                    </a>
                    <a 
                      href={member.socialLinks.linkedin}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <LinkedInIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
