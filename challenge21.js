function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // You can implement your authentication logic here
    // For simplicity, I'll just check if the username and password are not empty
    if (username !== '' && password !== '') {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      document.getElementById('usernameDisplay').textContent = username;
  
      // Dummy courses for demonstration
      var courses = ['HTML', 'CSS', 'JS'];
      var coursesList = document.getElementById('coursesList');
      courses.forEach(function(course) {
        var li = document.createElement('li');
        li.textContent = course;
        coursesList.appendChild(li);
      });
    } else {
      alert('Please enter username and password.');
    }
  }
  