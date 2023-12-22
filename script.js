// Функция для добавления постов на страницу
function addPost(title, body) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Добавляем созданный пост в DOM
      const postContainer = document.getElementById("post-container");

      const postElement = document.createElement("div");
      postElement.innerHTML = `
        <h3>${json.title}</h3>
        <p>${json.body}</p>
      `;

      postContainer.appendChild(postElement);
    })
    .catch((error) => console.log(error));
}

// Получаем необходимые элементы
const titleInput = document.getElementById("title-input");
const bodyInput = document.getElementById("body-input");
const addButton = document.getElementById("add-post-button");

// Обработчик события для кнопки
addButton.addEventListener("click", function () {
  const title = titleInput.value;
  const body = bodyInput.value;

  addPost(title, body);

  // Очищаем инпуты
  titleInput.value = "";
  bodyInput.value = "";
});
