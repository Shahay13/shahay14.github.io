document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
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
      document.getElementById('responseMessage').textContent = 'Thanks for reaching out. We\'ll get back to you soon!';
      document.getElementById('responseMessage').style.display = 'block';
    } catch (error) {
      console.error('Error:', error);
    }
  });
  