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
 
];

const galleryRef = document.querySelector('#gallery');

  const imagesRef = [];
  for (let i = 0; i < images.length; i += 1) {
    const option = images[i];
    const galleryListRef = document.createElement('li');
    const galleryImagesRef = document.createElement('img');
    galleryImagesRef.src = option.url;
    galleryImagesRef.alt =  option.alt;
   
    imagesRef.push(galleryImagesRef)
  };
  
  for (let element of images)
    document.querySelector('#gallery').insertAdjacentHTML('beforeEnd', `<li><img src="${element.url}" width = "320" alt="${element.alt}" ></li>`);

    console.log(galleryRef);


