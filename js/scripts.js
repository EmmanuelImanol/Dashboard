function togglePw() {
  const input = document.getElementById('pwInput');
  const icon  = document.getElementById('eyeIcon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fa-regular fa-eye-slash text-sm';
  } else {
    input.type = 'password';
    icon.className = 'fa-regular fa-eye text-sm';
  }
}