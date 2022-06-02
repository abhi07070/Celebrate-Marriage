let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function () {
    let hidden = document.getElementById('hidden');

    if (hidden.style.display === 'block') {
        hidden.style.display = 'none';
    } else {
        hidden.style.display = 'block';
    }
})

let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');

let control1 = document.getElementById('control1');
let control2 = document.getElementById('control2');
let control3 = document.getElementById('control3');

control1.addEventListener('click', function () {
    pic1.src = "./Images/Page1.jpg"
    pic2.src = "./Images/Page2.jpg"
    pic3.src = "./Images/Page3.jpg"
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
})
control2.addEventListener('click', function () {
    pic1.src = "./Images/Page2.jpg"
    pic2.src = "./Images/Page1.jpg"
    pic3.src = "./Images/Page3.jpg"
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
})
control3.addEventListener('click', function () {
    pic1.src = "./Images/Page3.jpg"
    pic2.src = "./Images/Page2.jpg"
    pic3.src = "./Images/Page1.jpg"
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
})

