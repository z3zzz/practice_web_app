document.querySelector('#plusButton').addEventListener("click", e => {
    let elem = document.querySelector(".icon-container")
    let curNum = parseInt(elem.dataset.count) 
    elem.dataset.count = curNum + 1
})