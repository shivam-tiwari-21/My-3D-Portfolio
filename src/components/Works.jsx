import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {styles} from "../Style";
import {github} from "../assets";
import {link} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard=({index, name, description, tags, image, source_code_link, project_link}) =>{
  return (
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl
      sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
        <img src={image} alt={name}
        className="w-full h-full object-cover rounded-2xl"
        />
        <div className="gap-2 absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
          onClick={()=> window.open(
            source_code_link, "_blank"
          )}
          className=" black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github"
            className="w-1/2 h-1/2 object-contain" />
          </div>
          {/* If you have live url of the project just uncomment the following block of code and 
          change the github icon !! */}

           <div
          onClick={()=> window.open(
            project_link, "_blank"
          )}
          className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={link} alt="link"
            className=" object-contain" />
          </div>


        </div>
        </div>
        <div className="mt-5">
          <h2 className="text-white font-bold text-[24px]">{name}</h2>
          <p className="text-secondary text-14px">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={
              `text-[14px] ${tag.color}`
            } > #{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>My Works</p>
      <h1 className={styles.sectionHeadText}>Projects.</h1>
    </motion.div>
<div className='w-full flex '>
<motion.p
variants={fadeIn("","",0.1,1)}
className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
>
  Here are some Web-Applications and Websites that I've developed to show my skills in both Frontend and Backend Technologies. 
  Each project card provides a quick glance at the technology stack used, key features, and a link to explore the live demo and source code.
</motion.p>
</div>

    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index)=>(
        <ProjectCard
        key ={`project-${index}`}
        index={index}
        {...project}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"work");
