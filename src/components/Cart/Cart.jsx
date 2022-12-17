import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

const Cart = () => {

    const data=[
        {
            id:1,
            img: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
            title:"Long Black Shirt",
            desc:"Long Black Shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1689718/pexels-photo-1689718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            desc:"Coat",
            isNew:true,
            oldPrice: 12,
            price: 10,
        }
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map((item)=>(
            <div className='item' key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">
                        1 x {item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart