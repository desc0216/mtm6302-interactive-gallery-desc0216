document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('Container');
    const overlay = document.getElementById('overlay');
    const largeImg = document.getElementById('largeImg');
    const text = document.getElementById('text');

    const imageData = [
        { src: 'images/anshu-a-vqUnGm6vkXA-unsplash.jpg', caption: 'Christmas Ornaments' },
        { src: 'images/ian-chen-nEG_OQ7sVH4-unsplash.jpg', caption: 'Wavey beach' },
        { src: 'images/kamran-abdullayev-h4fD9xlk_UE-unsplash.jpg', caption: 'Ball on abstract object' },
        { src: 'images/masood-aslami-kBDBVa1nSqU-unsplash.jpg', caption: 'Buildings surrounding point of view' },
        { src: 'images/neom-U07mDramqTw-unsplash.jpg', caption: 'Man swimming with fish' },
        { src: 'images/neom-ua-yfFmM_UU-unsplash.jpg', caption: 'Man sitting on sandy hill' },
        { src: 'images/neom-WpOMM4uE-F8-unsplash.jpg', caption: 'Desert lands' },
        { src: 'images/steve-busch-OaKzilJqNv8-unsplash.jpg', caption: 'Starry galaxy' },
        { src: 'images/toa-heftiba-GgyUkSfkLF0-unsplash.jpg', caption: 'People standing in sand' },
        { src: 'images/ussama-azam-6hXVAG-JC3A-unsplash.jpg', caption: 'Palm trees and sunlight' },
        { src: 'images/vadim-sadovski-U2a54VBxYlo-unsplash.jpg', caption: 'Snowy hills' },
        { src: 'images/yichen-wang-0vJvANy9DLo-unsplash.jpg', caption: 'Woman posing in front of buildings' },
    ];

    imageData.forEach((data, index) => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');

        const img = document.createElement('img');
        img.src = data.src;
        img.alt = 'Image ${index + 1}';

        galleryImg.appendChild(img);
        galleryContainer.appendChild(galleryImg);

        // Add click event listener to each image
        img.addEventListener('click', () => {
            showLargeImg(data);
        });
    });

    function showLargeImg(data) {
        largeImg.src = data.src;
        text.textContent = data.caption;
        overlay.style.display = 'flex';

        // Add click event listener to hide enlarged image
        overlay.addEventListener('click', hideLargeImg);
        largeImg.addEventListener('click', hideLargeImg);
    }

    // Hide enlarged image
    function hideLargeImg() {
        overlay.style.display = 'none';
    }
});
