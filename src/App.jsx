// src/App.jsx
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";

import "./index.css"; // Tailwind

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        // public 
        const response = await fetch("/data/tickets.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTickets(data);
        setError(null);
      } catch (e) {
        console.error("tickets load err:", e);
        setError("Failed to load tickets. Using sample data.");

        // fallback data
        setTickets([
          {
            id: 1,
            title: "Sample Ticket",
            description: "This is a sample ticket",
            customer: "Sample User",
            priority: "Medium",
            status: "Open",
            createdAt: "2023-05-15",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleTicketClick = (ticket) => {
    if (!inProgressTasks.some((t) => t.id === ticket.id)) {
      setInProgressTasks((p) => [ticket, ...p]);
      toast.success(`"${ticket.title}" added to In-Progress`);
    } else {
      toast.info(`"${ticket.title}" already in progress`);
    }
  };

  const handleCompleteTask = (taskId) => {
    const t = inProgressTasks.find((x) => x.id === taskId);
    if (!t) return;

    setInProgressTasks((p) => p.filter((x) => x.id !== taskId));
    setResolvedCount((c) => c + 1);
    

    setTickets((prev) =>
      prev.map((tk) => (tk.id === taskId ? { ...tk, status: "Resolve" } : tk))
    );

    toast.success(`"${t.title}" marked Resolved`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNew={() => toast.info("Open New Ticket (not implemented)")} />

      <Banner
        inProgressCount={inProgressTasks.length}
        resolvedCount={resolvedCount}
      />

      <main className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Tickets (span 2) */}
        <section className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Tickets</h2>

          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Loading tickets...</p>
            </div>
          ) : error ? (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    {error} Using sample data for demonstration.
                  </p>
                </div>
              </div>
            </div>
          ) : tickets.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-lg shadow">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No tickets found</h3>
              <p className="mt-1 text-gray-500">There are no customer tickets available at the moment.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {tickets.map((ticket) => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket} 
                  onClick={handleTicketClick} 
                  isResolved={ticket.status === "Resolved"}
                />
              ))}
            </div>
          )}
        </section>

        {/* RIGHT: Task Status */}
        <aside>
          <TaskStatus tasks={inProgressTasks} onCompleteTask={handleCompleteTask} />
        </aside>
      </main>


      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}
