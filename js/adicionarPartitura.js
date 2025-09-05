document.getElementById('partitura').addEventListener('change', function(){
    const fileNameSpan = document.getElementById('fileNome');
    fileNameSpan.textContent = this.files.length > 0 ? this.files[0].name : 'Nenhum arquivo selecionado';
})

const textarea = document.getElementById("obs")
textarea.addEventListener("input", function() {
    this.style.height = "auto"; // reseta altura
    this.style.height = this.scrollHeight + "px"; // ajusta para caber o texto
})

const select = document.getElementById('instrumentacao');
const tagsContainer = document.querySelector('.tags-container')

select.addEventListener('change', () => {
  const selectedOption = select.options[select.selectedIndex];
  const value = selectedOption.value;
  const text = selectedOption.text;

  if (!value) return; // ignora placeholder

  // evita duplicatas
  if ([...tagsContainer.children].some(tag => tag.dataset.value === value)) return;

  // cria tag
  const tag = document.createElement('div');
  tag.classList.add('tag');
  tag.dataset.value = value;
  tag.innerHTML = `${text} <svg class="tagRemover" width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.8837 4.99999L9.81689 1.06724C10.061 0.823087 10.061 0.427244 9.81689 0.183113C9.57274 -0.0610376 9.17689 -0.0610376 8.93276 0.183113L4.99999 4.11628L1.06724 0.183113C0.823087 -0.0610376 0.427244 -0.0610376 0.183113 0.183113C-0.0610181 0.427263 -0.0610376 0.823107 0.183113 1.06724L4.11628 4.99999L0.183113 8.93276C-0.0610376 9.17691 -0.0610376 9.57276 0.183113 9.81689C0.427263 10.061 0.823107 10.061 1.06724 9.81689L4.99999 5.8837L8.93274 9.81689C9.17689 10.061 9.57274 10.061 9.81687 9.81689C10.061 9.57274 10.061 9.17689 9.81687 8.93276L5.8837 4.99999Z" fill="currentColor"/></svg>`

  // remove tag ao clicar no X
  tag.querySelector('.tagRemover').addEventListener('click', () => tag.remove());

  tagsContainer.appendChild(tag);

  select.selectedIndex = 0;
});