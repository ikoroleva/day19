export class Rating {
    constructor(header, value) {
        this.header = header;
        this.value = value;
        this.element = document.createElement('div');
        this.element.classList.add('rating');
        this.update(value);
    }

    async sendRating() {
        const res = await fetch('https://test-api.codingbootcamp.cz/api/9c68c1d0/ratings', {
            "method": "POST",
            "body": JSON.stringify({
                "rating_subject": this.header,
                "rating_value": this.value
            }),
            "headers": {
                'Content-Type': 'application/json'
            }
        });
        const response = await res.json();
        console.log(response);
    }

    setRating(stars, rating) {

        this.element.querySelector('.rating__value').textContent = rating;

        for (let i = 0; i < stars.length; i++) {
            if (i < rating) {
                stars[i].classList.add('rating__star--on');
            } else {
                stars[i].classList.remove('rating__star--on');
            }
        }
    }

    update() {

        this.element.innerHTML = `
        <h1 class="rating__header"></h1>
        <div class="rating__value">0</div>
          <div class="rating__stars">
                <div class="rating__star"></div>
                <div class="rating__star"></div>
                <div class="rating__star"></div>
                <div class="rating__star"></div>
                <div class="rating__star"></div>
            </div>
        <button class = "rating__button">Save rating</button>`

        this.element.querySelector('.rating__header').textContent = this.header;

        const stars = this.element.querySelectorAll('.rating__star');
        this.setRating(stars, this.value);

        stars.forEach((star, index) => {
            star.addEventListener('click', (e) => {
                const finalIndex = index + 1;
                this.setRating(stars, finalIndex);
            })
        });

        const textRatingButton = this.element.querySelector('.rating__button');
        textRatingButton.addEventListener('click', async () => {
            await this.sendRating();
        });
    }
}