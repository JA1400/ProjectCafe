const oBtn = document.querySelector('.open-btn');
const mLinks = document.querySelector('.m-links')
const overLay = document.querySelector('.body-overlay')
const mainC = document.querySelector('main')
const form = document.querySelector('.contact-form')
const sentM = document.querySelector('#m-sent')
const gImages = document.querySelectorAll('.parent-node');
const menuHeaders = document.querySelectorAll('.menu-table');
const mCoffee = [
    ['Latte', '$4.80', '$5.65', '$6.50', 'Espresso w/ steamed milk and milk foam.'],
    ['Americano', '$4.45', '$5.25', '$6.10', 'Rich espresso topped with water.'],
    ['Mocha', '$4.90', '$5.80', '$6.65', 'Espresso mixed with chocolate sauce and milk.'],
    ['Cappuccino', '$4.50', '$5.30', '$6.15', 'Espresso, steamed milk and a layer of milk foam.'],
    ['Macchiato', '$4.80', '$5.50', '$6.35', 'Rich espresso with steamed milk.'],
    ['Cold Brew', '$4.60', '$5.50', '$6.30', 'Coffee grounds slow-steeped in cool water.']
]
const mOtherD = [
    ['Hot Chocolate', '$4.80', '$5.65', '$6.50', 'Topped with marshmallows.'],
    ['Lemonade', '$4.45', '$5.25', '$6.10', 'Homemade lemonade.'],
    ['Orange Juice', '$4.50', '$5.30', '$6.15', 'Made from freshly squeezed oranges'],
    ['Apple Juice', '$1.50', '$2.50', '$3.50', 'Organic option available too!'],
    ['Milk', '$1.50', '$2.00', '$2.50', 'Whole, 2%, and Fat-Free'],
    ['Soda', '$.99', '$1.25', '$1.49', 'Coke, Diet Coke, Sprite & Dr. Pepper']
]
const mEF = [
    ['Vanilla', 'Caramel', 'Pumpkin', 'Butter Pecan', 'Caramel Macadamia', 'Lavender Raspberry', 'Hazelnut', 'Coconut', 'Peppermint'],
    ['Whole', '2%', 'Fat-Free', 'Soy', 'Coconut', 'Almond', 'Oat', 'Breve', 'Heavy Whipping Cream']
]
const mPanC = [
    ['Buttermilk', '$7.99', 'Starts with a stack of 3.'],
    ['Strawberry Banana', '$9.99', 'Starts with a stack of 3.'],
    ['Blueberry', '$10.99', 'Starts with a stack of 4.'],
    ['Chocolate Chip', '$10.99', 'Starts with a stack of 4.']
]
const mSandW = [
    ['BLT', '$5.99', 'Classic BLT with mayo on texas toast.'],
    ['Hot Ham & Cheese', '$6.99', 'Deli ham w/ choice of cheese on a pretzel roll.'],
    ['The Rancher', '$6.99', 'Cheddar cheese, Turkey, Bacon and ranch on texas toast.'],
    ['The Cuban', '$7.99', 'Pulled pork, ham, swiss cheese pickles and mustard on texas toast.'],
    ['Deli Sandwich', '$5.99', 'Turkey or ham w/ cheddar cheese, lettuce, tomato, mayo and mustard on a kaiser roll.']
]
const mSS = [
    ['Chop Salad', '$6.99', 'Romaine, cucumber, tomato, bacon, bleu cheese crumble.'],
    ['Chef Salad', '$7.99', 'Romaine, cucumber, tomato, turkey, ham, cheddar and swiss cheeses.'],
    ['Cuban Salad', '$9.99', 'Romaine, cucumber, tomato, pickle swiss cheese, ham, pulled pork, served w/ mustard vinagrette'],
    ['Cali Club Salad', '$7.99', 'Romaine, cucumber, tomato, bacon, turkey, and guacamole, served w/ ranch'],
    ['Cup of Soup', '$2.99', '8oz cup of homemade soup. Changes daily!']
]
const mDessert = [
    ['Pie', '$5.99', 'Blueberry, Pecan, Apple, Pumpkin, Cherry...'],
    ['Muffin', '$3.99', 'Banana, Chocolate Chip, Blueberry, Apple Cinnamon...'],
    ['Scone', '$3.99', 'Blueberry, Lemon, Cheese, Cinnamon, Creame...'],
    ['Cookies', '$1.99', 'Chocolate Chip, Sugar, Oatmeal Rasin, Shortbread...']
]

