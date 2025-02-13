import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../Style";
import { services } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";  // Ensure slideIn is imported
import { SectionWrapper } from '../hoc';
import { photo } from "../assets";

const ServiceCard = React.memo(({ index, title, icon }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
});

const About = () => {
  return (
    <>
      {/* Overview Section */}
      <motion.div variants={textVariant()} className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <p className={styles.sectionSubText}>Introduction</p>
          <h1 className={styles.sectionHeadText}>Overview</h1>
          <motion.p
            variants={slideIn("right", "tween", 0.2, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Hi! I'm Shivam Tiwari, a Full-Stack Developer with a strong command of the MERN Stack (MongoDB, Express.js, React.js, and Node.js). 
            I develop modern, responsive, and user-friendly web applications from scratch using the MERN stack. I also have good knowledge 
            of creating CMS-based websites using WordPress. I keep evolving my skills and learning new technologies. When I’m not coding, you’ll 
            find me exploring 3D design concepts, learning new technologies, or brainstorming ways to elevate my craft.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-auto">
          <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="w-full max-w-sm mx-auto lg:mx-0">
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="w-full violet-gradient p-[2px] rounded-3xl shadow-card"
            >
              <div className="bg-tertiary rounded-3xl p-6 flex justify-center items-center">
                <img
                  src={photo}
                  alt="Portrait of Shivam Tiwari, a Full-Stack Developer"
                  className="w-full h-80 rounded-3xl object-cover"
                />
              </div>
            </motion.div>
          </Tilt>
        </div>
      </motion.div>

      {/* Service Cards Section */}
      <div className="gap-10 mt-20 flex flex-wrap justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
