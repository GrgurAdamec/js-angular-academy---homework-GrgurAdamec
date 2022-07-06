const addButton = document.querySelector('button');
const text = document.getElementById('text');
const rating = document.getElementById('rating')
const reviewsElement = document.getElementById('reviews');

const reviewsKey = 'reviews';

const reviews = JSON.parse(localStorage.getItem(reviewsKey));

renderReviews(reviews);

addButton.addEventListener('click', (event) => {
    reviews.push({
        text: text.value,
        rating: rating.value,
    })

    renderReviews(reviews);
})

function renderReviews(reviews) {
        clearReviews();

        reviews.forEach((review) => {
            const listElement = document.createElement('li');
            const spanElement = document.createElement('span');
            const ratingElement = document.createElement('span');
            const removeButton = document.createElement('button');

            removeButton.innerText = 'Remove';

            spanElement.innerText = review.text;
            ratingElement.innerHTML = review.rating + '/5';
            listElement.appendChild(spanElement);
            listElement.appendChild(ratingElement);            
            listElement.appendChild(removeButton);


            removeButton.addEventListener('click', () => {
                const reviewIndex = reviews.findIndex((el) => el === review);
                reviews.splice(reviewIndex, 1);

                renderReviews(reviews);
            })

            reviewsElement.appendChild(listElement);
        });

        saveReviews(reviews);
}

function clearReviews() {
    while (reviewsElement.firstChild) {
        reviewsElement.removeChild(reviewsElement.firstChild)
    }
}

function saveReviews(reviews) {
    localStorage.setItem(reviewsKey, JSON.stringify(reviews))
}