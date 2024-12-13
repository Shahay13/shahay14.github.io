document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  // Basic form validation
  if (!document.getElementById('name').value || !document.getElementById('email').value || !document.getElementById('subject').value || !document.getElementById('message').value) {
    alert('Please fill out all required fields.');
    return;
  }

  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('spinner').style.display = 'block';

  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  try {
    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();
    document.getElementById('spinner').style.display = 'none';

    if (response.ok) {
      document.getElementById('responseMessage').textContent = 'Thanks for reaching out. We\'ll get back to you soon!';
    } else {
      document.getElementById('responseMessage').textContent = 'Sorry, something went wrong. Please try again later.';
    }

    document.getElementById('responseMessage').style.display = 'block';
  } catch (error) {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('responseMessage').textContent = 'Sorry, something went wrong. Please try again later.';
    document.getElementById('responseMessage').style.display = 'block';
    console.error('Error:', error);
  }
});
