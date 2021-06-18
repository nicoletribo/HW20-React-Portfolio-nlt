import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFile } from "react-icons/fa";


function About() {
return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-65x65">
              <img alt="headshot" src="https://user-images.githubusercontent.com/76696641/118301923-39f8a000-b4a9-11eb-850b-c04bf7c534cb.jpeg"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                My name is Nicole Tribo, welcome to my portfolio page! I am a full-stack web developer with a background in Animal Science, with skills in HTML, CSS, and JavaScript and strengths in teamwork, learning new skills, and communication. Earned a certificate in Full Stack Web Development from the University of Texas at San Antonio Coding Boot Camp. Most recently, I worked on a team of three to develop a full-stack application that allows users to search for podcasts based on keyword or genre and save to their profile. I am passionate about learning new skills and different programming languages and applying them to various programming challenges. I enjoy approaching challenges from different angles and collaborating with others to create exciting new web applications.
              </p>
              <h5>Contact me: </h5>
              <p> <FaEnvelope /> Email: <a href="nicoletribo@yahoo.com">nicoletribo@yahoo.com</a></p>
              <p> <FaPhone /> Phone Number: 210-488-5906</p>
              <p> <FaGithub /> GitHub Profile: <a href="https://github.com/nicoletribo">github.com/nicoletribo</a></p>
              <p> <FaLinkedin /> LinkedIn Profile: <a href="https://www.linkedin.com/in/nicole-tribo-69005819a">linkedin.com/nicoletribo</a></p>
              <p> <FaFile /> Resume: <a href="https://docs.google.com/document/d/1BAG_gCORXW-QxPOZm4jSFUSVeYxQCtvhFkk8j1N77w8/edit?usp=sharing">NicoleTriboResume</a></p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
