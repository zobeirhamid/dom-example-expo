'use dom';
import '../global.css'
import '../fontawesome.css'
import { Link } from "expo-router";
import React, { useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer, useLayoutEffect, useImperativeHandle, useDebugValue } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
FontAwesome.loadFont()

export default function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <h1 className="text-4xl sm:text-5xl font-crimson-text mb-8">
            About Us
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-crimson-text mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're passionate about creating meaningful digital experiences
              that inspire and connect people. Our journey began with a simple
              idea: to make technology more accessible and human-centered.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-crimson-text mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To empower creators and businesses with intuitive tools that bring
              their visions to life. We believe in simplicity, authenticity, and
              the power of good design to transform ideas into reality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-crimson-text mb-4">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-crimson-text text-xl mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Pushing boundaries and exploring new possibilities
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-crimson-text text-xl mb-2">Simplicity</h3>
                <p className="text-gray-600">
                  Making complex things beautifully simple
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}