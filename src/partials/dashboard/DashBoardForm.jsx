import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
const formDataValue = {
  name: "",
  number: "",
  occupation: "",
  completionDate: "",
  projectDetails: "",
};
function DashBoardForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formDataValue);
  const [error, setError] = useState("");

  //alert
  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.name && formData.number && formData.occupation;
      case 2:
        return formData.completionDate;
      case 3:
        return formData.projectDetails;
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (isStepComplete()) {
      setStep(step + 1);
      setError(""); // Reset error if any
    } else {
      setError("Please fill out all required fields.");
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const redoStep = () => {
    setFormData(formDataValue);
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isStepComplete()) {
      console.log(formData);
      // You can submit the form data here
      // Reset form data and step if needed
      setError(""); // Reset error if any
    } else {
      setError("Please fill out all required fields.");
    }
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 class="font-semibold text-slate-800 dark:text-slate-100">
          Project Planner
        </h2>
      </header>

      {error && (
        <div
          className="mx-12 mt-4 flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Error:</span> {error}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="">
        {step === 1 && (
          <motion.div
            key={step} // Add this line
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="px-7 py-5"
          >
            <div className="text-base font-light text-center  ">Step 1/3</div>
            <div className="mt-4 w-full h-2 bg-gray-200">
              <div className="h-full bg-green-600 rounded-3xl w-1/3"></div>
            </div>
            <div className="mt-12 text-2xl text-center">
              Let’s start at the very beginning
            </div>

            <div>
              {/* Name input field */}
              <input
                type="text"
                placeholder="Name"
                name="name" // This should match your formData property
                className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                value={formData.name} // This correctly points to formData.name
                onChange={handleChange}
              />
            </div>

            {/* Number input field */}
            <div>
              <input
                type="text"
                placeholder="Number"
                name="number" // This should match your formData property
                className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                value={formData.number} // This should point to formData.number
                onChange={handleChange}
              />
            </div>

            {/* Occupation input field */}
            <div>
              <input
                type="text"
                placeholder="Occupation"
                name="occupation" // This should match your formData property
                className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                value={formData.occupation} // This should point to formData.occupation
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end mt-12">
              <button
                type="button"
                onClick={nextStep}
                className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key={step} // Add this line
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="px-7 py-5"
          >
            <div className="text-base font-light text-center  ">Step 2/3</div>
            <div className="mt-4 w-full h-2 bg-gray-200">
              <div className="h-full bg-green-600 rounded-3xl w-2/3"></div>
            </div>
            <div className="mt-12 text-2xl text-center">
              Let’s talk budget & timelines
            </div>
            <div>
              <div className="mt-12 flex items-center justify-center">
                <label className="text-base text-center">
                  I want to launch <br />
                  my project on
                </label>
                <input
                  type="date"
                  id="completionDate"
                  name="completionDate"
                  value={formData.completionDate}
                  onChange={handleChange}
                  className="rounded-xl px-2 py-2  focus:outline-none"
                  style={{
                    width: "300px",
                    marginLeft: "10px",
                  }} // Adjust the margin as needed
                />
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <button
                type="button"
                onClick={prevStep}
                className=" mr-4 text-white bg-yellow-500 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className=" text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-blue-900"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key={step} // Add this line
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:w-3/5 mx-auto py-12"
          >
            <div className="text-base font-light text-center  ">Step 3/3</div>
            <div className="mt-4 w-full h-2 bg-gray-200">
              <div className="h-full bg-green-600 rounded-3xl w-3/3"></div>
            </div>
            <div className="mt-12 text-2xl  text-center">
              Give us the details!
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Please provide a summary of your project"
                name="projectDetails" // This should match your formData property
                className="mt-4 border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none "
                rows={8} // Specify the number of rows here
                value={formData.projectDetails} // This should point to formData.number
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center mt-12">
              <button
                type="button"
                onClick={prevStep}
                className=" mr-4mr-4 text-white bg-yellow-500 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className=" text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-blue-90"
              >
                Submit
              </button>
            </div>
          </motion.div>
        )}
        {step === 4 && (
          <motion.div
            key={step} // Add this line
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:w-3/5 mx-auto py-12"
          >
            <h1 className="font-bold w-full text-2xl text-center">
              Thank you {formData.name}
            </h1>
            <div className="mt-12 text-base  text-center">
              Your submission has been received! We will aim to get back to you
              within 3 working days.
            </div>
            <div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={redoStep}
                  className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-blue-90"
                >
                  Redo the planner
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}

export default DashBoardForm;
