function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const quoteText = data.content; 
            const quoteAuthor = data.author; 
            document.getElementById('quoteDisplay').innerText = `"${quoteText}" \u2014 ${quoteAuthor}`;

        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
            document.getElementById('quoteDisplay').innerText = 'An error occurred while fetching the quote.';
        });
}

window.onload = fetchRandomQuote;



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
// had a little of help from someone else whil making the js
