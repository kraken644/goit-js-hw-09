const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  formEl.elements.email.value = formData.email ?? '';
  formEl.elements.message.value = formData.message ?? '';
}

formEl.addEventListener('input', ({ target }) => {
  const { name, value } = target;
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  formEl.reset();
});
