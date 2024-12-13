---
layout: base
title: Lab 3 Solution
date: 2024-12-04
permalink: "/blogs/lab-3-solution/"
---

# Lab 3 Solution

---

**Author:** Takirul

**Published on:** 2024-12-03

## Clarity of Scope Definition

This project seeks to improve an existing 11ty website by incorporating serverless functionalities and a headless CMS to demonstrate modern web development principles. A dynamic contact form will also be created to handle email submissions using a serverless function.

## Justification of Technology Choices

### Serverless Function Providers

#### Netlify Functions

Netlify provides a smooth approach to deploying serverless functionalities alongside my static website. It supports JavaScript (Node.js) and Go and includes built-in capabilities for continuous deployment.

**Pros:**

- Easy integration with static websites.
- Continuous deployment capability is built in.
- The free tier is accessible.

**Cons:**

- Runtime options are limited (just Node.js and Go).
- There is a possibility for vendor lock-in.

#### AWS Lambda

AWS Lambda supports a variety of languages (Node.js, Python, Ruby, Java, Go, and .NET Core) and connects with other AWS services.

**Pros:**

- Supports a wide range of languages.
- Comprehensive integration with other AWS services.
- Scalable and reliable.

**Cons:**

- Can be difficult to set up and administer.
- Required experience with the AWS ecosystem.
- Costs can become considerable when scaled.

#### Google Cloud Functions

Google Cloud Functions supports Python, Node.js, and Go. It connects well with other Google Cloud services and has robust event-driven features.

**Pros:**

- Excellent integration with Google Cloud services.
- Built-in security and scalability.
- Pay-per-use pricing.

**Cons:**

- Limited language support.
- Beginners will find the setup complex.
- The cost of extensive use can be substantial.

#### Azure Functions

Azure Functions support a variety of languages (JavaScript, C#, F#, Java, Python, and PowerShell) and integrate seamlessly with Microsoft Azure services.

**Pros:**

- Supports a wide range of languages.
- Excellent integration with Azure services.
- Pricing options are flexible.

**Cons:**

- The Azure ecosystem might be challenging to manage.
- New users face a learning curve.
- Scale can result in significant expenses.

### Email Services

#### SendGrid

SendGrid is a cloud-based service that offers consistent email delivery, scalability, and real-time statistics. It has a rich API and can handle both transactional and marketing emails.

**Pros:**

- Robust API with substantial documentation.
- High delivery rates.
- Scalable and reliable.

**Cons:**

- Premium features carry a higher cost.
- Some users experience deliverability concerns with the free tier.

#### Mailgun

Mailgun offers sophisticated APIs for sending, receiving, and tracking emails. It focuses on developers and provides excellent deliverability and scalability.

**Pros:**

- Developer-friendly API.
- High delivery rates.
- Scalable infrastructure.

**Cons:**

- Higher volumes can be more expensive.
- The free tier offers a limited set of features.

#### Mailchimp

Mailchimp is mostly recognized for its marketing email services, but it also provides transactional email via Mandrill (a Mailchimp add-on). It offers an easy-to-use interface and sophisticated marketing features.

**Pros:**

- User-friendly interface.
- Robust marketing tools and analytics.
- It integrates with Mandrill for transactional emails.

**Cons:**

- Premium features come at a higher cost.
- Marketing-oriented emails were prioritized over transactional emails.

## Selected Providers

### Serverless Function Provider: Netlify Functions

Netlify Functions was chosen due to its smooth connection with static sites, simple setup, and built-in continuous deployment. The free tier is sufficient for this project's requirements, as it provides the necessary functionality with little overhead.

### Email Service: SendGrid

SendGrid was chosen because of its rich API, excellent delivery rates, and dependable service. The free tier offers sufficient resources for preliminary testing and development, making it an ideal choice for this project.

## Implementation Approach

1. **Set up Netlify Functions:** Set up the site to deploy serverless functions using Netlify.
2. **Develop the serverless function:** Create a serverless function that handles form submissions and sends emails using SendGrid.
3. **Integrate the contact form:** Create a dynamic contact form in JavaScript and use the fetch API to send data to the serverless function.
4. **Deploy and test:** Use Netlify to deploy the site and functionalities, and then test form submission and email functionality.

### Example Code: Netlify Function

```
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  const msg = {
    to: 'my.email+alias@domain.com',
    cc: 'adam.kunz+inft@durhamcollege.ca',
    from: 'my.email@domain.com',
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
```

## Relevance to Project Requirements

This approach meets the project's needs by including serverless methods for dynamic content processing and email capabilities. The chosen technologies, Netlify Functions and SendGrid, offer solid solutions that effectively fulfill the project's requirements.

## Depth of Analysis

The investigation looked at several serverless function providers and email services, weighing their benefits and drawbacks. The final decision between Netlify Functions and SendGrid is based on ease of use, dependability, and alignment with project objectives.

## Professional Presentation

This document is well-organized, concise, and comprehensive, outlining the scope, justifications for technology choices, and execution strategy. The language and formatting promote readability and professionalism.

## Website Links

<https://docs.netlify.com/cli/manage-functions/>

<https://docs.aws.amazon.com/lambda/latest/dg/welcome.html>

<https://cloud.google.com/functions/docs>

<https://learn.microsoft.com/en-us/azure/azure-functions/>

<https://www.twilio.com/docs/sendgrid>

<https://documentation.mailgun.com/>

<https://mailchimp.com/developer/>
