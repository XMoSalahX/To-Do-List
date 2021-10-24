window.onload = function() {
    let add = document.querySelector(".add")
    let input = document.querySelector("input")
    let taskes = document.querySelector(".taskes")
    let id = Date.now()
    var arr = []
    if (window.localStorage.form) {
        arr = JSON.parse(localStorage.form)
        for (i = 0; i < arr.length; i + 1) {
            addatas(arr[i])
        }
    }
    add.onclick = addatas

    function addatas(dataIN) {
        if (input.value !== "" || window.localStorage.form) {
            let formElement = document.createElement("form")
            formElement.classList = "form new"
            formElement.setAttribute("id", `${id}`)
            taskes.appendChild(formElement)
            var inputSpan = document.createElement("span")
            inputSpan.classList = "input"
            inputSpan.innerHTML = dataIN
            if (input.value !== "") {
                arr.push(input.value)
                inputSpan.innerHTML = input.value
            }
            formElement.appendChild(inputSpan)
            let removeSpan = document.createElement("span")
            removeSpan.classList = `add remove ${id}`
            removeSpan.innerHTML = "Remove"
            formElement.appendChild(removeSpan)
            window.localStorage.form = JSON.stringify(arr)
            input.value = ""
        }
        let alltaskes = document.querySelectorAll(".remove")

        // console.log(alltaskes[0])
        for (i = 0; i <= alltaskes.length - 1; i++) {
            alltaskes[i].onclick = function() {
                arr = arr.filter((e) => e != this.previousElementSibling.innerHTML)
                window.localStorage.form = JSON.stringify(arr)
                console.log(window.localStorage.form)
                this.parentElement.remove()
            }
        }
    }
}