// let dom = document.querySelector("body");
let dom2 = document.createElement("section");
let dom3 = document.createElement("section");
dom2.classList.add("second-sixth");
dom3.classList.add("second");


fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        data.products.map(item => {
                dom2.innerHTML += `
                <div>
                    <img src="${item.thumbnail}" alt="">
                    <h3>${item.title}</h3>
                </div>
            `
        })
    })

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        data.products.map(item => {
            dom3.innerHTML += `
                <div class="section">
                    <img src="${item.thumbnail}" alt="">
                    <h3>${item.title}</h3>
                    <b>${item.price}</b>
                </div>
            `
        })
    })

let dom = document.querySelector("body");
dom.innerHTML +=`
<div>
<nav class="nav">
    <div>
        <img src="./image/Map Pin.png" alt="">
        <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
    </div>
    <div>
        <span>ENG</span>
        <img src="./image/Group.png" alt="">
        <span>USD</span>
        <img src="./image/Group.png" alt="">
        <span>Sign in / Sing up</span>
    </div>
</nav>
<header class="header">
    <div>
        <img src="./image/plant 1.png" alt="">
        <span class="tex">Ecobazar</span>
    </div>
    <div>
        <input type="text" placeholder="Search">
        <button class="btn">Search</button>
    </div>
    <div>
        <img src="./image/Vector (4).png" alt="">
        <img src="./image/Shopping Card.png" alt="">
    </div>
</header>
<div class="black">
    <div>
        <span>Home</span>
        <img src="./image/Group.png" alt="">
        <span>Shop</span>
        <img src="./image/Group.png" alt="">
        <span>Pages</span>
        <img src="./image/Group.png" alt="">
        <span>Blog</span>
        <img src="./image/Group.png" alt="">
        <span>About us</span>
        <span>Contact Us</span>
    </div>
    <div class="phone" >
        <img src="./image/Call Now.png" alt="">
    </div>
</div>
<main class="main">
    <div>
        <img class="big" src="./image/Bannar Big.png" alt="">
    </div>
    <div>
        <img class="img" src="./image/Bannar (6).png" alt="">
        <img src="./image/Bannar (7).png" alt="">
    </div>
</main>
<section>
    <div class="main-section2-div2">
        <div class="main-section2-div2">
            <div>
                <img class="main-section2-img1" src="../image/delivery-truck 1.png" alt="">
            </div>
            <div>
                <b>Free Shipping</b>
                <span class="main-section2-span1">Free shipping on all your order</span>
            </div>
        </div>
        <div class="main-section2-div2">
            <div>
                <img class="main-section2-img1" src="../image/headphones 1.png" alt="">
            </div>
            <div>
                <b>Free Shipping</b>
                <span class="main-section2-span1">Free shipping on all your order</span>
            </div>
        </div>
        <div class="main-section2-div2">
            <div>
                <img class="main-section2-img1" src="../image/shopping-bag.png" alt="">
            </div>
            <div>
                <b>Free Shipping</b>
                <span class="main-section2-span1">Free shipping on all your order</span>
            </div>
        </div>
        <div class="main-section2-div2">
            <div>
                <img class="main-section2-img1" src="../image/package (1).png" alt="">
            </div>
            <div>
                <b>Free Shipping</b>
                <span class="main-section2-span1">Free shipping on all your order</span>
            </div>
        </div>
    </div>
</section>
`
let arr = [
    {
        id: 1,
        img: "./assets/img/olma.png",
        title: "Fresh Fruit",
        price: 14.99
    }
]

dom.appendChild(dom2)
dom.appendChild(dom3)