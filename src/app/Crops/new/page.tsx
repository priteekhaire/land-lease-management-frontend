"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddCropPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    scientific: "",
    category: "",
    description: "",
    area: "",
    season: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Crop Added Successfully!");
    router.push("/crops");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
    
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Add New Crop</h1>
        <button
          onClick={() => router.push("/Crops")}
          className="mt-4 sm:mt-0 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-sm"
        >
          ← Back to Crops
        </button>
      </div>

      <p className="text-gray-500 mb-8">
        Fill out the form below to add a new crop to your management system.
      </p>

   
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 max-w-3xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-6">
         
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Crop Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Wheat"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Crop Code
            </label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="e.g., WHT"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Scientific Name
            </label>
            <input
              type="text"
              name="scientific"
              value={formData.scientific}
              onChange={handleChange}
              placeholder="e.g., Triticum aestivum"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g., Cereal"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

        
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Cultivation Area (ha)
            </label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="e.g., 50"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

      
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Season
            </label>
            <input
              type="text"
              name="season"
              value={formData.season}
              onChange={handleChange}
              placeholder="e.g., Spring"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

       
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly describe the crop..."
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <div className="flex justify-end mt-8 gap-4">
          <button
            type="button"
            onClick={() => router.push("/crops")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg shadow"
          >
            Save Crop
          </button>
        </div>
      </form>
    </div>
  );
}
