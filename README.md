# Simple Login

A lightweight login page designed for embedded systems. Built with Alpine.js and features client-side password hashing.

## Features

- Minimalist design optimized for embedded systems
- Mobile-friendly responsive layout
- Password field with standard security features
- Client-side hashing of credentials before transmission
- Configurable target IP address
- Extremely lightweight (~15KB total without compression)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/simple-login.git
   cd simple-login
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the target server IP:
   - Open `js/login.js`
   - Update the `serverIP` variable with your embedded system's IP address
   - Replace the placeholder logo in `index.html` with your own

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Visit `http://localhost:3000` in your browser

## Deployment

To deploy to an embedded system:

1. Copy the entire directory to your web server
2. Configure your embedded system to handle POSTs to the `/login` endpoint
3. Ensure your server can process the hashed username and password data

## Security Considerations

- This login page hashes credentials client-side using SHA-256
- For production use, consider adding HTTPS and implementing server-side validation
- The system expects the embedded device to verify the hashed credentials