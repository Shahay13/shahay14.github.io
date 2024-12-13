const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  const msg = {
    to: 'takiruls759@gmail.com',
    cc: 'adam.kunz@durhamcollege.ca',
    from: 'shahtaki12@gmail.com',
    subject: `AUTO: ${data.subject}`,
    text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: error.code,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
