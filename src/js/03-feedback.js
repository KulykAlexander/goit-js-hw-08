import throttle from 'lodash.throttle';
const formEL = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {
  email: emailEl.value,
  message: messageEl.value,
};

formEL.addEventListener('input', throttle(saveForm, 500));
formEL.addEventListener('submit', onSubmitForm);

loadForm();

function saveForm(e) {
  e.preventDefault();
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.target.reset();
  console.log(
    'Local Storage:',
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
  );
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function loadForm() {
  const loadData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (loadData) {
    emailEl.value = loadData.email || 0;
    messageEl.value = loadData.message || 0;
  }
}
