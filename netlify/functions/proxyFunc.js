const fetch = require("node-fetch");
import fetch from "node-fetch";

const handler = async (event, context) => {
  try {
    // Define the target URL (Swiggy API endpoint)
    // const apiUrl = "https://api.swiggy.com/some-endpoint";
    const apiUrl =
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5770435&lng=88.4497761&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

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

export default handler;
