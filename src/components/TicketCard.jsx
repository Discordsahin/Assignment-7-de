// src/components/TicketCard.jsx
import React from "react";

export default function TicketCard({ ticket, onClick }) {
  const statusClass =
    ticket.status === "Resolved"
      ? "bg-green-100 text-green-700"
      : ticket.status === "In Progress"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-gray-100 text-gray-700";

  const priorityClass =
    ticket.priority === "High"
      ? "text-red-600"
      : ticket.priority === "Medium"
      ? "text-yellow-600"
      : "text-green-600";

  return (
    <div
      onClick={() => onClick(ticket)}
      className="bg-white rounded-md p-4 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between h-36"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {ticket.title}
        </h3>
        <div className={`px-2 py-1 rounded text-xs font-medium ${statusClass}`}>
          {ticket.status}
        </div>
      </div>

      <p
        className="text-xs text-gray-500 mt-2 line-clamp-2 overflow-hidden"
        style={{ WebkitLineClamp: 2 }}
      >
        {ticket.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-300">•</span>
          <span>#{ticket.id}</span>
          <span className={`font-medium ${priorityClass}`}>
            {ticket.priority}
          </span>
          
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-sm font-normal ">{ticket.customer}</span>
          {ticket.image && (
            <img src={ticket.image} alt="customer" className="w-6 h-6" />
          )}
        <div>{ticket.createdAt}</div>

        </div>
         
      </div>
    </div>
  );
}
