import ProductImg1 from "../assets/product-images/producimg18.jpg"
import ProductImg2 from "../assets/product-images/productimg1.jpg"
import ProductImg3 from "../assets/product-images/productimg10.jpg"
import ProductImg4 from "../assets/product-images/productimg11.jpg"
import ProductImg5 from "../assets/product-images/productimg12.jpg"
import ProductImg6 from "../assets/product-images/productimg13.jpg"
import ProductImg7 from "../assets/product-images/productimg14.jpg"
import ProductImg8 from "../assets/product-images/productimg15.jpg"
import ProductImg10 from "../assets/product-images/productimg17.jpg"
import ProductImg11 from "../assets/product-images/productimg18.jpg"
import ProductImg12 from "../assets/product-images/productimg19.jpg"
import ProductImg13 from "../assets/product-images/productimg2.jpg"
import ProductImg14 from "../assets/product-images/productimg20.jpg"
import ProductImg15 from "../assets/product-images/productimg21.jpg"
import ProductImg16 from "../assets/product-images/productimg22.jpg"
import ProductImg17 from "../assets/product-images/productimg23.jpg"
import ProductImg18 from "../assets/product-images/productimg24.jpg"
import ProductImg19 from "../assets/product-images/productimg25.jpg"
import ProductImg20 from "../assets/product-images/productimg3.jpg"
import ProductImg21 from "../assets/product-images/productimg4.jpg"
import ProductImg22 from "../assets/product-images/productimg5.jpg"
import ProductImg23 from "../assets/product-images/productimg6.jpg"
import ProductImg24 from "../assets/product-images/productimg7.jpg"


export interface IProductData {
  name:string,
  img_url:string,
  price:number,
  category:string,
  id?:number,
}

const ProductData:IProductData[] = [
    {
      "name": "LipBalm",
      "img_url": ProductImg1,
      "price": 24.00,
      "category": "Lip-Care",
      "id":1
    },
    {
      "name": "LipGloss",
      "img_url": ProductImg2,
      "price": 18.00,
      "category": "Lip-Care",
      "id":2
    },
    {
      "name": "LipScrub",
      "img_url": ProductImg3,
      "price": 12.00,
      "category": "Lip-Care",
      "id":3
    },
    {
      "name": "LipMask",
      "img_url": ProductImg4,
      "price": 20.00,
      "category": "Lip-Care",
      "id":4
    },
    {
      "name": "LipPlumper",
      "img_url": ProductImg5,
      "price": 22.0,
      "category": "Lip-Care",
      "id":5
    },
    {
      "name": "LipOil",
      "img_url": ProductImg6,
      "price": 15.00,
      "category": "Lip-Care",
      "id":6
    },
    {
      "name": "LipLiner",
      "img_url": ProductImg7,
      "price": 10.00,
      "category": "Lip-Care",
      "id":7
    },
    {
      "name": "LipStain",
      "img_url": ProductImg8,
      "price": 14.00,
      "category": "Lip-Care",
      "id":8
    },
    {
      "name": "LipCrayon",
      "img_url": ProductImg15,
      "price": 16.00,
      "category": "Lip-Care",
      "id":9
    },
    {
      "name": "LipButter",
      "img_url": ProductImg10,
      "price": 8.00,
      "category": "Lip-Care",
      "id":10
    },
    {
      "name": "GlowSerum",
      "img_url": ProductImg11,
      "price": 35.00,
      "category": "Serum",
      "id":11
    },
    {
      "name": "VitaminCSerum",
      "img_url":ProductImg12,
      "price": 40.00,
      "category": "Serum",
      "id":12
    },
    {
      "name": "HyaluronicSerum",
      "img_url": ProductImg13,
      "price":38.00,
      "category": "Serum",
      "id":13
    },
    {
      "name": "CollagenSerum",
      "img_url": ProductImg14,
      "price": 45.00,
      "category": "Serum",
      "id":14
    },
    {
      "name": "RetinolSerum",
      "img_url": ProductImg15,
      "price": 50.00,
      "category": "Serum",
      "id":15
    },
    {
      "name": "NiacinamideSerum",
      "img_url": ProductImg16,
      "price": 42.00,
      "category": "Serum",
      "id":16
    },
    {
      "name": "HairOil",
      "img_url": ProductImg17,
      "price": 18.00,
      "category": "Hair-Care",
      "id":17
    },
    {
      "name": "HairSerum",
      "img_url": ProductImg18,
      "price": 22.00,
      "category": "Hair-Care",
      "id":18
    },
    {
      "name": "HairMask",
      "img_url": ProductImg19,
      "price": 28.00,
      "category": "Hair-Care",
      "id":19
    },
    {
      "name": "Shampoo",
      "img_url": ProductImg20,
      "price": 30.00,
      "category": "Hair-Care",
      "id":20
    },
    {
      "name": "Conditioner",
      "img_url": ProductImg21,
      "price": 32.00,
      "category": "Hair-Care",
      "id":21
    },
    {
      "name": "DryShampoo",
      "img_url": ProductImg22,
      "price": 20.00,
      "category": "Hair-Care",
      "id":22
    },
    {
      "name": "ScalpScrub",
      "img_url": ProductImg23,
      "price": 26.00,
      "category": "Hair-Care",
      "id":23
    },
    {
      "name": "LeaveInConditioner",
      "img_url":ProductImg24,
      "price": 34.00,
      "category": "Hair-Care",
      "id":24
    }
  ]
  
  
export default ProductData;