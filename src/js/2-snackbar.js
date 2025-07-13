import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
window.showCaution = function () {
  iziToast.warning({
    title: 'Caution',
    message: '⚠️ You forgot important data',
    position: 'topRight',
  });
};

window.showInfo = function () {
  iziToast.info({
    title: 'Info',
    message: '👋 Hello, Welcome!',
    position: 'topRight',
  });
};

window.showImage = function () {
  iziToast.show({
    title: 'Hello!',
    message: 'Do you like it?',
    image: '/src/img/Mask group.jpg',
    position: 'topRight',
  });
};

window.showFull = function () {
  iziToast.show({
    title: 'Confirmation',
    message: '<strong>Hey</strong> What would you like to add?',
    image: '/src/img/Mask group.jpg',
    position: 'topRight',
    buttons: [
      [
        '<button>Photo</button>',
        (instance, toast) => {
          instance.hide({ transitionOut: 'fadeOut' }, toast);
          console.log('User clicked Photo');
        },
        true,
      ],
      [
        '<button>Video</button>',
        (instance, toast) => {
          instance.hide({ transitionOut: 'fadeOut' }, toast);
          console.log('User clicked Video');
        },
      ],
      [
        '<button>Text</button>',
        (instance, toast) => {
          instance.hide({ transitionOut: 'fadeOut' }, toast);
          console.log('User clicked Text');
        },
      ],
    ],
  });
};

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
