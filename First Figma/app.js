function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleIcon = document.getElementById('toggleIcon');
    const iconHide = document.getElementById('iconHide');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      iconHide.style.visibility = "visible";
    } else {
      passwordInput.type = 'password';
      iconHide.style.visibility = "hidden";
    }
  }