import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "213",
  price: 213,
  description: "A description",
  images: ["https://placeimg.com/640/480/any"],
  categoryId: 1,
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));
