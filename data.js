const projectDatas = [
  {
    featuredImage: './assets/images/kadirsalami.jfif',
    name: 'Kadir Salami',
    qualification: 'Founder, Tiidelab Initiative',
    description: 'Mr Kadir Salami is also the pioneer CEO of Techspecialist consulting ltd, a leading tech company in Abuja, Nigeria.',
  },
  {
    featuredImage: './assets/images/celeste.jpg',
    name: 'Celeste Oladokun',
    qualification: 'Program Director, Tiidelab Initiative',
    description: 'Celeste is a Software Engineer based in United Kingdom. She is the Program Director of Tiidelab',
  },
  {
    featuredImage: './assets/images/tukura.jfif',
    name: 'Pishikeni Tukura',
    qualification: 'Quality Assurance Lead, Tiidelab Initiative',
    description: 'Mr Tukura is the Co-founder of Aya. He has proven expertise in fin tech solutions',
  },
  {
    featuredImage: './assets/images/shams.jfif',
    name: 'Shamsudeen Aderoju',
    qualification: 'Program Coordinator, Tiidelab Initiative',
    description: 'Mr Shamsudeen is responsible for the day to day runnings of Tiidelab',
  },
  {
    featuredImage: './assets/images/bigbay.jfif',
    name: 'Ayodele Samuel',
    qualification: 'T.S.E, Tiidelab Initiative',
    description: 'A professional software engineer.',
  },
  {
    featuredImage: './assets/images/arimoro.jfif',
    name: 'Olamilekan E. Arimoro',
    qualification: 'T.S.E, Tiidelab Initiative',
    description: 'A professional software engineer.',
  },
];

document.querySelector('.keynote-speakers').innerHTML = projectDatas
  .map(
    (data) => `
  <div class="mentor">
  <div class="mentor-bg"></div>
  <img src=${data.featuredImage} alt="mentor image" />
  <div class="mentor-description">
  <h3>${data.name}</h3>
  <p class="mentor-qualification">${data.qualification}</p>
  <p class="mentor-about">${data.description}</p
  >
  </div>
  </div>
  `,
  )
  .join('');

function projects() {
  const speaker = Array.from(document.querySelectorAll('.mentor'));
  if (window.innerWidth > 0) {
    for (let i = 2; i < speaker.length; i += 1) {
      speaker[i].classList.add('hide-show-mentor');
    }
  }
}

projects();

function toggle() {
  document.querySelector('#btn').addEventListener('click', () => {
    const speaker = Array.from(document.querySelectorAll('.mentor'));
    for (let i = 2; i < speaker.length; i += 1) {
      speaker[i].classList.toggle('hide-show-mentor');
    }
    const btn = document.querySelector('.btn');
    if (
      btn.innerHTML === 'MORE <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>'
    ) {
      btn.innerHTML = 'LESS <span> <i class="fa fa-angle-up" aria-hidden="true"></i></span>';
    } else {
      btn.innerHTML = 'LESS <span> <i class="fa fa-angle-up" aria-hidden="true"></i></span>';
    }
  });
}
toggle();