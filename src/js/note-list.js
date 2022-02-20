const refs = {
  noteList: document.querySelector('.list-group'),
  form: document.getElementById('form-js'),
};
const noteArray = JSON.parse(localStorage.getItem('form-data')) ?? [];
console.log(JSON.parse(localStorage.getItem('form-data')));

const createMarkup = ({ url, title, description }) => {
  return `<li class="list-group-item">
  <img src="${url}"/>
  <h3>${title}</h3>
  <p>${description}</p>
  </li>`;
};

const renderMarkup = () => {
   refs.noteList.innerHTML = noteArray.map(createMarkup).join('');
  
};
renderMarkup();



const submitForm = event => {
  event.preventDefault();
  const { url, title, description } = event.currentTarget.elements;
  noteArray.push({ url: url.value, title: title.value, description: description.value });

  // const renderMarkup = noteArray.map(createMarkup).join('');


  // refs.noteList.innerHTML = renderMarkup();
  renderMarkup();

  localStorage.setItem('form-data', JSON.stringify(noteArray));
};

refs.form.addEventListener('submit', submitForm);

