//src/app/components/ProductFilter.jsx
'use client'

export default function PriorityFilter({value}){
    return(
        <select
        value ={value}
        >
            <option value = "Low">Low Priority</option>
            <option value = "Medium">Medium Priority</option>
            <option value = "High">High Priority</option>
        </select>
    )
}