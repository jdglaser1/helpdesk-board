//src/app/components/TicketCard.jsx
'use client';

// Displays a single product and an Add button.
// Disables the button and shows "Out of stock" when stock === 0.
export default function TicketCard({ id, title, description, priority, status, assignee, updatedAt }) {

  return (
    <div>
      <div>
        <div>{priority}</div>
        <h3>{title}</h3>
        <div>{id}</div>
        <div>{'Queue'}</div>
      </div>

      <button className='button'

        onClick={() => onAdd(id)}
      >
        Add to Queue
      </button>
    </div>
  );
}
