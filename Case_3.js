const cells = 81

const items = [
    {name: 'PINK', img: 'Skins_Case_3/GLOVES_Pink.png', change: 2},
    {name: 'GRADIENT', img: 'Skins_Case_3/GLOVES_Gradient.png', change: 5},
    {name: 'PANTERA', img: 'Skins_Case_3/GLOVES_Pantera.png', change: 8},
    {name: 'FOREST', img: 'Skins_Case_3/GLOVES_Forest.png', change: 10},
    {name: 'M4A4_ANGRY', img: 'Skins_Case_3/M4A4_Angry.png', change: 20},
    {name: 'AK47', img: 'Skins_Case_3/AK47_Karkas.png', change: 30},
    {name: 'MAG-7', img: 'Skins_Case_3/MAG-7_hot.png', change: 35},
    {name: 'GLOCK-18', img: 'Skins_Case_3/GLOCK-18_Blocks.png', change: 45},
    {name: 'MP7', img: 'Skins_Case_3/MP7_Happy.png', change: 70},
    {name: 'P250', img: 'Skins_Case_3/P250_Shirp.png', change: 80}
]

function getItem() {
    let item;

    while (!item) {
        const change = Math.floor(Math.random() * 100000)

        items.forEach(elm => {
            if (change < elm.change && !item) item = elm
        })
    }

    return item
}

function generateItems() {
    document.querySelector('.list').remove()
    document.querySelector('.scope').innerHTML = `
        <ul class="list"></ul>
    `
    
    const list = document.querySelector('.list')

    for (let i = 0; i < cells; i++) {
        const item = getItem()

        const li = document.createElement('li')
        li.setAttribute('data-item', JSON.stringify(item))
        li.classList.add('list_item')
        li.innerHTML = `
        <img src="${item.img}" alt="" />
        `

        list.append(li)
    }
}

generateItems()

let isStarted = false
let isFirstStart = true

function start() {
    if (isStarted) return
    else isStarted= true

    if(!isFirstStart) generateItems()
    else isFirstStart = false
    const list = document.querySelector('.list')
    // generateItems()

    

    setTimeout(() => {
        list.style.left = '50%'
        list.style.transform = 'translate3d(-50%, 0, 0)'
    }, 0)

    const item = list.querySelectorAll('li')[10]

    list.addEventListener('transitionend', () => {
        isStarted = false
        item.classList.add('active')
        const data = JSON.parse(item.getAttribute('data-item'))

        console.log(data);
    }, {once: true})
}