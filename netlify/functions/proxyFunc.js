const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    // Define the target URL (Swiggy API endpoint)
    const apiUrl = "https://api.swiggy.com/some-endpoint";

    // Forward the request to the Swiggy API
    const response = await fetch(apiUrl, {
      headers: {
        // Add headers if required by the API
        "Content-Type": "application/json",
      },
    });

    // Parse the response
    const data = await response.json();

    // Return the data
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
