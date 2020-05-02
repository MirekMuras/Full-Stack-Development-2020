import React from 'react'
import Part from './Part'
import Header from './Header'

function sum(value) {

    let initialVAlue = 0
    let _sum = value.parts.reduce((s,p) =>
    s + p.exercises  , initialVAlue)
    
    return  (
       <b>Total of {_sum} exercises</b>
    )
}

const Content = ({courses}) => {

    const [one,two] = courses

    return (
    <div>
        <Header header = {one.name}/>
        <Part parts={one.parts} />
        {sum(one)}
        <Header header = {two.name}/>
        <Part parts={two.parts} /> 
        {sum(two)}
      
    </div> 
    )
}

export default Content