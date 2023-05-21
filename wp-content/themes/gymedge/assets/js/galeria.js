const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector("#search");

/* Search Product by Textbox */
searchBox.addEventListener('keyup', (e) => {
  const searchText = e.target.value.toLowerCase().trim();

  boxes.forEach((box) => {
    const data = box.dataset.item;
    if (data.includes(searchText)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });

  buttons.forEach((button) => {
    button.classList.remove('btn-clicked');
  });
  buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveBtn(e);
    const btnFilter = e.target.dataset.filter;

    boxes.forEach((box) => {
      const boxFilters = box.dataset.item.split(','); // Splitting multiple data-item keywords into an array
      if (btnFilter === 'all' || boxFilters.includes(btnFilter)) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });
});

function setActiveBtn(e) {
  buttons.forEach((button) => {
    button.classList.remove('btn-clicked');
  });
  e.target.classList.add('btn-clicked');
}