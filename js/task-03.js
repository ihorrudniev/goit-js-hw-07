const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');

  const imagesEl = [];
  for (let i = 0; i < images.length; i += 1) {
    const option = images[i];
    const galleryListEl = document.createElement('li');
    const galleryImagesEl = document.createElement('img');
    galleryImagesEl.src = option.url;
    galleryImagesEl.alt =  option.alt;
    galleryImagesEl.width = 320;
    imagesEl.push(galleryImagesEl)
  };
  
  for (let element of images)
    document.querySelector('#gallery').insertAdjacentHTML('beforeEnd', `<li><img src="${element.url}" width = 320 alt="${element.alt}" ></li>`);

    console.log(galleryEl);
// const galleryListEl = document.querySelector('li');
//   galleryListEl.classList.add('list__item');

