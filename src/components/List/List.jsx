import React from 'react'
import "./List.scss";
import Card from"../Card/Card"


const List = () => {
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
    <div className="list">
        {data?.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List