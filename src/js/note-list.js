const refs = {
  noteList: document.querySelector('.list-group'),
  form: document.getElementById('form-js'),
};
const noteArray = [];

const createMarkup = ({ url, title, description }) => {
  return `<li class="list-group-item">
  <img src="${url}"/>
  <h3>${title}</h3>
  <p>${description}</p>
  </li>`;
};

const submitForm = event => {
  event.preventDefault();
  const { url, title, description } = event.currentTarget.elements;
  noteArray.push({ url: url.value, title: title.value, description: description.value });

  const renderMarkup = noteArray.map(createMarkup).join('');

  refs.noteList.innerHTML = renderMarkup;
};

refs.form.addEventListener('submit', submitForm);
