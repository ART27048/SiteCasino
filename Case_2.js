const cells = 81

const items = [
    {name: 'M4A4', img: 'Skins_Case_2/M4A4_Voy.png', change: 1},
    {name: 'GLOVES', img: 'Skins_Case_2/GLOVES_Forest.png', change: 3},
    {name: 'DEAGLE', img: 'Skins_Case_2/DEAGLE_Kraski.png', change: 8},
    {name: 'AK47', img: 'Skins_Case_2/AK47_Musei.png', change: 10},
    {name: 'USP-S_DAN', img: 'Skins_Case_2/USP-S_Danger.png', change: 12},
    {name: 'P250', img: 'Skins_Case_2/P250_Asimov.png', change: 30},
    {name: 'ZEUS', img: 'Skins_Case_2/ZEUS_Zeus.png', change: 55},
    {name: 'M4A1-S', img: 'Skins_Case_2/M4A1-s_Xrystal.png', change: 75},
    {name: 'USP-S_ANIM', img: 'Skins_Case_2/USP-S_Animal.png', change: 80}
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

    const item = list.querySelectorAll('li')[15]

    list.addEventListener('transitionend', () => {
        isStarted = false
        item.classList.add('active')
        const data = JSON.parse(item.getAttribute('data-item'))

        console.log(data);
    }, {once: true})
}