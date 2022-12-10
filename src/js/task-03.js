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

const gallerEl = document.querySelector('.gallery');

const makeGallery = ({ url, alt }) => {
    const imageItem = document.createElement('li');
    imageItem.style.display = 'flex';
    imageItem.style.justifyContent = 'center';

    const imageEl = `<image src='${url}' alt='${alt}'/>`;

    imageItem.insertAdjacentHTML('beforeend', imageEl);
    return imageItem;
};

const elements = images.map(makeGallery);

gallerEl.append(...elements);
