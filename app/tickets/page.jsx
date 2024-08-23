import React from "react";
import TicketList from "./TicketList";
import { Suspense } from "react";

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<p>Loading tickets...</p>}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
