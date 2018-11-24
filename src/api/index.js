
const fetchBooks = async (query) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return console.error(error);
  }
};

export default {
  fetchBooks
};