const toggleMenu = () => {
    mLinks.classList.toggle('active')
    overLay.classList.toggle('active')
    mainC.classList.toggle('active')
    oBtn.classList.toggle('active')
}

const inputError = () => {
    let error = false;
    for (let i = 0; i < 4; i++) {
        if (!form.elements[i].value) {
            form.elements[i].classList.add('error')
            error = true
        } else {
            form.elements[i].classList.remove('error')
        }
    }
    return error;
}

const validForm = (tORf) => {
    if (tORf) { return }
    for (let i = 0; i < 4; i++) {
        form.elements[i].classList.add('success')
        form.elements[i].disabled = true;
        sentM.style.display = 'block';
    }
    form.elements[4].disabled = true;
}

const imageLoader = () => {
    let type = ['coffee', 'food', 'dessert']
    for (let i = 0; i < gImages.length; i++) {
        gImages[i].childNodes[1].style.backgroundImage =
            `linear-gradient(rgba(0, 0, 0, 0.067), rgba(0, 0, 0, 0.067)), url('images/${type[i]}1.jpg')`
    }
    for (let j = 0; j < gImages.length; j++) {
        for (let i = 5; i > 1; i--) {
            let newArticle = document.createElement("article");
            let newDiv = document.createElement('div');
            newArticle.classList.add('gallery-images');
            newDiv.classList.add('gallery-bg', 'fluid-img')
            newDiv.style.backgroundImage =
                `linear-gradient(rgba(0, 0, 0, 0.067), rgba(0, 0, 0, 0.067)), url('images/${type[j]}${i}.jpg')`;
            newArticle.appendChild(newDiv);
            gImages[j].insertAdjacentElement('afterend', newArticle);
        }
    }
}

const dFMenuLoader = (itemArr, num, mType) => {
    console.log(itemArr, num, mType);
    let loopTimes = (mType === 'd') ? 4 : 2;
    for (let x = 0; x < itemArr.length; x++) {
        let newRow = document.createElement('div');
        newRow.classList.add('menu-row');
        let newItem = document.createElement('div');
        newItem.classList.add(`${mType}-item`);
        let newH4 = document.createElement('h4');
        newH4.innerText = itemArr[x][0];
        newItem.appendChild(newH4);
        newRow.appendChild(newItem);
        for (let i = 1; i < loopTimes; i++) {
            newItem = document.createElement('div');
            newItem.classList.add(`${mType}-price`)
            newH4 = document.createElement('h4');
            newH4.innerText = itemArr[x][i];
            newItem.appendChild(newH4)
            newRow.appendChild(newItem)
        }
        menuHeaders[num].appendChild(newRow);
        newRow = document.createElement('div');
        newRow.classList.add('menu-row', 'p-row')
        let newP = document.createElement('p');
        newP.innerText = itemArr[x][loopTimes];
        newRow.appendChild(newP);
        menuHeaders[num].appendChild(newRow);
    }
}

const eFMenuLoader = (itemArr) => {
    for (let i = 0; i < itemArr.length; i++) {
        for (let j = 0; j < itemArr[i].length; j++) {
            const extrasHeader = document.querySelectorAll('.extras-col');
            let newH4 = document.createElement('h4');
            newH4.innerText = itemArr[i][j]
            extrasHeader[i].appendChild(newH4)
        }
    }
}

const loadMenus = () => {
    try {
        dFMenuLoader(mCoffee, 0, 'd')
        dFMenuLoader(mOtherD, 1, 'd')
        dFMenuLoader(mPanC, 2, 'f')
        eFMenuLoader(mEF)
        dFMenuLoader(mSandW, 3, 'f')
        dFMenuLoader(mSS, 4, 'f')
        dFMenuLoader(mDessert, 5, 'f')
    } catch (error) { }
}

const formValidation = () => {
    try {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(form.elements[0].value);
            validForm(inputError());
        })
    } catch (error) { }
}

const loadGallery = () => {
    try {
        imageLoader();
    } catch (error) { }
}

loadMenus();
loadGallery();
formValidation();
oBtn.addEventListener('click', toggleMenu)
