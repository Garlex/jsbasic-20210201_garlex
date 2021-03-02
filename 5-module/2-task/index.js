function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const textBlock = document.querySelector('#text');

  button.addEventListener('click', () => {
    textBlock.hidden = !textBlock.hidden;
  });
}
