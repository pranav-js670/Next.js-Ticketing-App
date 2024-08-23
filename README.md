# Next.js-Ticketing-App

This project is a modern ticket management system built with Next.js and styled using Tailwind CSS. This application allows users to create, view, and manage support tickets, offering a responsive and user-friendly interface. It uses a JSON server to handle ticket data.

## Features

1. Create Tickets: Users can easily add new tickets with titles, descriptions, and priority levels.
2. View Tickets: A list view of all tickets showing titles, a brief description, and priority.
3. Ticket Details: Detailed view of each ticket's information.
4. Priority Levels: Tickets can be marked as Low, Medium, or High priority.
5. Responsive Design: Tailwind CSS ensures a sleek and adaptable design across devices.
6. Real-Time Data Refresh: Automatically updates the ticket list when a new ticket is added.

## Tech Stack

1. Frontend: Next.js, React
2. Styling: Tailwind CSS
3. Backend: JSON Server
4. Routing: Next.js navigation

## Installation

1. Clone the Repository:

   ```bash
   git clone https://github.com/pranav-js670/Next.js-Ticketing-App.git
   cd nextjs-ticketing-app
   ```

2. Install Dependencies

3. Start the JSON Server:

   Install JSON Server globally if not already installed:

   ```bash
   npm install -g json-server
   ```

   Start the JSON Server with:

   ```bash
   json-server --watch db.json --port 4000
   ```

4. Run the Next.js Application:

   ```bash
   npm run dev
   ```

5. The application will be accessible at bash ``` http://localhost:3000 ```

## Usage

1. Navigate to http://localhost:3000/tickets to view all tickets.
2. Use the form to create new tickets.
3. Click on a ticket to view its detailed information.

## Future Enhancements

1. Edit & Delete: Implement features to edit and delete tickets.
2. Search & Filter: Add search and filtering capabilities.
3. User Authentication: Incorporate user authentication for ticket management.

## License

This project is licensed under the MIT License.
