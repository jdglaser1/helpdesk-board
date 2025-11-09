//src/app/components/Board.jsx
'use client'


import { useEffect, useMemo, useState } from 'react'
import TicketCard from './TicketCard'
import TicketList from './TicketList'
import StatusMessage from "./StatusMessage";
import SearchBox from './SearchBox';
import PriorityFilter from './PriorityFilter';
import StatusFilter from './StatusFilter';
import MyQueueSummary from './MyQueueSummary';


export default function Board() {
   const [tickets, setTickets] = useState([])
   const [filters, setFilters] = useState({status:''})


   useEffect(() => {
       fetch('/api/tickets')
           .then(r => r.json())
           .then(setTickets)
           .catch(console.error);
   }, [])
  
   return (
       <ul>
        <SearchBox/>
        <PriorityFilter/>
        <StatusFilter/>
         <h2 className = 'subtitle'>Current Tickets</h2>
           {tickets.map(t => (
               <li className= 'product-card' key={t.id}>Title: {t.title} <br/> Description: {t.description}<br/> Priority: {t.priority}
               <br/> Status: {t.status}<br/>Assignee: {t.assignee}<br/>Updated: {t.updatedAt} <button className='button'>Add to Queue</button></li>
           ))}
        <MyQueueSummary/>
        <StatusMessage/>
       </ul>

   );
  

}
