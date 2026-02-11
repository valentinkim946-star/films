const films = [
    {
    id: 1,
    title: "Wireless Mouse",
    price: 25,
    category: "Electronics",
    stock: 120,
    rating: 4.5,
    brand: "Logitech",
    isAvailable: true,
    image: "https://picsum.photos/id/101/300/300"
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: 85,
    category: "Electronics",
    stock: 60,
    rating: 4.8,
    brand: "Redragon",
    isAvailable: true,
    image: "https://picsum.photos/id/102/300/300"
  },
  {
    id: 3,
    title: "Gaming Headset",
    price: 70,
    category: "Electronics",
    stock: 45,
    rating: 4.6,
    brand: "HyperX",
    isAvailable: true,
    image: "https://picsum.photos/id/103/300/300"
  },
  {
    id: 4,
    title: "USB-C Cable",
    price: 10,
    category: "Accessories",
    stock: 300,
    rating: 4.3,
    brand: "Baseus",
    isAvailable: true,
    image: "https://picsum.photos/id/104/300/300"
  },
  {
    id: 5,
    title: "Power Bank 20000mAh",
    price: 40,
    category: "Accessories",
    stock: 80,
    rating: 4.7,
    brand: "Xiaomi",
    isAvailable: true,
    image: "https://picsum.photos/id/104/300/300"
  },

  {
    id: 6,
    title: "Smart Watch",
    price: 120,
    category: "Electronics",
    stock: 35,
    rating: 4.4,
    brand: "Samsung",
    isAvailable: true,
    image: "https://picsum.photos/id/106/300/300"
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    price: 55,
    category: "Electronics",
    stock: 90,
    rating: 4.6,
    brand: "JBL",
    isAvailable: true,
    image: "https://picsum.photos/id/107/300/300"
  },
  {
    id: 8,
    title: "Laptop Stand",
    price: 30,
    category: "Accessories",
    stock: 150,
    rating: 4.2,
    brand: "Ugreen",
    isAvailable: true,
    image: "https://picsum.photos/id/108/300/300"
  },
  {
    id: 9,
    title: "Webcam HD",
    price: 50,
    category: "Electronics",
    stock: 40,
    rating: 4.1,
    brand: "A4Tech",
    isAvailable: true,
    image: "https://picsum.photos/id/109/300/300"
  },
  {
    id: 10,
    title: "Monitor 24 inch",
    price: 180,
    category: "Electronics",
    stock: 25,
    rating: 4.7,
    brand: "LG",
    isAvailable: true,
    image: "https://picsum.photos/id/110/300/300"
  },

  {
    id: 11,
    title: "Office Chair",
    price: 210,
    category: "Furniture",
    stock: 15,
    rating: 4.5,
    brand: "IKEA",
    isAvailable: true,
    image: "https://picsum.photos/id/111/300/300"
  },
  {
    id: 12,
    title: "Desk Lamp",
    price: 35,
    category: "Furniture",
    stock: 70,
    rating: 4.3,
    brand: "Philips",
    isAvailable: true,
    image: "https://picsum.photos/id/112/300/300"
  },
  {
    id: 13,
    title: "Backpack",
    price: 65,
    category: "Fashion",
    stock: 50,
    rating: 4.4,
    brand: "Nike",
    isAvailable: true,
    image: "https://picsum.photos/id/113/300/300"
  },
  {
    id: 14,
    title: "Sneakers",
    price: 95,
    category: "Fashion",
    stock: 40,
    rating: 4.6,
    brand: "Adidas",
    isAvailable: true,
    image: "https://picsum.photos/id/114/300/300"
  },
  {
    id: 15,
    title: "T-Shirt",
    price: 20,
    category: "Fashion",
    stock: 200,
    rating: 4.2,
    brand: "Puma",
    isAvailable: true,
    image: "https://picsum.photos/id/115/300/300"
  },

  {
    id: 16,
    title: "Jeans",
    price: 50,
    category: "Fashion",
    stock: 90,
    rating: 4.3,
    brand: "Levis",
    isAvailable: true,
    image: "https://picsum.photos/id/116/300/300"
  },
  {
    id: 17,
    title: "Coffee Maker",
    price: 110,
    category: "Home",
    stock: 30,
    rating: 4.5,
    brand: "Bosch",
    isAvailable: true,
    image: "https://picsum.photos/id/117/300/300"
  },
  {
    id: 18,
    title: "Electric Kettle",
    price: 45,
    category: "Home",
    stock: 65,
    rating: 4.4,
    brand: "Tefal",
    isAvailable: true,
    image: "https://picsum.photos/id/118/300/300"
  },
  {
    id: 19,
    title: "Blender",
    price: 75,
    category: "Home",
    stock: 40,
    rating: 4.1,
    brand: "Philips",
    isAvailable: true,
    image: "https://picsum.photos/id/119/300/300"
  },
  {
    id: 20,
    title: "Microwave Oven",
    price: 160,
    category: "Home",
    stock: 20,
    rating: 4.6,
    brand: "Samsung",
    isAvailable: true,
    image: "https://picsum.photos/id/120/300/300"
  },

  // 21–50 (same structure)
];



let filomsCantener = document.querySelector('.films')
let input = document.querySelector('input')

input.addEventListener('change', () => {
   filomsCantener.textContent = ''
   for(let i = 0; i < films.length;i++){
      if(films[i].title.toLowerCase().includes(input.value.toLowerCase())){
         filomsCantener.insertAdjacentHTML('afterbegin' ,`
                <div class="films__cantiner">
            <img src="${films[i].image}" alt="">
            <div class="films__text"><h3>${films[i].title}</h3>
            <p>${films[i].release_date}</p></div>
           
        </div>
        
        `)
      }
         
   }
})

let i = 0

while (i < films.length) {
  i++
  filomsCantener.insertAdjacentHTML('afterbegin', `
                
    <div class="text">
<div class="films__cantiner">
<img src="${films[i].image}" alt="${films[i].title}">
</div>
<div class="films__text">
    <p class="films__text1">${films[i].title}</p>
    <p class="films__text2">${films[i].brand}</p>

        </div>
        </div>
        
        `)
}






//     id: 1,
//     title: "Wireless Mouse",
//     price: 25,
//     category: "Electronics",
//     stock: 120,
//     rating: 4.5,
//     brand: "Logitech",
//     isAvailable: true,
//     image: "https://picsum.photos/id/101/300/300"
//   },