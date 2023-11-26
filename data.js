import {FaNodeJs, FaReact} from "react-icons/fa"
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block"
const data = {
    name: "Bar Cohen",
    title: "Full Stack Developer",
    social: {
        github: "https://github.com/BarcDevs",
        linkedin: "https://www.linkedin.com/in/barcohendev/",
        email: "barcprodevelopments@gmail.com"
    },
    about: {
        title: "About me",
        description:
            "Greetings! I'm Bar, a Fullstack Developer on a mission to turn digital ideas into reality through the art of coding. Proficient in both front-end and back-end, I thrive on transforming challenges into opportunities for growth. As a perpetual learner, I stay ahead in the ever-evolving tech world. Collaboration and effective communication are my strengths. Explore my portfolio, and let's create something extraordinary together in the dynamic realm of web development!"
    },
    skills: [
        {
            skillName: "React",
            skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON}/>
        },
        {
            skillName: "NodeJS",
            skillIcon: <FaNodeJs className={BOOTSTRAP_FOR_SKILL_ICON}/>
        },
        {
            skillName: "NextJS",
            skillIcon: <TbBrandNextjs className={BOOTSTRAP_FOR_SKILL_ICON}/>
        },
        {
            skillName: "MongoDB",
            skillIcon: <SiMongodb className={BOOTSTRAP_FOR_SKILL_ICON}/>
        }
    ],
    projects: [
        {
            title: "Promptopia",
            description: "A website for sharing useful AI prompts, built using React (NextJS), TailwindCSS and MongoDB",
            tags: [
                "nextjs",
                "react",
                "tailwindcss",
                "mongodb"
            ],
            link: "https://promptopia-eight-plum.vercel.app/",
            github: "https://github.com/BarcDevs/Promptopia"
        },
        {
            title: "Nike Landing Page",
            description: "A Nike themed landing page built using React and TailwindCSS.",
            tags: [
                "react",
                "tailwindcss"
            ],
            link: "https://nike-landing-page-lyart.vercel.app/",
            github: "https://github.com/BarcDevs/NikeLandingPage"
        },
        {
            title: "Dev-Flow",
            description: "A Stackoverflow inspired website with few additional features like AI based answers generation. Built using React (NextJS), TailwindCSS and MongoDB (not yet finished).",
            tags: [
                "nextjs",
                "react",
                "tailwindcss",
                "mongodb"
            ],
            link: "https://dev-flow-sage.vercel.app/",
            github: "https://github.com/BarcDevs/DevFlow"
        }
    ]
}
export default data
