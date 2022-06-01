import { Rating } from './Star';

document.addEventListener('DOMContentLoaded', () => {

    const rating1 = new Rating('DOCTOR STRANGE V MNOHOVESMÍRU ŠÍLENSTVÍ', 5);
    document.body.appendChild(rating1.element);

    const rating2 = new Rating('TOP GUN: MAVERICK', 2);
    document.body.appendChild(rating2.element);

    // const rating3 = new Rating(3);
    // document.body.appendChild(rating3.element);

    // const rating4 = new Rating(4);
    // document.body.appendChild(rating4.element);

    // const rating5 = new Rating(5);
    // document.body.appendChild(rating5.element);

})



// const textRating = document.querySelector('.rating__value').textContent
// const textRatingEl = document.querySelector('.rating__value');
// const stars = document.querySelectorAll('.rating__star')

// stars.forEach((star, index) => {
//     star.addEventListener('click', (e) => {
//         console.log('The stars NodeList:')
//         console.log(stars)
//         console.log('The clicked star element:')
//         console.log(star)
//         console.log('The index of the clicked star in the NodeList:')
//         console.log(index)
//         console.log('Rating expressed by text:')
//         console.log(textRating)
//         console.log('-------------------------------------------------------------------------')

//         const finalIndex = index + 1;

//         textRatingEl.textContent = finalIndex;

//         for (let i = 0; i < stars.length; i++) {
//             if (i < finalIndex) {
//                 stars[i].classList.add('rating__star--on');
//             } else {
//                 stars[i].classList.remove('rating__star--on');
//             }
//         }

//         // for (let i = finalIndex + 1; i < stars.length; i++) {
//         //     stars[i].classList.remove('rating__star--on');
//         // }


//         console.log(stars);
//     })
// })