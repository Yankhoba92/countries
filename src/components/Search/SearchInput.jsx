import React, { useState } from 'react'

const SearchInput = ({onSearch}) => {
    const [inputValue, setInputValue] =useState('')
    const handleSubmit =(e)=>{
        e.preventDefault();
        onSearch(inputValue)
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Rechecher un pays.....' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    </form>
  )
}

export default SearchInput
