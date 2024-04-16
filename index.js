// alert('Hello');

// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Explanation
//  VanillaJS to JQuery
// 1st step
    // I used the dollar($) sign to replace the "document.querySelector". 
    // then I put this "[0]" after the "('.card')" to work the code because without it it doesn't work



// 5th step
    // Same in 1st step I only used the dollar($) sign to replace the "document.querySelector"



// 2nd step
    // I only used "on" to replace the "addEventListener" based on your last discussion.



// 4th step
    // Same as in 2nd step I only used "on" to replace the "addEventListener"



// 3rd step
    // Same as in 2nd step I only used "on" to replace the "addEventListener"