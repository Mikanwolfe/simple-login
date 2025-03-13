// Alpine.js component for login form
document.addEventListener('alpine:init', () => {
  Alpine.data('loginForm', () => ({
    // Form data
    username: '',
    password: '',
    errorMessage: '',
    
    // Target server IP - change this to your embedded system's IP
    serverIP: '192.168.1.100', 
    
    // Submit form handler
    submitForm() {
      if (!this.username || !this.password) {
        this.errorMessage = 'Username and password are required';
        return;
      }
      
      try {
        // Hash the username and password
        const hashedUsername = CryptoJS.SHA256(this.username).toString();
        const hashedPassword = CryptoJS.SHA256(this.password).toString();
        
        // Prepare form data to send
        const formData = new FormData();
        formData.append('username_hash', hashedUsername);
        formData.append('password_hash', hashedPassword);
        
        // POST request to the server
        fetch(`http://${this.serverIP}/login`, {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Login failed');
          }
          return response.json();
        })
        .then(data => {
          // Handle successful login
          console.log('Login successful:', data);
          // You can redirect or perform other actions here
          this.errorMessage = '';
        })
        .catch(error => {
          console.error('Error:', error);
          this.errorMessage = 'Invalid credentials. Please try again.';
        });
      } catch (error) {
        console.error('Error during login:', error);
        this.errorMessage = 'An error occurred. Please try again.';
      }
    }
  }));
});