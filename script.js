let list = document.querySelectorAll('a')
let selectNum = document.getElementById('select-num')
let submit = document.querySelector('.submit');
let ratingBox = document.querySelector('.rating-box')
let thanyouBox = document.querySelector('.thank-you-box')

list.forEach((item) => {
    item.addEventListener('click', (e) => {
        let dataNum = e.target.dataset.num;
        submitHandler()
        selectNum.textContent = dataNum
    })
})
function submitHandler() {
    submit.addEventListener('click', function () {
        ratingBox.classList.add('hide');
        thanyouBox.classList.add('show')
    });
}

