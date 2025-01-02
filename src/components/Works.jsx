import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {styles} from "../Style";
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { p } from "framer-motion/client";

const ProjectCard=({index, name, description, tags, image, source_code_link}) =>{
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
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
          onClick={()=> window.open(
            source_code_link, "_blank"
          )}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github"
            className="w-1/2 h-1/2 object-contain" />
          </div>
          {/* If you have live url of the project just uncomment the following block of code and 
          change the github icon !! */}

          {/*
           <div
          onClick={()=> window.open(
            source_code_link, "_blank"
          )}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github"
            className="w-1/2 h-1/2 object-contain" />
          </div>
          */}

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
  Following Projects showcase my skills and experience through real-world examples my work. Bla Bla Bla shgfakhsdblk,sadbc,hbsdfywwyuibcbshsbcjiiusuhfncbnhsoalsnmzlkwsfggbta
  sshfvbsfbivhkn vv sdhdkjcsdiiddkfsndbfsdfn h uushfdjci9pndj odhffa039r33u4923ijjdcsbc vu 03hbandb 0iosddf jcanm,nxxpooaidyf vghnjdksdfucj0sdknxcm ccw9eisdfj smfxcgfyuwaiskldmznxcx9328w7ro8siudlgvb rfxkudlfhkc 84ruigjkvcc fadeIn
  skadjfhnaslkdjfcnlasdjfnc  sodfljncr9sdioflhkb ,s.dzxlijkcnlaUDzjfncslfxxjkvn alkjszdkfcn soidfncsfkjvhsd usidfjknccxk usdfjkvn s,hkjwnc asdjzfucjwa dkvzuyfciuljksandzhcbkvhjn 
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