// Contact.tsx
import React, { useState } from "react";
import HowItWorks from "../components/howitworks";

const topics = [
  "Request a design consultation",
  "Furniture & decor advice",
  "Custom interior projects",
  "Home renovation ideas",
  "Material & color suggestions",
  "Collaborations & partnerships",
  "General questions",
];

const Contact: React.FC = () => {
  const [details, setDetails] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      selectedTopic,
      details,
      selectedFileName,
    });
    alert("Your message has been sent!");
    setDetails("");
    setSelectedFileName("");
  };

  return (
    <>
      <HowItWorks />
      <div className="min-h-screen mt-8 flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white mt-8 w-full max-w-xl rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            We're here to help. Select a topic and tell us more.
          </p>

          {/* Topic Selector */}
          <div className="mb-6">
            <label className="block font-semibold text-gray-700 mb-2">
              Topic
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            >
              {topics.map((topic, idx) => (
                <option key={idx} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Details
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                placeholder="Add any details that can help us assist you."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Attach file (optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <span className="text-gray-500">
                  {selectedFileName || "Click or drag a file to upload"}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
