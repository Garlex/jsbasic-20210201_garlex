function hideSelf() {
  const hiderButton = document.querySelector('.hide-self-button');

  hiderButton.addEventListener('click', (event) => {
    event.currentTarget.hidden = true;
  });
}
