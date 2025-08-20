import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "/components/ui/button"; // Adjust path as per your setup

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full border-4 border-red-600 bg-red-600" />
          <span className="text-lg font-semibold">Priority Donor Club</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-red-600">Home</a>
          <a href="#" className="hover:text-red-600">Donate</a>
          <a href="#" className="hover:text-red-600">Request</a>
          <a href="#" className="hover:text-red-600">Track</a>
          <a href="#" className="hover:text-red-600">Rewards</a>
        </nav>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          <ArrowRight className="mr-2 h-4 w-4" /> Login
        </Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Donate Blood, <span className="text-red-600">Save Lives</span>
          </h1>
          <p className="text-gray-600 text-base">
            Join Priority Donor Club and become part of a community that saves lives while earning rewards and special benefits.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md">
              Donate Blood
            </Button>
            <Button variant="outline" className="px-6 py-2 rounded-md">
              Request Blood
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:ml-12 w-full max-w-md bg-gray-100 h-64 rounded-xl flex items-center justify-center shadow">
          {/* Placeholder for loading spinner or image */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-300"></div>
        </div>
      </section>
    </div>
  );
}
