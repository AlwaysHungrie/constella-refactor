'use client'

import { useState } from 'react'

interface SocialIconProps {
  svgPath: string;
  viewBox?: string;
}

const SocialIcon = ({ svgPath, viewBox = "0 0 50 50" }: SocialIconProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div
      className="group flex items-center justify-center w-10 h-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="50"
        height="50"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={svgPath}
          className={!isHovered ? 'fill-gray-100 opacity-30' : 'fill-brand-500'}
        />
      </svg>
    </div>
  )
}

const GITHUB_SVG_PATH = "M25 5C13.955 5 5 13.955 5 25C5 34.3717 11.4533 42.2133 20.1533 44.3833C20.06 44.1133 20 43.8 20 43.4117V39.9933C19.1883 39.9933 17.8283 39.9933 17.4867 39.9933C16.1183 39.9933 14.9017 39.405 14.3117 38.3117C13.6567 37.0967 13.5433 35.2383 11.92 34.1017C11.4383 33.7233 11.805 33.2917 12.36 33.35C13.385 33.64 14.235 34.3433 15.035 35.3867C15.8317 36.4317 16.2067 36.6683 17.695 36.6683C18.4167 36.6683 19.4967 36.6267 20.5133 36.4667C21.06 35.0783 22.005 33.8 23.16 33.1967C16.5 32.5117 13.3217 29.1983 13.3217 24.7C13.3217 22.7633 14.1467 20.89 15.5483 19.3117C15.0883 17.745 14.51 14.55 15.725 13.3333C18.7217 13.3333 20.5333 15.2767 20.9683 15.8017C22.4617 15.29 24.1017 15 25.825 15C27.5517 15 29.1983 15.29 30.695 15.805C31.125 15.2833 32.9383 13.3333 35.9417 13.3333C37.1617 14.5517 36.5767 17.76 36.1117 19.3233C37.505 20.8983 38.325 22.7667 38.325 24.7C38.325 29.195 35.1517 32.5067 28.5017 33.195C30.3317 34.15 31.6667 36.8333 31.6667 38.855V43.4117C31.6667 43.585 31.6283 43.71 31.6083 43.8583C39.4017 41.1267 45 33.7267 45 25C45 13.955 36.045 5 25 5Z"
const TWITTER_SVG_PATH = "M11 4C7.134 4 4 7.134 4 11V39C4 42.866 7.134 46 11 46H39C42.866 46 46 42.866 46 39V11C46 7.134 42.866 4 39 4H11ZM13.0859 13H21.0234L26.6602 21.0098L33.5 13H36L27.7891 22.6133L37.9141 37H29.9785L23.4375 27.707L15.5 37H13L22.3086 26.1035L13.0859 13ZM16.9141 15L31.0215 35H34.0859L19.9785 15H16.9141Z"

export const Socials = () => {
  const { 
    NEXT_PUBLIC_TWITTER_LINK = 'https://x.com/constella_one', 
    NEXT_PUBLIC_GITHUB_LINK = 'https://github.com/AlwaysHungrie/constella-refactor' 
  } = process.env
  
  const socialLinks = [
    {
      name: 'Twitter',
      link: NEXT_PUBLIC_TWITTER_LINK,
      svgPath: TWITTER_SVG_PATH,
    },
    {
      name: 'Github',
      link: NEXT_PUBLIC_GITHUB_LINK,
      svgPath: GITHUB_SVG_PATH,
    },
  ]

  return (
    <div className="absolute top-4 right-4 flex gap-2">
      {socialLinks.map((social) => (
        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
          <SocialIcon svgPath={social.svgPath} />
        </a>
      ))}
    </div>
  )
}
