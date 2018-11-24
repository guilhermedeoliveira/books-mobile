const fetchBooks = async (query) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );

    const { items } = await response.json();
    return items;
  } catch (error) {
    return console.error(error);
  }
};

export default {
  fetchBooks
};
