import React from 'react'
import Skill from './Skill'
export default function Skills({skills}) {
  return (
    skills.map((skill) => <Skill key={skill} skill={skill} />)
  )
}
