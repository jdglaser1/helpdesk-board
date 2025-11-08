//src/app/components//StatusFilter.jsx
'use client'

export default function StatusFilter({value}){
    return(
        <select
        value ={value}
        >
            <option value = "Started">Started</option>
            <option value = "NotStarted">Not Started</option>
            <option value = "Completed">Completed</option>
        </select>
    )
    
}