// const searchField = document.querySelector("#input");
const searchButton = document.querySelector("#button");
const form = document.querySelector("#frm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  var a = form.elements.input.value;
  const api = await axios.get(`https://api.tvmaze.com/search/shows?q=${a}`);
  const sec = document.querySelector("#data");
  console.log(data);

  //e.firstElementChild can be used.
  var child = sec.lastElementChild;
  while (child) {
    sec.removeChild(child);
    child = sec.lastElementChild;
  }

  for (let res of api.data) {
    if (res.show.image) {
      const card = document.createElement("div");
      card.style.width = "18rem";
      //card.style.display = "flex";
      card.classList.add("card");
      card.classList.add("m-3");

      const cardImage = document.createElement("img");
      cardImage.src = res.show.image.medium;
      cardImage.classList.add("card-img-top");
      const cardTitle = document.createElement("h5");
      cardTitle.innerHTML = res.show.name;
      cardTitle.classList.add("card-title");

      const cardRating = document.createElement("div");
      cardRating.innerHTML = res.show.rating.average;

      //footer
      const footer = document.createElement("div");
      footer.classList.add("card-footer");

      const more = document.createElement("a");
      //a.classList.add("p-2")
      more.href = res.show.url;
      more.innerHTML = "More";
      footer.appendChild(more);

      card.appendChild(cardImage);
      cardTitle.appendChild(cardRating);
      card.appendChild(cardTitle);
      card.appendChild(footer);
      sec.appendChild(card);

      // const image = document.createElement("img");
      // image.src = res.show.image.medium;
      // image.classList.add("m-3");
      // sec.appendChild(image);
    }
  }
});
