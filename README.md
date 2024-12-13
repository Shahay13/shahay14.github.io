# Read Me

---

## Description and Instructions of Strapi Project Execution

### Description

This project was created with Strapi, a robust headless CMS that allows me to manage and publish content using RESTful or GraphQL APIs. Strapi is very adaptable and compatible with many modern web development standards, making it a great choice for flexible content management.

### Instructions

1. Open Visual Studio Code, open the folder, and select the folder, eleventy.

2. In Visual Studio Code, launch a new terminal.

3. Use the cd command to change the directory to strapi-project.

- cd strapi-project

4. Run the specified command to install every important component.

- npm install

5. To begin the Strapi development server, use the following command.

- npm run develop

6. Open a web browser and go to <http://localhost:1337/> to enter my Strapi site live.

7. To enter the Strapi admin panel to manage the content, please log in with my credentials.

- Email: takik123@gmail.com
- Password: Takio123nbt,,,

---

## Description and Instructions of Eleventy Website Execution

### Description

This website was created with Eleventy (11ty), a simple and flexible static site generator that converts templates and data files into static HTML pages. Eleventy supports HTML, Markdown, and other templating languages, giving it an adaptable option for developers.

### Instructions

1. Open a new terminal in Visual Studio Code.

2. Ensure the directory is eleventy.

3. To install Eleventy and store it in my project's package.json, run the command.

- npm install @11ty/eleventy

4. Run the Eleventy command to process Markdown files and output them to the dist folder.

- npx @11ty/eleventy

5. To begin a hot-reloading local web server, run the command --serve.

- npx @11ty/eleventy --serve

6. Open <http://localhost:8080/> in a Google Chrome web browser to see my Eleventy site live.

---

## Description and Instructions of Netlify Functions Execution

### Description

This project integrates a serverless function using Netlify Functions to handle backend logic and a contact form that submits user input to the serverless function. The serverless function uses the SendGrid API to send emails with the form data.

### Instructions

1. Open a New Terminal in Visual Studio Code:

- Use the terminal to navigate to my project directory.
- cd eleventy

2. Set Up Environment Variables:

- Create a `.env` file in my project root and add my SendGrid API key (ensure this file is ignored by Git).
- SENDGRID_API_KEY=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

3. Install Required Packages:

- Run the following command to install the dependencies (SendGrid and dotenv):
- npm install

4. Run the Project Locally:

- Use Netlify's CLI to run my project locally.
- npm install -g netlify-cli
- netlify dev

5. Open the Localhost Link:

- Open <http://localhost:8081/> in a Google Chrome web browser to see my project site live.

---

## Documentation of Content Filtering for Custom Schema

### Overview

In Assignment 2, I sought to develop content filtering for a custom schema using the Eleventy static site generator. This included creating a custom schema in Strapi, retrieving the data, and incorporating filtering capability into Eleventy.

### Implementation Attempts

#### Step 1: Configure the CMS Schema

I set up the custom schema in Strapi to match the structure of the existing .json data file. The schema had the following fields:

- id
- name
- make
- doors
- wheels
- sound
- image

#### Step 2: Retrieve Data from Strapi

I set Eleventy to retrieve data from Strapi. This is how I set it up.
In eleventy.config.js, I provided the appropriate configuration to fetch data from Strapi:

```
eleventyConfig.addGlobalData("carPost", async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching content from Strapi:', error);
    return [];
  }
});
```

#### Step 3: Implement Filtering

I tried to filter the content using Eleventy collections. The idea was to filter cars depending on their number of doors. Here is the collection setup:
In the eleventy.config.js file, I tried building collections to filter automobiles:

```
eleventyConfig.addCollection("twoDoorCars", function(collectionApi) {
  return collectionApi.getFilteredByGlob("src/data/car.json").filter(car => car.doors === 2);
});

eleventyConfig.addCollection("fourDoorCars", function(collectionApi) {
  return collectionApi.getFilteredByGlob("src/data/car.json").filter(car => car.doors === 4);
});
```

### Issues and challenges

1. Data Structure Mismatches:

- Eleventy’s expected data structures did not match the actual data retrieved from Strapi. This resulted in issues while trying to render filtered material.

2. Difficulties with Dynamic Fetching:

- Obtaining dynamic data during construction was challenging. The data was not always available during the construction, resulting in incomplete or failed builds.

3. Pagination Integration:

- Combining pagination and filtered content adds complexity. It was difficult and error-prone to ensure that pagination functioned properly with filtered collections.

4. Image Hosting and Display:

- Configuring templates for proper image hosting and display requires additional steps. Image paths or URLs did not always match the data retrieved.

### Conclusion

Despite several hurdles, major efforts were made to align the bespoke schema with modern online principles and Eleventy setups. The documentation contains the processes followed, code samples, and challenges encountered. Future work can expand on this base to create fully functioning content filtering.
