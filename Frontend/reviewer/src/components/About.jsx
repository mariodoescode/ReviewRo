import React from 'react';
import teamlogo from './teamlogo.png'

export default function About() {
  return (
      <div className="col-span-4 sm:col-span-9 flex justify-center items-center">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            We are the Bug Repellers, a dynamic duo of junior web developers who have recently embarked on an exciting journey into the world of web development.
          </p>
          <p className="text-gray-700">
            With our passion for coding and a shared love for all things tech, we have successfully completed our very first project - a comprehensive website dedicated to reviews for all types of items.
          </p>
          <p className="text-gray-700">
            At Bug Repellers, we believe in the power of user-generated content and the importance of informed decision-making. Our website serves as a one-stop hub for users to discover authentic reviews, ratings, and insights about various products and services.
          </p>
          <div className="flex justify-center mt-6">
            <img className="object-contain h-96 w-96" src={teamlogo} alt="Logo" />
          </div>
        </div>
      </div>
  );
}
