document.addEventListener('DOMContentLoaded', function() {
  let footer_email = document.getElementById('footer_email').value;
  let footer_tel = document.getElementById('footer_tel').value;
  let footer_question = document.getElementById('footer_question').value;

  // Example validation (basic)
  if (!footer_email.includes('@')) {
    console.error('Email is invalid');
    return;
  }

  let footerData = {
    name: footer_email,
    tel: footer_tel,
    question: footer_question
  };

  console.log('Sending data:', footerData);

  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(footerData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});



