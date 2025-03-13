# Simple Login Project Guidelines

## Build/Test Commands
- Install dependencies: `npm install`
- Start development server: `npm start` (runs on port 3000)

## Code Style Guidelines
- **Formatting**: Use 2-space indentation, no trailing whitespace
- **Naming**: camelCase for variables/functions, PascalCase for classes/components
- **Imports**: Use CDN for Alpine.js and CryptoJS to maintain lightweight footprint
- **Error Handling**: Use try/catch blocks with proper error logging
- **Security**: Always hash sensitive data like passwords before transmission

## Project Structure
- `index.html` - Main login page
- `css/styles.css` - Styling for the login interface
- `js/login.js` - Alpine.js form handling and login logic

## Configuration
To deploy on an embedded system:
1. Update the `serverIP` variable in `js/login.js` with your target device's IP
2. Replace the placeholder logo in the HTML with your actual logo
3. Ensure the embedded system has an endpoint at `/login` to handle POSTed credentials