"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/providers/AuthProvider";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    groupName: "",
    companyName: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const success = register(
      formData.email,
      formData.password,
      formData.groupName,
      formData.companyName,
      formData.firstName,
      formData.lastName
    );
    if (success) {
      router.push("/login"); // ✅ Redirect to login
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Left Form Section */}
      <div className="flex flex-col justify-center w-full max-w-[520px] px-10">
        <h1 className="text-3xl font-bold mb-2">Create a new account</h1>
        <p className="text-gray-500 mb-6">
          Manage land lease and farm operations with ease
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-1/2 border border-gray-300 rounded-lg p-3"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg p-3"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <input
            name="groupName"
            placeholder="Group Name"
            value={formData.groupName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <input
            name="companyName"
            placeholder="Company / Farm Name"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-[#009146] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          By signing up, you agree to our{" "}
          <span className="text-green-600 cursor-pointer">Terms of Service</span> &{" "}
          <span className="text-green-600 cursor-pointer">Privacy Policy</span>
        </p>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <span
            className="text-green-700 font-medium cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Log in
          </span>
        </p>
      </div>

      {/* Right Illustration Section */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-white">
        <img
          src="/signup-vector.svg"
          alt="Farm illustration"
          className="max-w-lg"
        />
      </div>
    </div>
  );
}
