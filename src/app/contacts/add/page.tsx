'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaUser } from 'react-icons/fa';

export default function AddContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    contactType: 'Individual',
    isActive: true,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    postalCode: '',
    country: '',
    farmNumber: '',
    taxNumber: '',
    salutation: '',
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;
  const checked =
    type === 'checkbox' && 'checked' in e.target ? e.target.checked : undefined;

  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked ?? false : value,
  });
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    router.push('/contacts');
  };

  return (
    <div className="p-6">
     
      <button
        onClick={() => router.push('/contacts')}
        className="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FaArrowLeft /> Back to Contacts
      </button>

      <div className="mt-6 mb-6">
        <h1 className="text-3xl font-bold">Contact Form</h1>
        <p className="text-gray-500 mt-1">
          Create or edit contact information for individuals and organizations.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 bg-gray-50 p-6 rounded-xl border border-gray-200"
      >
      
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-2 mb-4">
            <FaUser className="text-gray-500" />
            <h2 className="text-lg font-semibold">Basic Information</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Contact identification and type
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Type *
              </label>
              <select
                name="contactType"
                value={formData.contactType}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option>Individual</option>
                <option>Organization</option>
              </select>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              <label className="text-sm font-medium">Active</label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                First Name *
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name *
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>

     
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-2">Address Information</h2>
          <p className="text-sm text-gray-500 mb-4">Contact address details</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Street</label>
              <input
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter street name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter city"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Postal Code
              </label>
              <input
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter postal code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter country"
              />
            </div>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
          <p className="text-sm text-gray-500 mb-4">
            Other identification details
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Farm Number
              </label>
              <input
                name="farmNumber"
                value={formData.farmNumber}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter farm number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Tax Number
              </label>
              <input
                name="taxNumber"
                value={formData.taxNumber}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter tax number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Salutation
              </label>
              <input
                name="salutation"
                value={formData.salutation}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="e.g., Mr., Mrs., Dr."
              />
            </div>
          </div>
        </div>

       
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.push('/contacts')}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save Contact
          </button>
        </div>
      </form>
    </div>
  );
}
