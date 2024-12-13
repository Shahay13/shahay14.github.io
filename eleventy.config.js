const axios = require('axios');

module.exports = function(eleventyConfig) {
  // Passthrough copy for CSS and images.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Watch target for CSS.
  eleventyConfig.addWatchTarget("src/css");

  // Delete dist folder before build.
  eleventyConfig.on('eleventy.before', () => {
    const fs = require('fs');
    const path = 'dist';
    if (fs.existsSync(path)) {
      fs.rmSync(path, { recursive: true });
    }
  });

  // Collections and pagination.
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  });

  // Fetch content from Strapi.
  eleventyConfig.addGlobalData("lab1Solution", async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/lab-1-solution');
      return response.data;
    } catch (error) {
      console.error('Error fetching content from Strapi:', error);
      return [];
    }
  });

  // Fetch content from Strapi.
  eleventyConfig.addGlobalData("lab2Solution", async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/lab-2-solution');
      return response.data;
    } catch (error) {
      console.error('Error fetching content from Strapi:', error);
      return [];
    }
  });

  // Fetch content from Strapi.
  eleventyConfig.addGlobalData("lab3Solution", async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/lab-3-solution');
      return response.data;
    } catch (error) {
      console.error('Error fetching content from Strapi:', error);
      return [];
    }
  });

  // Fetch content from Strapi.
  eleventyConfig.addGlobalData("quantumLeap", async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/quantum-leap');
      return response.data;
    } catch (error) {
      console.error('Error fetching content from Strapi:', error);
      return [];
    }
  });

  // Fetch content from Strapi.
  eleventyConfig.addGlobalData("computingOnTheEdge", async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/computing-on-the-edge');
      return response.data;
    } catch (error) {
      console.error('Error fetching content from Strapi:', error);
      return [];
    }
  });

  // Fetch content from Strapi.
  eleventyConfig.addGlobalData("carPost", async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching content from Strapi:', error);
      return [];
    }
  });

  eleventyConfig.addCollection("twoDoorCars", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/data/car.json").filter(car => car.doors === 2);
  });
  
  eleventyConfig.addCollection("fourDoorCars", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/data/car.json").filter(car => car.doors === 4);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "dist"
    }
  };
};
