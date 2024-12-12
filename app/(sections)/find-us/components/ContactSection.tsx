import { EnvelopeIcon as MailIcon, PhoneIcon, MapPinIcon as LocationMarkerIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-[47px] font-bold tracking-tight leading-[1.2]">
          Get in Touch
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          We&apos;d love to hear from you! Reach out for any inquiries.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <MailIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <span className="text-base md:text-lg text-gray-700">info@zencharge.in</span>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <span className="text-base md:text-lg text-gray-700">+91 123 456 7890</span>
        </div>
        <div className="flex items-center gap-4">
          <LocationMarkerIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <span className="text-base md:text-lg text-gray-700">123 Green Road, Eco City, India</span>
        </div>
      </div>

      <form className="space-y-6 pt-4">
        <div className="space-y-2">
          <label className="text-gray-700 block text-base">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-gray-700 block text-base">Email</label>
          <input
            type="email"
            placeholder="Enter your mail"
            className="w-full p-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-gray-700 block text-base">Message</label>
          <textarea
            placeholder="Type your message"
            className="w-full p-4 h-32 bg-white border border-gray-200 rounded resize-none focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 pt-2">
          <input type="checkbox" className="rounded border-gray-400" />
          <span className="text-sm text-gray-600">I accept the Terms</span>
        </div>
        <button className="px-8 py-4 bg-[#2D3E50] text-white rounded hover:bg-[#243141] transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
} 