import React from 'react'
import Part from './Part'

const Content = ({course}) => {

    let initialVAlue = 0
    let sum = course.parts.reduce((s,p) =>
     s + p.exercises  , initialVAlue)
    console.log(sum);


    return (
    <p>
        <Part parts={course.parts} /> <br/>
        <b>Total of {sum} exercises </b>
    </p> 
    )
}

export default Content