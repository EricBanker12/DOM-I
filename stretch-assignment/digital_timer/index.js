let timer

document.addEventListener('click', function(event){
    let button = event.target.closest('button')
    if (button) {
        if (button.id == 'start') {
            startTimer()
            button.setAttribute('disabled','')
        }
        if (button.id == 'reset') {
            updateTimer(0)
            updateText('00000')
            document.getElementById('start').removeAttribute('disabled')
        }
    }
})

function startTimer() {
    timer = setInterval(updateTimer, 10, Date.now())
}

function updateTimer(time) {
    let diff = Date.now() - time
    if (diff >= 10000) {
        clearInterval(timer)
        updateText('10000')
    }
    updateText(`000${diff}`.slice(-5))
}

function updateText(str) {
    ['secondTens', 'secondOnes', 'msHundreds', 'msTens'].forEach((id, i)=>{
        let temp = document.getElementById(id)
        temp.innerText = str[i]
    })
    if (str == '00000') document.querySelector('.digits').className = 'digits'
    if (str == '10000') document.querySelector('.digits').className = 'digits redDigit'
}