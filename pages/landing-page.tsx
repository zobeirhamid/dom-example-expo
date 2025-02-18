'use dom';
import '../global.css'
import '../fontawesome.css'
import { Link } from "expo-router";
import React, { useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer, useLayoutEffect, useImperativeHandle, useDebugValue } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
FontAwesome.loadFont()

export default function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold font-inter">Logo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="font-inter text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-inter text-gray-600 hover:text-gray-900"
              >
                About
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
              <Link href="/" className="block px-3 py-2 font-inter text-gray-600">
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 font-inter text-gray-600"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-inter mb-6 opacity-0 animate-fadeIn">
              Welcome to the Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-inter mb-8 max-w-2xl mx-auto opacity-0 animate-fadeInDelay">
              Experience innovation at its finest. We're building tomorrow's
              solutions, today.
            </p>
            <Link
              href="/about"
              className="inline-block bg-black text-white font-inter px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 opacity-0 animate-fadeInDelay2"
            >
              Learn More
            </Link>
          </div>

          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
          </div>
        </div>
      </main>

      <style jsx="true" global="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeInDelay {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
        }

        .animate-fadeInDelay2 {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
        }
      `}</style>
    </div>
  );
}