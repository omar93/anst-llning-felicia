let button = document.getElementById("button")
button.addEventListener('click', e => {
    fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let list = document.getElementById("list")
            data.forEach(item => {
                let url = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`
                let li = document.createElement("li")
                let img = document.createElement("img")
                img.src = url
                li.appendChild(img)
                list.appendChild(li)
            })
        })
})