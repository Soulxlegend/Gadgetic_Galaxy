// const slider = document.querySelector('.gg_slider');
// const cards = slider.querySelectorAll('.gg_cards');

// slider.addEventListener('mouseenter', function() {
//   cards.forEach(card => {
//     card.style.animationPlayState = 'paused';
//   });
// });

// slider.addEventListener('mouseleave', function() {
//   cards.forEach(card => {
//     card.style.animationPlayState = 'running';
//   });
// });

// // Optional: Detect when a card reaches the center and resume animation
// cards.forEach(card => {
//   card.addEventListener('animationiteration', function() {
//     const rect = card.getBoundingClientRect();
//     const sliderRect = slider.getBoundingClientRect();
//     const cardCenter = rect.left + rect.width / 2;
//     const sliderCenter = sliderRect.left + sliderRect.width / 2;

//     if (Math.abs(cardCenter - sliderCenter) < 5) { // Adjust tolerance as needed
//       card.style.animationPlayState = 'paused';
//     }
//   });
// });
