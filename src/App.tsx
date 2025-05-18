import { useState, useEffect } from 'react'
import './App.css'

import DockIcons from './components/DockIcons'
import { ThemeProvider } from "@/components/theme-provider"
import Header from './components/header'

import { tsParticles } from "tsparticles-engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { color, distance } from 'motion/react'
import {WorkCard} from './components/WorkCard'
import {VideoCard} from "./components/VideoCard"
import { ShinyButton } from "@/components/magicui/shiny-button";
import {Input} from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Button } from "./components/ui/button"
import { AuroraText } from "./components/magicui/aurora-text"

import charactercounterimage from "./assets/charactercounterimage.png"
import kaguraimage from "./assets/kaguraimage.png"
import levelupimage from "./assets/levelupimage.png"
import pathfindingvideo from "./assets/Pathfinding A-Star.mp4"
import boidvideo from "./assets/chickem.mp4"
import inversekine from "./assets/IK.mp4"
import fpsvideo from "./assets/Aug Rework.mp4"

import { motion } from "framer-motion";
import { useClickManager } from './components/clickManager'
function App() {
  const [ init, setInit ] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
    }).then(() => {
        setInit(true);
    });
  }, []);

  const [Filter, SetFilter] = useState("sites")
  const FilterClick = (type:string) => {
    SetFilter(type)
  }

  const clickManager = useClickManager()

  return (
    <>
      {init && <Particles id='gradientbackground' className='-z-10 dark:bg-slate-950/50 bg-purple-400/20 h-screen w-full absolute bg-rad' options={{
        fullScreen:false,
        detectRetina:true,
        particles:{
          links:{
            enable:true,
            distance:200,
            color:"#502F7B"
          },
          color:{
            value: ["#EA3FF7"]
          },
          number:{
            value:100
          },
          shape:{
            type:"circle"
          },
          opacity:{
            value:0.8,
          },
          size:{
            value:{min:0.4, max:3}
          },
          zIndex:{
            value:-1
          },
          move:{
            enable:true,
            speed:{min:10,max:2},
            size:true,
            outModes:"bounce"
          }
        },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      }}/>}

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <section id='home' className='flex flex-col text-center min-h-screen justify-center pb-42'>
        <h1 className='text-4xl font-bold'>Hello, I'm <AuroraText>Eric</AuroraText>👋</h1>
        <h2 className='text-2xl opacity-90 font-medium'>Software Engineer</h2>
        <div className='flex items-center justify-center gap-x-5 mt-2'>
          <ShinyButton onClick={() => {clickManager("work")}}>See my work!</ShinyButton>
          <a href="https://drive.google.com/file/d/1HoRH614pMYXv_VNxVerw7yAyO1Q8SyJ9/view?usp=sharing" target="_blank">
              <ShinyButton>Resume 📄</ShinyButton>
          </a>
        </div>
        <DockIcons/>
      </section>

      <section className='text-center my-10' id='work'>
        <h1 className='text-4xl font-bold'>Check out my latest work!</h1>
        <h2 className='text-lg font-light opacity-75'>I've worked on a variety of projects, from websites to interactive experiences.</h2>
        <div className='mt-5 flex gap-x-5 items-center justify-center relative'>
          <div className='relative'>
            <ShinyButton
              onClick={() => FilterClick("sites")}
              className={`${Filter === "sites" ? "brightness-120" : "brightness-100"}`}
            >
              Sites
            </ShinyButton>
            {Filter === "sites" && (
              <motion.div
                layoutId="underline"
                className='bg-violet-500/80 w-full mx-auto rounded-4xl h-[2px] mt-1 absolute'
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>

          <div className='relative'>
            <ShinyButton
              onClick={() => FilterClick("experiences")}
              className={`${Filter === "experiences" ? "brightness-120" : "brightness-100"}`}
            >
              Experiences
            </ShinyButton>
            {Filter === "experiences" && (
              <motion.div
                layoutId="underline"
                className='bg-violet-500/80 w-full rounded-4xl h-[2px] mt-1 absolute'
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        </div>
        { Filter == "sites" &&
          <div className='flex flex-wrap items-center justify-center mt-10 gap-5'>
            <WorkCard SiteUrl='https://kaguradev.com/' SourceUrl='https://github.com/dagsthe/Kagura' Title='Kagura Studios' Description='A dynamic brand experience website designed to showcase the company’s expertise, attract high-value clients, and secure impactful brand partnerships.' Img={kaguraimage} Footer={["React", "Typescript","TailwindCSS", "MaterialUI"]}/>
            <WorkCard SiteUrl='https://dagsthe.github.io/MyEntertainment/' SourceUrl='https://github.com/dagsthe/MyEntertainment' Title='LevelUp Games!' Description='A dynamic brand experience website designed to showcase the company’s expertise, attract high-value clients, and secure impactful brand partnerships.' Img={levelupimage} Footer={["React", "Typescript","TailwindCSS", "ShadcnUI", "React Router"]}/>
            <WorkCard SiteUrl='https://dagsthe.github.io/CharacterCounter/' SourceUrl='https://github.com/dagsthe/CharacterCounter' Title='Character Counter' Description='A simple tool that counts the number of characters you type and analyzes the density of each character in your text.' Img={charactercounterimage} Footer={["React", "Typescript","TailwindCSS"]}/>
            <WorkCard CodepenUrl='https://codepen.io/Thedagz/pen/qBgZaKM' Title='Delivery Status Page' Description='Simple status page for deliverys' Img='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/site/149888/products/eA95YtepTqup0Q7NB9Xk_Screen_Shot_2021-10-08_at_10.22.24_AM.png' Footer={["HTML","CSS"]}/>
            <WorkCard CodepenUrl='https://codepen.io/Thedagz/pen/VwgKOwd' Title='Gym Landing Page' Description='A bold and energetic gym landing page delivering a call to action to inspire and convert visitors.' Img='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/site/149888/products/qIPVfgJvTqycZC2bZwz9_a2dcf193-45b0-4875-a3f7-52c40804878a.png' Footer={["HTML","CSS"]}/>
            <WorkCard SiteUrl='https://daggerstudiollc.org/' Title='Dagger Studios Showcase' Description='A showcase of work and a platform to purchase digital products' Img='https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg' Footer={["HTML","CSS","Liquid","Shopify","Javascript"]}/>
          </div>
        }

        { Filter == "experiences" &&
          <div className='flex flex-wrap items-center justify-center mt-10 gap-5'>
              <VideoCard Title='First Person Shooter' Description='FPS game that has over ➤6,700,000 million plays' Video={fpsvideo}/>
              <VideoCard Title='A* Pathfinding' Description='Given a maze, it uses the A* algorithm to find the most efficient path by combining actual cost and estimated distance to the goal.' Video={pathfindingvideo}/>
              <VideoCard Title='Chicken Boids' Description='Simulates flocking behavior using the Boids algorithm, where agents follow simple rules to mimic natural movement like birds or fish.' Video={boidvideo}/>
              <VideoCard Title='Inverse Kinematics' Description='A technique used in animation and robotics to calculate joint angles needed to position an end effector at a desired location.' Video={inversekine}/>
          </div>
        }
      </section>

      <hr className="border-t-2 border-gray-300/10 my-8 w-[80%] mx-auto" />

      <section id='contact' className="flex flex-col lg:flex-row justify-around py-10 mb-52">
        <div className="w-full lg:w-[40%] pl-10 drop-shadow-2xl dark:drop-shadow-white/30 drop-shadow-black/40 animate__animated animate__rotateInDownLeft">
            <h1 className="text-5xl font-bold"> <AuroraText>Get in Touch!</AuroraText> </h1>
            <h2 className="text-lg mt-10 brightness-50 font-semibold">Whether you're interested in working together, have a question about my services, or just want to say hello — I'm always open to new conversations. Fill out the form below or reach out through my listed channels, and I'll get back to you as soon as possible.</h2>
            <p onClick={() => {
              navigator.clipboard.writeText('erictechsoftware@gmail.com')
              alert("Email copied to clipboard!")
            }} className='brightness-80 font-bold text-xl mt-5 cursor-pointer'>✉ erictechsoftware@gmail.com</p>
        </div>

        <form action="https://formsubmit.co/erictechsoftware@gmail.com" method='POST' className="w-[90%] mx-auto mt-10 lg:mt-0 lg:w-[45%] flex flex-col gap-5 animate__animated animate__fadeIn">
            <Input type="text" name='first_name' placeholder="Name"></Input>
            <Input type="email" name='email' placeholder="Email"></Input>
            <Input type="number" name='phone' placeholder="Phone #"></Input>
            <div className="grid w-full gap-1.5 relative">
                <p className='brightness-70 font-semibold'>Your message</p>
                <Textarea name='message' placeholder="Type your message here." id="message" />
                <Button type='submit' className='w-[35%] absolute right-0 -bottom-5 translate-y-full'>Send message</Button>
            </div>
        </form>
      </section>

                    

    </ThemeProvider>


    </>
  )
}

export default App
