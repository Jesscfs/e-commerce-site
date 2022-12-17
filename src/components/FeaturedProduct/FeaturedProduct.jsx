import React from 'react'
import Card from '../Card/Card';
import "./FeaturedProduct.scss";


const FeaturedProduct = ({type}) => {

    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/247306/pexels-photo-247306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 10,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/449977/pexels-photo-449977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            isNew:true,
            oldPrice: 20,
            price: 15,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/1006994/pexels-photo-1006994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Hat",
            isNew:false,
            oldPrice: 10,
            price: 6,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/1181287/pexels-photo-1181287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Stickers",
            isNew:false,
            oldPrice: 12,
            price: 7,
        },
    ]

  return (
    <div className='featuredProduct'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sapiente perferendis eum! Sunt, perferendis voluptatem. Deleniti, dignissimos autem sed obcaecati minus voluptatem, quo praesentium dolorum reiciendis officiis laboriosam. Distinctio, magni?</p>
        </div>
        <div className="bottom">
            {data.map((item)=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProduct



















































// const FeaturedProduct = ({type}) => {

//     const data = [
//         {
//             id:1,
//             img:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             img2:"https://images.pexels.com/photos/247306/pexels-photo-247306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             title:"Long Sleeve Graphic T-shirt",
//             isNew:true,
//             oldPrice: 19,
//             price: 10,
//         },
//         {
//             id:2,
//             img:"https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             img2:"https://images.pexels.com/photos/449977/pexels-photo-449977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             title:"Coat",
//             isNew:true,
//             oldPrice: 20,
//             price: 15,
//         },
//         {
//             id:3,
//             img:"https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             img2:"https://images.pexels.com/photos/1006994/pexels-photo-1006994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             title:"Hat",
//             isNew:false,
//             oldPrice: 10,
//             price: 6,
//         },
//         {
//             id:4,
//             img:"https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             img2:"https://images.pexels.com/photos/1181287/pexels-photo-1181287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             title:"Stickers",
//             isNew:false,
//             oldPrice: 12,
//             price: 7,
//         },
//     ]


//   return (
//     <div className='featuredProduct'>
//         <div className="top">
//             <h1>{type} products</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur 
//                 adipisicing elit. Molestiae alias quod 
//                 praesentium odit modi pariatur, autem 
//                 non, ipsa tempora omnis officiis optio 
//                 perspiciatis commodi eaque repudiandae 
//                 ullam debitis quaerat dolore!
//             </p>
//         </div>
//         <div className="bottom">
//             {data.map((item)=>(
//                 <Card item={item} key={item.id}/>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default FeaturedProduct