let list = document.querySelectorAll('a')
let selectNum = document.getElementById('select-num')
let submit = document.querySelector('.submit');
let ratingBox = document.querySelector('.rating-box')
let thankyouBox = document.querySelector('.thank-you-box')

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
        thankyouBox.classList.add('show')
    });
}

// 這是註解