export const getProducts = async () => {
  try {
    const response = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json",
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Log the data after calling the function
getProducts()
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
