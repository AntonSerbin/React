export function fetchData(query) {
const search = `https://api.themoviedb.org/3${query}`;
  // console.log("query", search);
  return  fetch(search)
    .then(response=> {
      if (response.ok) {
        return response.json(); //получаем строку
        }
      throw new Error(
      response.statusText
      );
    })
    .then(data=>data.results)  //получаем массив
    .catch(error => console.log(error)
    )
};