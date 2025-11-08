//src/app/components/SearchBox.jsx
'use client'

export default function SearchBox({input}){
  return( 
    
    <input className ="searchBox"
    type = "text"
    placeholder="Search"
    value ={input}
    />
 )
}
