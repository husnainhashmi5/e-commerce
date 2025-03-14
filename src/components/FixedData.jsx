const productsData = [
  {
    "_id": "aaaaa",
    "name": "Women Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 100,
    "image": [
      "/src/assets/p_img1.png"
    ],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": "M,L,XL",
    "date": 1716634345448,
    "bestseller": true,
    "brand": ""
  },
  {
    "_id": "aaaab",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 200,
    "image": [
      "/src/assets/p_img2_1.png",
      "/src/assets/p_img2_2.png",
      "/src/assets/p_img2_3.png",
      "/src/assets/p_img2_4.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "date": 1716621345448,
    "bestseller": true,
    "brand": "Dadybux"
  },
  {
    "_id": "aaaac",
    "name": "Girls Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 220,
    "image": [
      "/src/assets/p_img3.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "L",
      "XL"
    ],
    "date": 1716234545448,
    "bestseller": true,
    "brand": "Irha"
  },
  {
    "_id": "aaaad",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 110,
    "image": [
      "/src/assets/p_img4.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "XXL"
    ],
    "date": 1716621345448,
    "bestseller": true,
    "brand": ""
  },
  {
    "_id": "aaaae",
    "name": "Women Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 130,
    "image": [
      "/src/assets/p_img5.png"
    ],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "date": 1716622345448,
    "bestseller": true,
    "brand": ""
  },
  {
    "_id": "aaaaf",
    "name": "Girls Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 140,
    "image": [
      "/src/assets/p_img6.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "L",
      "XL"
    ],
    "date": 1716623423448,
    "bestseller": true,
    "brand": ""
  },
  {
    "_id": "aaaag",
    "name": "Men Tapered Fit Flat-Front Trousers",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 190,
    "image": [
      "/src/assets/p_img7.png"
    ],
    "category": "Men",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "L",
      "XL"
    ],
    "date": 1716621542448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaah",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 140,
    "image": [
      "/src/assets/p_img8.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716622345448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaai",
    "name": "Girls Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 100,
    "image": [
      "/src/assets/p_img9.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "date": 1716621235448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaaj",
    "name": "Men Tapered Fit Flat-Front Trousers",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 110,
    "image": [
      "/src/assets/p_img10.png"
    ],
    "category": "Men",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "L",
      "XL"
    ],
    "date": 1716622235448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaak",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 120,
    "image": [
      "/src/assets/p_img11.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "date": 1716623345448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaal",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 150,
    "image": [
      "/src/assets/p_img12.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716624445448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaam",
    "name": "Women Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 130,
    "image": [
      "/src/assets/p_img13.png"
    ],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716625545448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaan",
    "name": "Boy Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 160,
    "image": [
      "/src/assets/p_img14.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716626645448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaao",
    "name": "Men Tapered Fit Flat-Front Trousers",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 140,
    "image": [
      "/src/assets/p_img15.png"
    ],
    "category": "Men",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716627745448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaap",
    "name": "Girls Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 170,
    "image": [
      "/src/assets/p_img16.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716628845448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaaq",
    "name": "Men Tapered Fit Flat-Front Trousers",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 150,
    "image": [
      "/src/assets/p_img17.png"
    ],
    "category": "Men",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716629945448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaar",
    "name": "Boy Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 180,
    "image": [
      "/src/assets/p_img18.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716631045448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaas",
    "name": "Boy Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 160,
    "image": [
      "/src/assets/p_img19.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716632145448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaat",
    "name": "Women Palazzo Pants with Waist Belt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 190,
    "image": [
      "/src/assets/p_img20.png"
    ],
    "category": "Women",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716633245448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaau",
    "name": "Women Zip-Front Relaxed Fit Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 170,
    "image": [
      "/src/assets/p_img21.png"
    ],
    "category": "Women",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716634345448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaav",
    "name": "Women Palazzo Pants with Waist Belt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 200,
    "image": [
      "/src/assets/p_img22.png"
    ],
    "category": "Women",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716635445448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaaw",
    "name": "Boy Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 180,
    "image": [
      "/src/assets/p_img23.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716636545448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaax",
    "name": "Boy Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 210,
    "image": [
      "/src/assets/p_img24.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716637645448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaay",
    "name": "Girls Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 190,
    "image": [
      "/src/assets/p_img25.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716638745448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaaz",
    "name": "Women Zip-Front Relaxed Fit Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 220,
    "image": [
      "/src/assets/p_img26.png"
    ],
    "category": "Women",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716639845448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaba",
    "name": "Girls Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 200,
    "image": [
      "/src/assets/p_img27.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716640945448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabb",
    "name": "Men Slim Fit Relaxed Denim Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 230,
    "image": [
      "/src/assets/p_img28.png"
    ],
    "category": "Men",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716642045448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabc",
    "name": "Women Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 210,
    "image": [
      "/src/assets/p_img29.png"
    ],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716643145448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabd",
    "name": "Girls Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 240,
    "image": [
      "/src/assets/p_img30.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716644245448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabe",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 220,
    "image": [
      "/src/assets/p_img31.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716645345448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabf",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 250,
    "image": [
      "/src/assets/p_img32.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716646445448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabg",
    "name": "Girls Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 230,
    "image": [
      "/src/assets/p_img33.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716647545448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabh",
    "name": "Women Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 260,
    "image": [
      "/src/assets/p_img34.png"
    ],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716648645448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabi",
    "name": "Women Zip-Front Relaxed Fit Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 240,
    "image": [
      "/src/assets/p_img35.png"
    ],
    "category": "Women",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716649745448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabj",
    "name": "Women Zip-Front Relaxed Fit Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 270,
    "image": [
      "/src/assets/p_img36.png"
    ],
    "category": "Women",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716650845448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabk",
    "name": "Women Round Neck Cotton Top",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 250,
    "image": [
      "/src/assets/p_img37.png"
    ],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716651945448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabl",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 280,
    "image": [
      "/src/assets/p_img38.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716653045448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabm",
    "name": "Men Printed Plain Cotton Shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 260,
    "image": [
      "/src/assets/p_img39.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716654145448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabn",
    "name": "Men Slim Fit Relaxed Denim Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 290,
    "image": [
      "/src/assets/p_img40.png"
    ],
    "category": "Men",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716655245448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabo",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 270,
    "image": [
      "/src/assets/p_img41.png"
    ],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716656345448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabp",
    "name": "Boy Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 300,
    "image": [
      "/src/assets/p_img42.png"
    ],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716657445448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabq",
    "name": "Kid Tapered Slim Fit Trouser",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 280,
    "image": [
      "/src/assets/p_img43.png"
    ],
    "category": "Kids",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716658545448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabr",
    "name": "Women Zip-Front Relaxed Fit Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 310,
    "image": [
      "/src/assets/p_img44.png"
    ],
    "category": "Women",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716659645448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabs",
    "name": "Men Slim Fit Relaxed Denim Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 290,
    "image": [
      "/src/assets/p_img45.png"
    ],
    "category": "Men",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716660745448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabt",
    "name": "Men Slim Fit Relaxed Denim Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 320,
    "image": [
      "/src/assets/p_img46.png"
    ],
    "category": "Men",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716661845448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabu",
    "name": "Kid Tapered Slim Fit Trouser",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 300,
    "image": [
      "/src/assets/p_img47.png"
    ],
    "category": "Kids",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716662945448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabv",
    "name": "Men Slim Fit Relaxed Denim Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 330,
    "image": [
      "/src/assets/p_img48.png"
    ],
    "category": "Men",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716664045448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabw",
    "name": "Kid Tapered Slim Fit Trouser",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 310,
    "image": [
      "/src/assets/p_img49.png"
    ],
    "category": "Kids",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716665145448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabx",
    "name": "Kid Tapered Slim Fit Trouser",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 340,
    "image": [
      "/src/assets/p_img50.png"
    ],
    "category": "Kids",
    "subCategory": "Bottomwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716666245448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaaby",
    "name": "Women Zip-Front Relaxed Fit Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 320,
    "image": [
      "/src/assets/p_img51.png"
    ],
    "category": "Women",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716667345448,
    "bestseller": false,
    "brand": ""
  },
  {
    "_id": "aaabz",
    "name": "Men Slim Fit Relaxed Denim Jacket",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 350,
    "image": [
      "/src/assets/p_img52.png"
    ],
    "category": "Men",
    "subCategory": "Winterwear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "date": 1716668445448,
    "bestseller": false,
    "brand": ""
  }
];

export default productsData;