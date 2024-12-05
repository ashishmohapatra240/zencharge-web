import { EnvelopeIcon as MailIcon, PhoneIcon, MapPinIcon as LocationMarkerIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[47px] font-bold mb-5">Get in Touch</h2>
        <p className="text-lg mb-10">
          We&apos;d love to hear from you! Reach out for any inquiries.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <MailIcon className="w-5 h-5 text-gray-600" />
          <span className="text-lg">info@zencharge.in</span>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="w-5 h-5 text-gray-600" />
          <span className="text-lg">+91 123 456 7890</span>
        </div>
        <div className="flex items-center gap-4">
          <LocationMarkerIcon className="w-5 h-5 text-gray-600" />
          <span className="text-lg">123 Green Road, Eco City, India</span>
        </div>
      </div>

      <form className="space-y-8">
        <div className="space-y-2">
          <label className="text-[#2D3E50]">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 bg-white shadow-sm rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[#2D3E50]">Email</label>
          <input
            type="email"
            placeholder="Enter your mail"
            className="w-full p-3 bg-white shadow-sm rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[#2D3E50]">Message</label>
          <textarea
            placeholder="Type your message"
            className="w-full p-3 h-32 bg-white shadow-sm rounded resize-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="rounded border-gray-400" />
          <span className="text-sm text-[#2D3E50]">I accept the Terms</span>
        </div>
        <button className="px-8 py-3 bg-[#2D3E50] text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
} 