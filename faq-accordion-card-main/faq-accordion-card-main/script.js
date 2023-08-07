const accordians = document.querySelectorAll('.accordian');



accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');
    console.log('hey')
    
    accordian.addEventListener('click', () => {
        console.log('hey')
        icon.classList.toggle('active');
        answer.classList.toggle('active');

    })


});