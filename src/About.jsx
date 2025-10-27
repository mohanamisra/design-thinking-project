import "./App.css";
import Navbar from "./Navbar";
import {Route} from "react-router-dom";
import Mitra from "./Mitra.jsx";
import React from "react";
import Footer from "./Footer.jsx";

function About() {
    return (
        <div className="about-container">
            <Navbar />
            <div>
                <h1>About MIT-RA</h1>
                <h2>What is MIT-RA?</h2>
                <p>
                    MIT-RA, short for Manipal Institute of Technology Resource Assistant, is a virtual assistant designed to make student life at MIT easier, faster, and more informed.
                </p>
                <h2>Why should you care?</h2>
                <p>
                    Every student has faced moments of confusion — Where is my class being held? Did the exam schedule change? Who’s hosting that workshop everyone’s talking about? MIT-RA exists to answer all of that instantly.

                    Built as a 24/7 intelligent chatbot, MIT-RA bridges the gap between students and administrative information. It helps users find reliable answers without waiting for office hours or depending on fragmented WhatsApp messages.

                    Beyond convenience, MIT-RA reduces repetitive workloads for faculty and admin staff, ensures better information accuracy, and empowers students to focus more on learning than on logistics.

                    In short, MIT-RA is your always-awake, always-accurate campus companion — a small step toward a smarter, more connected MIT community.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default About;
