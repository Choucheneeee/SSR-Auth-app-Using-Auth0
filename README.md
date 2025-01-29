# SSR-Auth-App-Using-Auth0

A simple authentication application built using JavaScript and Auth0 for user login and logout functionality. This project demonstrates how to integrate Auth0 for authentication in a server-side rendered (SSR) application.

## Features

- User login and logout using Auth0.
- Secure session management.
- Environment-based configuration for flexibility.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/SSR-Auth-App-Using-Auth0.git
   cd SSR-Auth-App-Using-Auth0
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```env
   port=3000
   url=mongodb://localhost:27017/LoginApp
   secret=YOUR_SECRET000
   baseURL=http://localhost:3000
   clientID=YOUR_CLIENT_ID
   issuerBaseURL=https://BASEURL.eu.auth0.com
   ```

   Replace the values with your actual Auth0 credentials and MongoDB connection string.

4. **Run the application:**

   ```bash
   npm start
   ```

   The application will start running on `http://localhost:3000`.

## Configuration

- **port**: The port on which the application will run.
- **url**: The MongoDB connection string.
- **secret**: A secret key used for session management.
- **baseURL**: The base URL of your application.
- **clientID**: The Client ID from your Auth0 application.
- **issuerBaseURL**: The Issuer Base URL from your Auth0 domain.

## Usage

- **Login**: Navigate to `/login` to initiate the login process.
- **Logout**: Navigate to `/logout` to log out the user.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Auth0](https://auth0.com/) for providing the authentication service.
## Support
If you have any questions or need further assistance, please open an issue on the GitHub repository.
---
