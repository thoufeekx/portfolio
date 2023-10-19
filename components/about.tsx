"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with an Engineering degree in{" "}
        <span className="font-bold">Electronics and Communication</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-bold">Full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect.  After learning full-stack development and building apps 
        I became interested in <span className="font-medium"> Machine Learning</span> and delved into
        the world of <span className="font-bold">Deep Learning. { }</span> 
        I <span>love</span> the
        feeling of finally figuring out a solution to a problem.
        I am currently seeking a position as a { }
        <span className="font-bold">Data Scientist,</span> leveraging my Full-stack background. 
        
        
         My core skills are
        {" "}
        <span className="font-bold">
         Python, Pytorch, Tensorflow, Scikit Learn, Javascript, React, Next.js, Node.js, and MongoDB
        </span>
       
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">French</span> language .
      </p>
    </motion.section>
  );
}
