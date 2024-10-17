Daily Technology Blog

This project is a Flask-based web application that showcases a technology blog with dynamic content and email functionality. It pulls static blog post data and integrates a contact form to handle user inquiries via email. The project also includes a responsive front-end using HTML, Bootstrap, and custom JavaScript for an improved user experience.

Author

Onyedika Joel Chukwuka (Newman)

---

Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Dynamic Blog Post Rendering**: Blog posts are rendered dynamically on the homepage with the ability to click through to external articles.
- **Responsive Design**: Utilizes Bootstrap for mobile-first responsive design.
- **Contact Form with Email Functionality**: A contact form that sends an email to the site owner using Gmail's SMTP server.
- **Flask-based Backend**: Lightweight and fast, using Flask for server-side logic.
- **Environment Variables**: Secure handling of email credentials using `.env` file.

---

Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/<your-username>/<your-repo-name>.git
    cd <your-repo-name>
    ```

2. Set up a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # For Linux/macOS
    venv\Scripts\activate  # For Windows
    ```

3. Install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

---

Environment Variables

This project uses environment variables to handle sensitive data (like email credentials) securely. Make sure to create a `.env` file in the project root and add your variables.

Create a `.env` file with the following content:

OWN_EMAIL=<your-email-address> OWN_PASSWORD=<your-email-password>

yaml
Copy code

Note: Ensure that less secure apps are enabled for your Gmail account or use an app-specific password if two-factor authentication is enabled.

---

Running the App

After installing the dependencies and setting up the environment variables, run the Flask application:

```bash
flask run
Alternatively, you can start the app with debug mode enabled:

bash
Copy code
python app.py
Once the app is running, open your browser and navigate to:

arduino
Copy code
http://127.0.0.1:5000/
Project Structure
bash
Copy code
├── static/                 # Contains static assets (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── assets/
├── templates/              # Contains HTML templates
│   ├── index.html          # Homepage
│   ├── about.html          # About page
│   ├── contact.html        # Contact page
│   └── post.html           # Individual blog post page
├── .env                    # Environment variables (should not be shared)
├── app.py                  # Flask application entry point
├── requirements.txt        # List of dependencies
└── README.md               # Project documentation
Features Breakdown
Homepage (/):

Lists static blog posts with title, description, and a link to read the full article on external sites.
Posts are rendered dynamically using Flask and Jinja templating.
Blog post preview is linked to the actual source using the url field.
About Page (/about):

Displays information about the blog's purpose, vision, and topics covered.
Contact Page (/contact):

Contains a form for users to reach out with their name, email, phone number, and message.
On form submission, an email is sent to the blog admin using the Gmail SMTP server.
Dynamic Blog Post Route (/post/<int:index>):

Displays detailed content for each blog post using its unique id.
JavaScript Functionality
Scroll Detection:
Implements smooth scrolling and sticky navigation behavior when users scroll up or down the page.
Dynamic News Update:
Fetches and dynamically displays a specific news article from Reuters on the homepage.
Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature/bugfix: git checkout -b feature-name.
Make your changes and test thoroughly.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Submit a pull request for review.

vbnet
Copy code

Notes:
- Replace `<your-username>` and `<your-repo-name>` with your actual GitHub username and repository name.
- Ensure that your `.env` file is never committed to the repository by adding it to `.gitignore`.








