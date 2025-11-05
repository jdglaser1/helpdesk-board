// app/components/Board.jsx
'use Client';
import { useEffect, useMemo, useState } from 'react';

export default function Board() {
const [tickets, setTickets] = useState([]);

useEffect(() => {
fetch('/api/tickets')
.then(r => r.json())
.then(setTickets)
.catch(console.error);
}, []);

return (
<ul>
{tickets.map((t) =>(<li key={t.id}>{t.title}: ${t.description}</li>))}
</ul>
);
}