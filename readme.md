```markdown
# Simple Book Store App

A simple book store application built with MySQL, Node.js, Express.js, and React. This application allows you to manage a collection of books by performing CRUD operations: adding, viewing, updating, and deleting books.

## Getting Started

These instructions will help you set up and run the application on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL database server set up with a database and table for storing book data.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/simple-book-store.git
   ```

2. **Change to the project directory:**

   ```bash
   cd simple-book-store
   ```

3. **Install server dependencies:**

   ```bash
   npm install
   ```

4. **Change to the client directory:**

   ```bash
   cd client
   ```

5. **Install client dependencies:**

   ```bash
   npm install
   ```

### Configuration

1. **Configure the MySQL database connection:**

   Edit the `config.js` file in the server directory. Provide your MySQL host, username, password, and database name.

   ```javascript
   // server/config.js
   module.exports = {
     db: {
       host: 'your-mysql-host',
       user: 'your-mysql-username',
       password: 'your-mysql-password',
       database: 'your-mysql-database',
     },
   };
   ```

2. **Initialize the database schema:**

   Run the following command from the server directory.

   ```bash
   npm run init-db
   ```

### Running the Application

1. **Start the server:**

   ```bash
   npm start
   ```

2. **Change to the client directory and start the React application:**

   ```bash
   cd client
   npm start
   ```

3. **Open your web browser and access the application at `http://localhost:3000`.**

## Usage

Once the application is running, you can use it to perform the following CRUD operations:

- **Create**: Add new books to the store by clicking the "Add Book" button and filling out the book details.

- **Read**: View the list of books displayed on the home page. Click on a book to view its details.

- **Update**: To edit a book's details, click the "Edit" button on the book details page, make your changes, and click "Save."

- **Delete**: To delete a book, click the "Delete" button on the book details page.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. We welcome your feedback and contributions!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

Copy and paste the above template into your project's README file and then replace the placeholder values with your actual database and project details.
