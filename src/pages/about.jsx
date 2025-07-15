import React from 'react';
import '../assets/css/about.css';
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Our Online Compiler</h1>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide an accessible, efficient, and user-friendly online platform for developers and students to write, compile, and execute C and C++ code directly from their web browsers. We aim to simplify the learning process and facilitate rapid prototyping by removing the complexities of local environment setup.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where anyone, anywhere, can effortlessly engage with programming languages, fostering a global community of coders. We strive to be the go-to resource for quick code testing, educational purposes, and collaborative development in C and C++.
        </p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          This online compiler is a project developed by Nazmus Sakib, driven by a passion for making programming education and practice more streamlined. With a focus on performance, reliability, and an intuitive user interface, we are committed to continuous improvement and incorporating feedback to serve our users better.
        </p>
        <p>
          We believe in the power of open-source tools and accessible technology to empower individuals in their coding journey. Thank you for using our platform!
        </p>
      </section>

    </div>
  );
};

export default AboutUs;
