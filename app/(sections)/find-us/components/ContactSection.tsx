import { EnvelopeIcon as MailIcon, PhoneIcon, MapPinIcon as LocationMarkerIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <div className="space-y-8 md:space-y-10 px-4 md:px-0 flex flex-col md:flex-row justify-between mx-auto md:mx-36 my-6 md:my-10">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight leading-tight">
          Get in Touch
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          We&apos;d love to hear from you! Reach out for any inquiries.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MailIcon className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <span className="text-base md:text-lg text-gray-700">info@zencharge.in</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <span className="text-base md:text-lg text-gray-700">+91 123 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <LocationMarkerIcon className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <span className="text-base md:text-lg text-gray-700">123 Green Road, Eco City, India</span>
          </div>
        </div>
      </div>

      <form className="flex-1 space-y-4 pt-6">
        <div className="space-y-3">
          <label className="text-gray-700 block text-base">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
        </div>
        <div className="space-y-3">
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
            className="w-full p-4 h-36 bg-white border border-gray-200 rounded resize-none focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 pt-3">
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