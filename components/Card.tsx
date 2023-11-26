"use client"

import {FaDribbble, FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter} from "react-icons/fa"
import {Social} from '@/types'
import Image from 'next/image'
import SocialLink from '@/components/SocialLink'

type CardProps = {
    name: string
    title: string
    social: Social
}
const Card = ({name, title, social: {github, twitter, email, dribble, linkedin}}: CardProps) => (
    <div className="w-full">
        <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
            <div className="">
                <Image
                    className="w-32 mx-auto shadow-xl rounded-full"
                    src={'/images/profile.png'}
                    alt="Profile face"
                    width={100}
                    height={100}
                />
            </div>
            <div className="text-center mt-5">
                <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {name}
                </p>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                    {title}
                </p>
                <div className="flex align-center justify-center mt-4">
                    {github && <SocialLink name="Github" link={github} color={'gray-800'} Icon={FaGithub}/>}
                    {linkedin &&
                        <SocialLink name="Linkedin" link={linkedin} color={'blue-600'} Icon={FaLinkedin}/>}
                    {dribble &&
                        <SocialLink name="Dribble" link={dribble} color={'pink-600'} Icon={FaDribbble}/>}
                    {twitter &&
                        <SocialLink name="Twitter" link={twitter} color={'blue-500'} Icon={FaTwitter}/>}
                    {email &&
                        <SocialLink name="Email" link={email} color={'teal-500'} Icon={FaRegEnvelope}/>}
                </div>
            </div>
        </div>
    </div>
)

export default Card
