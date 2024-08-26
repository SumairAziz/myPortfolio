import React from 'react'
import "./tech.css"

import {BallCanvas} from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='relative w-28 h-28 group' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div className='tooltip'>{technology.name}</div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"")