//page.jsx
'use client'

import Board from "./Components/Board"
import TicketList from "./Components/TicketList"
import TicketCard from "./Components/TicketCard"


export default function Home(){


  return (
    <div>
      <h1 className='site-header'>Help-Desk Board</h1>
      <Board/>
      <TicketCard/>
    </div>
  )
}