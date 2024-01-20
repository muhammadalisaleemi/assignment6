"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`container mx-auto px-4 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
      

      <div className="hero min-s-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <img src="/man.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-black">Muhammad Ali</h1>
      <p className="py-6 text-black">I am a website developer. I have 3 years of experience in this field.</p>
      
    </div>
  </div>
</div>

      {/* About Me Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4">Hello! I'm Muhammad Ali, a passionate website developer. With over 8 years of experience in the field, I specialize in creating interactive, responsive, and user-friendly websites using the latest technologies.
What sets me apart is my ability to understand user needs and translate them into high-quality software solutions. I believe that a website is not just about code, it's also about providing a seamless user experience.</p>
      </section>

      {/* Contact Form */}
      <section className="py-10">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <form className="mt-4 space-y-4">
          <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Your Name" />
          <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Your Email" />
          <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message"></textarea>
          <button className="w-full p-2 bg-blue-500 text-white rounded" type="submit">Send</button>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="flex justify-center space-x-4 py-10">
        <a className="text-blue-500" href="your_facebook_link">Facebook</a>
        <a className="text-blue-500" href="your_twitter_link">Twitter</a>
        <a className="text-blue-500" href="your_linkedin_link">LinkedIn</a>
        <a className="text-blue-500" href="your_github_link">GitHub</a>
      </section>

      <footer className="py-10 text-center">
        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </footer>
    </div>
  );
}
