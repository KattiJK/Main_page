$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

// Табы
const tabNavItems = document.querySelectorAll('.tabs-options__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs-options__button')) {
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}
});



const question = document.querySelectorAll('.questions__content-item')

question.forEach((question) => {
	question.addEventListener('click', () => {
		question.classList.toggle('active')
	})
})

