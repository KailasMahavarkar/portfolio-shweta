import env from "@/env"
import React from "react"
import {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineYoutube,
    AiOutlineInstagram,
    AiOutlineCode,
} from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
            <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="captialize flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
                    © {new Date().getFullYear()} {env.FULL_NAME}<a href="/" className="hover:underline"></a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-5 mt-3">
                    <a href={env.SOCIALS.GITHUB} rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    <a
                        href={env.SOCIALS.INSTAGRAM}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineInstagram
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>

                    <a
                        href={env.SOCIALS.LINKEDIN}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    <a
                        href={env.SOCIALS.LEETCODE}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineCode
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
