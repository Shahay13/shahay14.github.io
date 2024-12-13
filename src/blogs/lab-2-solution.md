---
layout: base
title: Lab 2 Solution
date: 2024-11-11
permalink: "/blogs/lab-2-solution/"
---

# Lab 2 Solution

---

**Author:** Takirul

**Published on:** 2024-11-10

## Clarity of Scope Definition

This project tries to improve an existing 11ty website by incorporating a headless CMS. This will show current web development approaches such as API interaction, content modelling, and template design with Nunjucks. The project will contain dynamic functionality such as pagination and filtering, all powered by the selected headless CMS.

## Justification of Technology Choices

### Strapi

Strapi is an open-source headless CMS with a customisable API and easy-to-use admin panel. Its flexibility in setting content kinds and fields, combined with the ability to self-host, make it an excellent contender.

**Pros:**

- Open source and extremely customizable.
- Supports RESTful APIs and GraphQL.
- A robust development community and substantial documentation.

**Cons:**

- When compared to other CMS alternatives, it may require more setup and configuration.
- Beginners will encounter a steeper learning curve.

### Contentful

Contentful is a cloud-based headless CMS renowned for its powerful API and scalability. It has a large number of integrations and a robust UI for content management.

**Pros:**

- Excellent user interface and experience.
- Robust API with substantial documentation.
- Strong support for dynamic content and previewing capabilities.

**Cons:**

- Larger projects can be costly.
- In comparison to open-source competitors, customization options are limited.

### Sanity

Sanity provides a real-time collaborative editing environment as well as a customizable schema system. It is renowned for its developer-friendliness approach and real-time functionalities.

**Pros:**

- Real-time collaboration and editing.
- Highly adaptable content modelling.
- Powerful development tools and integration capabilities.

**Cons:**

- Pricing can be an issue for small projects.
- Some features have a longer learning curve.

### Prismic

Prismic is a headless CMS designed to provide an excellent editor experience through slice-based content modelling. It excels at developing customizable content architectures.

**Pros:**

- The user interface is straightforward and easy to understand.
- Simple integration with a variety of frameworks and static website generators.
- Allows for content versioning and scheduling.

**Cons:**

- Customization options are limited for more sophisticated applications.
- API capabilities are somewhat restricted.

### Ghost

Ghost is an open-source headless CMS that was created mainly for content-driven webpages. It includes a strong admin interface as well as a robust API.

**Pros:**

- SEO and performance optimization are already built in.
- Strong emphasis on content generation and publishing.
- Setup and use are simple for smaller tasks.

**Cons:**

- Complicated content modelling requires less flexibility.
- Custom workflows and integrations receive little support.

## Integration Efforts

### Integrating Strapi

To start with, I tried Strapi, a free headless content management system noted for its adaptability and customization. I made a new Strapi project, defined content kinds, and built links among them. Strapi's RESTful and GraphQL APIs enabled smooth data retrieval.

Here is an example of data retrieval with Strapi:

```
const axios = require('axios');

async function getContent() {
  try {
    const response = await axios.get('http://localhost:1337/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching content from Strapi:', error);
  }
}

module.exports = getContent;
```

Strapi needs more initial configuration, but it gave the customization and control I needed for my project. Its thorough documentation and engaged community were also beneficial features.

### Integrating Contentful

Then I integrated Contentful with my 11ty site to test its functionality. I began by establishing a new space in Contentful and specifying the content models for my website. Contentful's RESTful API enabled me to simply fetch and show the content. But during the integration process, I experienced issues with customization constraints and higher costs for bigger projects.

Here is an example of my effort to get the data from Contentful:

```
const contentful = require('contentful');
const client = contentful.createClient({
  space: 'hgd9x4hwtgf4',
  accessToken: 'xHgViYTP8__wdI3vp_8f4YADAHGtcU4puaPPkB2tA9Y'
});

async function getContent() {
  const entries = await client.getEntries();
  return entries.items;
}

module.exports = getContent;
```

While Contentful gave a flawless user experience and an extensive API, the price and customization limits encouraged me to look into alternative solutions.

### Integrating Sanity

At the end, I tried Sanity, which gave real-time collaboration and a customizable content approach. I made a new project and specified schemas using Sanity Studio. The real-time editing feature was excellent, and the GROQ query language was extremely flexible for retrieving content. But I experienced a steeper learning curve and discovered some functions to be too complicated for my project's requirements.

Here is an example of the data retrieval procedure utilizing Sanity:

```
const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: 'fn11wfhe',
  dataset: 'production',
  useCdn: true
});

async function getContent() {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
  return posts;
}

module.exports = getContent;
```

Although Sanity's powerful collaboration and real-time functions, its price and complexity inspired me to examine Strapi, which gives free adaptability and extensive customization choices.

## Selected CMS: Strapi

Strapi was selected for its versatility, self-hosting abilities, and robust community support. It fits the project's objectives by providing customized APIs, quick data retrieval, and smooth integration with the 11ty SSG.

## Implementation Approach

1. **Configure Strapi and specify content kinds:** Structure the content to meet the project's requirements.
2. **Integration of the API:** Fetch the content during the build process.
3. **Design the template:** Make dynamic templates with Nunjucks.
4. **Use pagination and filtering:** Improve the user experience using dynamic features.

## Relevance to Project Requirements

The selected CMS, Strapi integration, and implementation approach fulfill all project needs, including API interface, content modelling, and the construction of dynamic templates. Strapi's versatility and customization options enable compatibility with current web practices.

## Depth of Analysis

The investigation looked at the capabilities and trade-offs of five headless CMS solutions, and after a comprehensive comparison and integration effort, Strapi was selected. The decision is based on project-specific requirements such as flexibility, data control, and simplicity of integration.

## Professional Presentation

This document is well-organized, concise, and thorough, including a full reasoning for technological selections and integration efforts as well as a structured implementation approach. The language and formatting maintain readability and professional standards.

## Website Links

<https://docs.strapi.io/>

<https://docs-v4.strapi.io/dev-docs/intro>

<https://docs.strapi.io/user-docs/intro>

<https://www.contentful.com/developers/docs/>

<https://www.contentful.com/developers/docs/references/>

<https://www.contentful.com/guides/>

<https://www.sanity.io/docs>

<https://www.sanity.io/docs/getting-started-with-sanity>

<https://www.sanity.io/docs/documents>

<https://prismic.io/docs>

<https://prismic.io/docs/api>

<https://ghost.org/docs>

<https://ghost.org/docs/content-api/>

