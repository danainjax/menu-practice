const menuItems = document.getElementsByClassName('menu-container')[0]
const butt = document.querySelector('button')
console.log(butt)
butt.addEventListener('click', function (e) {
    alert('hit it');
    //grab where you want to append the new elements
    menu.forEach((image)=> {
        //take the menu array and for each jpeg in the array, create an img element
        const img = document.createElement('img')
        //then set the src attribute to the img element and pass in the jpeg
        img.setAttribute('src', image)
        const order = document.createElement('button')
        order.innerText = "ORDER"
        // append the image elements you just created to the menuItems div container
        menuItems.appendChild(img);
        menuItems.append(order)
    })
})


//how would we do this with += ??? Go check the brews lecture/lab
//but before we do/ add a simple event listener for a button click? // completed