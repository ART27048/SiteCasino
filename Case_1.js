const cells = 81

const items = [
    {name: 'DEAGLE', img: 'Skins_Case_1/Deagle_Write.png', change: 1},
    {name: 'AWP', img: 'Skins_Case_1/AWP_4erb.png', change: 15},
    {name: 'FAMAS', img: 'Skins_Case_1/Famas_Valents.png', change: 25},
    {name: 'AK47', img: 'Skins_Case_1/Ak47_Elite.png', change: 35},
    {name: 'CZ75', img: 'Skins_Case_1/cz75.png', change: 45},
    {name: 'BERETS', img: 'Skins_Case_1/Berets_Arrow.png', change: 60},
    {name: 'AUG', img: 'Skins_Case_1/AUG_Tiffani.png', change: 75}
]


//Создание шансов с помощью Math
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

//Создание списка на котором будут ячейки

function generateItems() {
    document.querySelector('.list').remove()
    document.querySelector('.scope').innerHTML = `
            <ul class="list"></ul>
    `
    const list = document.querySelector('.list')


//Генерация ячеек
    for (let i = 0; i < cells; i++) {
        const item = getItem()

//Добавление ячеек в список
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


//Создание функции которая будет прокручивать лист
function start() {
    if (isStarted) return
    else isStarted = true

    if(!isFirstStart) generateItems()
    else isFirstStart = false
    const list = document.querySelector('.list')
    // generateItems()

    
//Анимация прокрутки рулетки
    setTimeout(() => {
        list.style.left = '50%'
        list.style.transform = 'translate3d(-50%, 0, 0)'
    }, 0)

    const item = list.querySelectorAll('li')[15]


//Добавления анимации рулетки
    list.addEventListener('transitionend', () => {
        isStarted = false
        item.classList.add('active')
        const data = JSON.parse(item.getAttribute('data-item'))

        console.log(data);
    }, {once: true})
}