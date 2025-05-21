"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  FileText,
  BoxSelect,
  Users,
  HelpCircle,
  Settings,
} from "lucide-react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Don't render the Navbar on excluded routes
  if (["/dashboard"].includes(pathname)) return null;

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* <img className="h-8 w-auto" src="" alt="Bungoma County Logo" /> */}
              <span className="ml-2 text-xl font-semibold text-blue-800">
                E-Tender
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100 flex items-center"
              >
                <Home className="mr-1 h-5 w-5" />
                Home
              </a>

              {/* Tenders Dropdown */}
              <div className="relative">
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100 flex items-center"
                  onClick={() => toggleDropdown("tenders")}
                >
                  <FileText className="mr-1 h-5 w-5" />
                  Tenders
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "tenders" ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === "tenders" && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        View All Tenders
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Open Tenders
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        My Applications
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Awarded Tenders
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Vendors Dropdown */}
              <div className="relative">
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100 flex items-center"
                  onClick={() => toggleDropdown("vendors")}
                >
                  <BoxSelect className="mr-1 h-5 w-5" />
                  Vendors
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "vendors" ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === "vendors" && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Vendor Directory
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Registration
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Vendor Portal
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* More Dropdown */}
              <div className="relative">
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100 flex items-center"
                  onClick={() => toggleDropdown("more")}
                >
                  <Users className="mr-1 h-5 w-5" />
                  Departments
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "more" ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === "more" && (
                  <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Health Services
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        ICT
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Transport & Infrastructure
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Education
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Agriculture
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100 flex items-center"
              >
                <HelpCircle className="mr-1 h-5 w-5" />
                Help
              </a>
            </div>
          </div>

          {/* Right side - User actions */}
          <div className="hidden md:flex items-center">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 rounded-md text-sm font-medium text-blue-700 hover:bg-blue-50 mr-2">
                  Log In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Register
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-8 w-8"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 bg-blue-50"
            >
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Home
              </div>
            </a>

            {/* Mobile Accordion Menus */}
            <div className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700"
                onClick={() => toggleDropdown("m-tenders")}
              >
                <div className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Tenders
                </div>
                <ChevronDown
                  className={`h-5 w-5 ${
                    activeDropdown === "m-tenders" ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "m-tenders" && (
                <div className="px-4 py-2 bg-gray-50">
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    View All Tenders
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Open Tenders
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    My Applications
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Awarded Tenders
                  </a>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700"
                onClick={() => toggleDropdown("m-vendors")}
              >
                <div className="flex items-center">
                  <BoxSelect className="mr-2 h-5 w-5" />
                  Vendors
                </div>
                <ChevronDown
                  className={`h-5 w-5 ${
                    activeDropdown === "m-vendors" ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "m-vendors" && (
                <div className="px-4 py-2 bg-gray-50">
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Vendor Directory
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Registration
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Vendor Portal
                  </a>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700"
                onClick={() => toggleDropdown("m-departments")}
              >
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Departments
                </div>
                <ChevronDown
                  className={`h-5 w-5 ${
                    activeDropdown === "m-departments"
                      ? "transform rotate-180"
                      : ""
                  }`}
                />
              </button>

              {activeDropdown === "m-departments" && (
                <div className="px-4 py-2 bg-gray-50">
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Health Services
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    ICT
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Transport & Infrastructure
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Education
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-700">
                    Agriculture
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700"
            >
              <div className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5" />
                Help
              </div>
            </a>

            {/* Mobile auth buttons */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <SignedOut>
                  <SignInButton>
                    <button className="px-4 py-2 rounded-md text-sm font-medium text-blue-700 border border-blue-700 w-full text-center mr-2">
                      Log In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 w-full text-center">
                      Register
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "h-10 w-10"
                      }
                    }}
                  />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
