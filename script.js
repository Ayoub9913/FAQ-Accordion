const plus1button = document.querySelector('.plus1');
const minus1button = document.querySelector('.minus1');
const answer1 = document.querySelector('.answer1');

plus1button.addEventListener('click', () => {
    answer1.style.display = "inline-block";
    answer1.classList.add('combined-animation');
    plus1button.style.display = "none";
    minus1button.style.display = "inline-block"; 
    minus1button.style.position='absolute';
    minus1button.style.top='5px';
    minus1button.style.right='10px';


});

minus1button.addEventListener('click', () => {
    answer1.classList.remove('combined-animation');
    answer1.classList.add('reverse-animation');


    setTimeout(() => {
        answer1.style.display = "none"; 
        answer1.classList.remove('reverse-animation'); 
    }, 50);

    minus1button.style.display = "none";
    plus1button.style.display = "inline-block";
});

const plus2button = document.querySelector('.plus2');
const minus2button = document.querySelector('.minus2');
const answer2 = document.querySelector('.answer2');

plus2button.addEventListener('click', () => {
    answer2.style.display = "inline-block";
    answer2.classList.add('combined-animation');
    plus2button.style.display = "none";
    minus2button.style.display = "inline-block"; 
    minus2button.style.position='absolute';
    minus2button.style.top='0.5px';
    minus2button.style.right='10px';
});

minus2button.addEventListener('click', () => {
    answer2.classList.remove('combined-animation');
    answer2.classList.add('reverse-animation');

    setTimeout(() => {
        answer2.style.display = "none"; 
        answer2.classList.remove('reverse-animation'); 
    }, 50);

    minus2button.style.display = "none";
    plus2button.style.display = "inline-block";
});


const plus3button = document.querySelector('.plus3');
const minus3button = document.querySelector('.minus3');
const answer3 = document.querySelector('.answer3');

plus3button.addEventListener('click', () => {
    answer3.style.display = "inline-block";
    answer3.classList.add('combined-animation');
    plus3button.style.display = "none";
    minus3button.style.display = "inline-block"; 
    minus3button.style.position='absolute';
    minus3button.style.top='10px';
    minus3button.style.right='10px';
});

minus3button.addEventListener('click', () => {
    answer3.classList.remove('combined-animation');
    answer3.classList.add('reverse-animation');

    setTimeout(() => {
        answer3.style.display = "none"; 
        answer3.classList.remove('reverse-animation'); 
    }, 50);  // Note: Ensure this duration matches your animation duration

    minus3button.style.display = "none";
    plus3button.style.display = "inline-block";
});

const plus4button = document.querySelector('.plus4');
const minus4button = document.querySelector('.minus4');
const answer4 = document.querySelector('.answer4');

plus4button.addEventListener('click', () => {
    answer4.style.display = "inline-block";
    answer4.classList.add('combined-animation');
    plus4button.style.display = "none";
    minus4button.style.display = "inline-block"; 
    minus4button.style.position='absolute';
    minus4button.style.top='5px';
    minus4button.style.right='10px';
});

minus4button.addEventListener('click', () => {
    answer4.classList.remove('combined-animation');
    answer4.classList.add('reverse-animation');

    setTimeout(() => {
        answer4.style.display = "none"; 
        answer4.classList.remove('reverse-animation'); 
    }, 50);  // Ensure this duration matches your animation duration

    minus4button.style.display = "none";
    plus4button.style.display = "inline-block";
});
