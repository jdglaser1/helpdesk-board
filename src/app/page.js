//page.jsx
'use client'

import Board from "./Components/Board"
import TicketList from "./Components/TicketList"
import TicketCard from "./Components/TicketCard"
import MyQueueSummary from "./Components/MyQueueSummary"
import SearchBox from "./Components/SearchBox"


export default function Home(){


  return (
    <div>
      <h1 className='site-header'>Help-Desk Board</h1>
      <SearchBox/>
      <Board/>
      <TicketCard/>
      {/* <MyQueueSummary/> */}
      {/* <MyQueueSummary/> */}
      <SearchBox/>
    </div>
  )
}