import React, { useState } from "react";
import { Mail, Phone, MapPin, Lock, Camera } from "lucide-react";

interface MyAccountPageProps {
  userName: string;
  userEmail: string;
}

export default function MyAccountPage({
  userName,
  userEmail,
}: MyAccountPageProps) {
  const [formData, setFormData] = useState({
    name: userName,
    email: userEmail,
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Apartment 4B, New York, NY 10001",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setIsEditing(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Account</h1>
        <p className="text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-[#916486] to-[#B37ABA] rounded-full flex items-center justify-center text-white font-bold text-3xl">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg">
                  <Camera size={16} />
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {formData.name}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{formData.email}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Active Account
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Member since</span>
                  <span className="font-medium text-gray-900">jan 2025</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Total Orders</span>
                  <span className="font-medium text-gray-900">142</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Total Spent</span>
                  <span className="font-medium text-gray-900">$12,450</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#916486] focus:border-transparent transition-all ${
                      isEditing && "bg-gray-50 "
                    }`}
                    readOnly={isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      Email Address
                    </div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#916486] focus:border-transparent transition-all ${
                      !isEditing && "bg-gray-50 cursor-not-allowed"
                    }`}
                    readOnly={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      Phone Number
                    </div>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#916486] focus:border-transparent transition-all ${
                      !isEditing && "bg-gray-50 "
                    }`}
                    readOnly={isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      Address
                    </div>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#916486] focus:border-transparent transition-all resize-none ${
                      !isEditing && "bg-gray-50 "
                    }`}
                    rows={3}
                    readOnly={isEditing}
                  />
                </div>
                <div className="flex gap-4">
                  {!isEditing ? (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="w-full bg-[#916486] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#7d5673] transition-colors"
                    >
                      Edit Information
                    </button>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
                {submitted && (
                  <div className="text-green-600 text-center mt-4 font-medium">
                    ✅ Information updated successfully!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
