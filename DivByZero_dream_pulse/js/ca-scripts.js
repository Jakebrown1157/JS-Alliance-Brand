var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    let tmHeader = document.getElementById('tm-header')
    tmHeader.textContent = customerName

    let introHeader = document.getElementById('introheader')
    introHeader.textContent = customerName
};

function toggleColors() {
    let newClassName = document.querySelectorAll('.tm-white-rect')
    newClassName.className = 'tm-blue-rect'
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
};

function hideElement() {
let hiddenElements = document.querySelector('.tm-social-links')
hiddenElements.style.visibility = 'none';
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->

};

 function addText() {
let intropara1 = document.getElementById('intropara1')
intropara1.textContent =  'Alliance was founded in 1931 by Albert Daniels.'

let intropara2 = document.getElementById('intropara2')
intropara2.textContent =  'The company is a leader in P.C. Manufacturing'

let aboutpara1 = document.getElementById('aboutpara1')
aboutpara1.textContent = 'We deliver the best service this side of creation'

let aboutpara2 = document.getElementById('aboutpara2')
aboutpara2.textContent = 'Our motto is satisfaction guaranteed'

let addresspara = document.getElementById('addresspara')
addresspara.textContent = '1-800-565-5656'
    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

}; 



