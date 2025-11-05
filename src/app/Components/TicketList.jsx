//src/app/components/TicketList.jsx
'use client';

import TicketCard from './TicketCard';

// Renders a list of products with stable keys (product.id).
export default function TicketList({ tickets, onAdd }) {
  return (
    <div>
      <h2>Tickets</h2>
      <ul>
        {tickets.map((t) => (
          <li key={t.id}>
            <TicketCard
              id={t.id}
              title={t.title}
              description={t.description}
              status={t.status}
              assignee={t.assignee}
              updated={t.updatedAt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}