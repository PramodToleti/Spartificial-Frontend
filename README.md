# Social Media Admin Dashboard

This is a social media admin dashboard built with React and Tailwind CSS. It allows administrators to manage users and posts effectively by providing key metrics and an organized view of data. The application includes a login page, KPI boxes, user listing, and post listing functionalities.

## Features

- **Home Page**: Displays key performance indicators (KPIs).
- **Users Listing Page**: Lists all users with the ability to ban or edit users.
- **Posts Listing Page**: Lists all posts with the ability to delete or hide posts.
- **Responsive Navigation Bar**: Easy navigation between pages.

## KPIs on Home Page

- Total Users
- Total Posts
- Users Active in the Last 24 Hours
- Posts Published in the Last 24 Hours

## Users Listing Page

- Two KPI boxes:
  - Total Users
  - Users Active in the Last 24 Hours
- List of most recent posts (paginated) with the following columns:
  - User ID
  - Username
  - Name
  - Email

## Post Listing Page

- Two KPI boxes similar to the Users Listing Page.
- List of posts with the following columns:
  - Post ID
  - Post Caption
  - Media URL

## Control Buttons

- **Users**: Ban and Edit
- **Posts**: Delete and Hide

## Dummy Dataset

The application is equipped with a dummy dataset for users and posts, making it easier to demonstrate functionality.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/PramodToleti/Spartificial-Frontend.git
   ```

2. Change directory to the project folder:

   ```bash
   cd Spartificial-Frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
    npm start
   ```

5. Open the application in your browser:

   ```bash
   http://localhost:3000
   ```

## Login Page

The application includes a dummy login page where you can use any set of credentials (email and password). After logging in, you will be redirected to the admin dashboard.

## Technologies Used

- **React.js**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **Tailwind CSS**: For styling the components.
