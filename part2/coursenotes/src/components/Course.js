import React from 'react'
import Content from './Content'

const Course = ({courses}) => {
    
    return (
        <div>
            <h1>Web development curriculum</h1>
            <Content courses = {courses} />
        </div>        
    )
}


export default Course