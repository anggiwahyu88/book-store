const url = `https://www.googleapis.com/books/v1/volumes?q=progamming&filter=free-ebooks`;
console.log(url);
const datas = []
fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data[0]);
    if (data.items) {
      data.items.forEach(book => {
        const title = book.volumeInfo.title;
        
        datas.push({
            title,
            img:book?.volumeInfo?.imageLinks?.thumbnail||"",
            access:book.accessInfo.webReaderLink,
            // description:.textSnippet
        })
      });
      console.log(datas);
    } else {
      console.log("No books found.");
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


  