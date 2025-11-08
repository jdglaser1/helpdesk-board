//src/app/components/Board.jsx
'use client'


import { useEffect, useMemo, useState } from 'react'
import TicketCard from './TicketCard'
import TicketList from './TicketList'
import StatusMessage from "./StatusMessage";


export default function Board() {
   const [tickets, setTickets] = useState([])


   useEffect(() => {
       fetch('/api/tickets')
           .then(r => r.json())
           .then(setTickets)
           .catch(console.error);
   }, [])
  
   return (
       <ul>
         <h2 className = 'subtitle'>Current Tickets</h2>
           {tickets.map(t => (
               <li className= 'product-card' key={t.id}>Title: {t.title} <br/> Description: {t.description}<br/> Priority: {t.priority}
               <br/> Status: {t.status}<br/>Assignee: {t.assignee}<br/>Updated: {t.updatedAt} <button className='button'>Add to Queue</button></li>
           ))}
            
       </ul>

   );
  

}
