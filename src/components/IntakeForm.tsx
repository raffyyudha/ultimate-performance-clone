"use client";

import { useState } from "react";

interface IntakeFormProps {
  serviceTitle: string;
  locationName: string;
  country: "Singapore" | "Malaysia";
}

export default function IntakeForm({
  serviceTitle,
  locationName,
  country,
}: IntakeFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [locationType, setLocationType] = useState("Condo Gym");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi Quatre Fitness Group, I would like to enquire about your services:
- Service: ${serviceTitle}
- Location: ${locationName} (${country})
- Name: ${firstName} ${lastName}
- Email: ${email}
- WhatsApp/Contact: ${phone}
- Preferred Training Venue: ${locationType}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6581379850?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
    >
      <div className="text-center mb-6">
        <h3 className="font-sans text-xl font-bold text-black">
          Book Your Consultation
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Enquire about {serviceTitle} services in {locationName}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-gray-50/50"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-gray-50/50"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="john.doe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-gray-50/50"
        />
      </div>

      <div>
        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
          WhatsApp / Contact Number
        </label>
        <input
          type="tel"
          placeholder="+65 8137 9850"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-gray-50/50"
        />
      </div>

      <div>
        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
          Training Venue Preference
        </label>
        <select
          value={locationType}
          onChange={(e) => setLocationType(e.target.value)}
          className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-white"
        >
          <option value="Condo Gym">Condo Gym (Singapore)</option>
          <option value="Private Residence">Private Residence / Home</option>
          <option value="Office Gym">Office Gym</option>
          <option value="Quatre Gym @ Kingston 16 Hotel">
            Quatre Gym @ Kingston 16 Hotel (Johor Bahru)
          </option>
          <option value="Outdoor / Park">Outdoor / Park</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-maroon text-white hover:bg-black font-extrabold text-xs tracking-widest uppercase py-4 rounded-xl transition-colors duration-300 shadow-sm"
      >
        Submit Enquiry via WhatsApp
      </button>

      <p className="text-[10px] text-gray-400 text-center">
        Your enquiry will open WhatsApp to message our team instantly.
      </p>
    </form>
  );
}
