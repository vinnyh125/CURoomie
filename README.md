# CURoomie

CURoomie is a platform designed to help Cornell University students find compatible roommates for both on-campus and off-campus housing. Built with NextJS, React, Flask, and PostgreSQL, CURoomie simplifies the roommate search by offering personalized recommendations based on user preferences and compatibility.

## Features

- **Roommate Matching**: Personalized roommate recommendations based on compatibility and user preferences.
- **Filter and Search**: Advanced filtering options to narrow down potential roommates based on key criteria.
- **Real-time Messaging**: Integrated chat functionality for seamless communication between users.
- **User Profile Management**: Profile customization to showcase housing preferences, personal traits, and availability.
- **Responsive Design**: Mobile-first, responsive interface for seamless navigation on any device.

## Tech Stack

- **Frontend**: NextJS, React, TailwindCSS
- **Backend**: Flask (Python), RESTful API
- **Database**: PostgreSQL
- **Hosting**: Netlify (Frontend), Heroku (Backend)
- **Domain**: Google Domains

## Installation

### Prerequisites

- Node.js and npm
- Python 3 and pip
- PostgreSQL

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vinnyh125/CURoomie.git
   cd CURoomie
   ```

2. **Frontend Setup**:

   Navigate to the `frontend` directory and install dependencies.

   ```bash
   cd frontend
   npm install
   ```

3. **Backend Setup**:

   Navigate to the `backend` directory, create a virtual environment, and install dependencies.

   ```bash
   cd ../backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

4. **Database Setup**:

   Set up the PostgreSQL database. Create a new database and update the database configuration in `backend/config.py`.

   ```sql
   CREATE DATABASE CURoomie;
   ```

5. **Environment Variables**:

   Create a `.env` file in both `frontend` and `backend` directories. Example structure:

   ```env
   # Frontend .env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api

   # Backend .env
   DATABASE_URL=postgresql://username:password@localhost:5432/CURoomie
   SECRET_KEY=your_secret_key
   ```

6. **Start the Application**:

   - **Frontend**:

     ```bash
     npm run dev
     ```

   - **Backend**:

     ```bash
     flask run
     ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Sign Up**: Create an account using your Cornell email.
2. **Set Preferences**: Specify your housing preferences and personal traits to enhance match accuracy.
3. **Find Roommates**: Browse through recommended roommates based on compatibility.
4. **Connect**: Use the in-app messaging to communicate and coordinate with potential roommates.

## Project Structure

```plaintext
CURoomie/
├── frontend/                 # NextJS + React frontend
│   ├── public/
│   ├── src/
│   └── .env
├── backend/                  # Flask backend
│   ├── app/
│   ├── config.py
│   └── .env
├── README.md
└── requirements.txt
```

- **frontend/**: Contains the NextJS/React code, components, and pages.
- **backend/**: Contains the Flask API, database models, and image processing scripts.
- **config.py**: Configuration file for setting up environment variables.
- **requirements.txt**: Lists Python dependencies.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
