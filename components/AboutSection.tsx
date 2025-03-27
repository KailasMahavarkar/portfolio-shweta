import React from "react"
import Image from "next/image"

const skills = [
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "SCSS",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB",
    "Socket.io",
    "Passport.js",
    "Firebase",
    "Redux",
    "Express"
]


const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is Shweta and I am a{" "}
                            <span className="font-bold">{"highly ambitious"}</span>,
                            <span className="font-bold">{" self-motivated"}</span>, and
                            <span className="font-bold">{" driven"}</span> software engineer
                            based in Mumbai, Maharashrta IN.
                        </p>
                        <br />
                        <p>
                            I graduated from Mumbai University and have been working as a full-stack developer ever since.
                        </p>
                        <br />
                        <p>
                            I have a passion for crafting robust and scalable web applications. With hands-on experience in both front-end and back-end technologies, I strive to build innovative solutions that enhance user experiences and drive business growth.
                        </p>
                        <br />
                        <p>
                            I believe that you should{" "}
                            <span className="font-bold text-teal-500">
                                never stop growing
                            </span>{" "}
                            and that&#39;s what I strive to do, I have a passion for
                            technology and a desire to always push the limits of what is
                            possible. I am excited to see where my career takes me and am
                            always open to new opportunities. 🙂
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left flex items-center justify-center  flex-col">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="
                                        bg-gray-200 border border-white text-black dark:hover:text-white hover:text-black
                                        px-4 py-2 mr-2 mt-2 rounded font-semibold 
                                        hover:bg-transparent dark:hover:border-white hover:border-black
                                        
                                         "
                                    >
                                        {item}
                                    </p>
                                )
                            })}
                        </div>

                        <div className="relative overflow-hidden w-[325px] h-[325px] rounded-full group mt-5 md:mt-auto">
                            <Image
                                src="/shweta_goa.jpg"
                                alt="Shweta in Goa"
                                width={325}
                                height={325}
                                className="transform scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
