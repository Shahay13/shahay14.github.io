---
layout: base
title: Lab 1 Solution
date: 2024-11-10
permalink: "/blogs/lab-1-solution/"
---

# Lab 1 Solution

---

**Author:** Takirul

**Published on:** 2024-11-09

### Clarity of Scope Definition

The objective of this project is to make a modern web development project with 11ty that shows best techniques like building processes, organizing content, and templating. The project will have:
- Structure using eleventy.config.js
- Employ of a templating engine
- Groups and paging
- Front Material with Metadata
- Reusable design folders
- Constant resource management
- Develop procedure
- Markdown contents

### Justification of Technology Choices

3 Template Engines:
1. Liquid
2. Markdown
3. Nunjucks

Liquid is an easy, secure template language that was originally designed for Shopify. Its security and ease of use make it a popular option for static site generators.

**Advantages:**
- Easy to understand and utilize.
- Made to be secure and safe.
- Compatible with static website generators such as 11ty and Jekyll.

**Disadvantages:**
- In comparison to Nunjucks, it is less adaptable to complicated logic.

Markdown is a lightweight markup language and has an easy syntax for organizing text. It is used to format text and turn it into HTML that is solid in structure. It was made to be easy to read and write by Aaron Swartz and John Gruber in 2004.

**Advantages:**
- The syntax is basic, making it easy to learn and use.
- Many platforms and tools are widely supported and compatible with one another.
- Improves the readability of raw text files.

**Disadvantages:**
- There are few choices for complicated formatting.
- Extra processing is needed to convert to HTML for web use.

Nunjucks is a powerful JavaScript template engine based on Jinja 2. It is very adaptable and can handle complicated logic, making it best for dynamic content rendering.

**Advantages:**
- Enables complicated filtering and reasoning.
- Template rendering is efficient.
- Established with a huge user base.

**Disadvantages:**
- Slightly steeper than simpler engines.

### Selected Template Engine: Markdown

Markdown was selected for this project because it is easy and clear. Its simple syntax enables quick and easy content development, and it works nicely with static site generators like 11ty. This makes it an ideal fit for a project designed for showing best practices in modern web development.

### Static Site Generation (SSG)

Static site generators (SSGs) are programs that convert templates and content into static HTML files. This strategy improves performance, increases security, and makes deployment easier.

### Some SSG Applications

1. Jekyll:
    - Pros: Established environment, many plugins, and GitHub Pages interaction.
    - Cons: Longer build times and Ruby reliance.
2. Hugo:
    - Pros: Very quick builds, written in Go, and flexible content management.
    - Cons: Has a greater learning curve and fewer plugins than Jekyll.
3. Gatsby:
    - Pros: React-based, with a robust plugin ecosystem, ideal for dynamic content.
    - Cons: Large sites require a more complicated infrastructure and take longer to create.
4. Next.js:
    - Pros: Hybrid SSG and SSR capabilities, react-based, strong features.
    - Cons: May be overkill for simple static pages, and the configuration is more involved.
5. Hexo:
    - Pros: Quick builds, easy setup, and a diverse plugin ecosystem.
    - Cons: Less flexible than others and requires JavaScript.

### Configuration in 11ty

The build process can be customized through the configuration file (.eleventy.js). The key settings are as follows:
- Choose which file types to process (for example, .njk or .md).
- Select files to copy straight to the output (for example, pictures or CSS).
- Group information together for better management and pagination.

### Settings in Use:

- Checks for compliance with the templating engine of choice.
- Makes it easier to manage static assets.
- Organizes material and allows for features like blog posts and pagination.

### Settings to Explore:

- Allows global data to be shared across several templates.
- Use reusable functions to enhance templating possibilities.
- Makes complicated HTML snippets in content files easier to understand.

### Front Matter

Front matter is metadata that comes at the beginning of content files and is usually written in YAML or JSON. It shows information such as the title, date, tags, and layout. In the web environment, front matter helps SSGs in dynamically organizing and rendering material.

### Website Links

<https://www.developerdrive.com/best-javascript-templating-engines/>

<https://colorlib.com/wp/top-templating-engines-for-javascript/>

<https://www.youtube.com/watch?v=rZyNBd1WgVM>

<https://gomakethings.com/the-different-static-site-generators-and-which-one-to-choose/>

<https://www.11ty.dev/>

<https://tomhazledine.com/eleventy-static-site-generator/>

<https://docs.netlify.com/frameworks/eleventy/>

<https://v0-7-1.11ty.dev/docs/config/>

<https://www.11ty.dev/docs/usage/>

<https://www.11ty.dev/docs/config/>

<https://www.11ty.dev/docs/>

