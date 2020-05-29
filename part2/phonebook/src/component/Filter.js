import React, { useState } from 'react'

const Filter = ({persons}) => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
  
    const results = !searchTerm
      ? persons
      : persons.filter(persons =>
          persons.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
  
    return (
     <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        
          {results.map(item => (
            <li>{item}</li>
          ))}
        
      </div>
    );

}

export default Filter