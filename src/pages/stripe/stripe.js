const express = require('express')
const Stripe = require("stripe")("sk_test_51MNK7eALEJ6oj7OB6L08U6il7MKjIZEFENuPzl08JU29Lz07cTZCmsPVv9LeAzzHCqcODo3Eu4kOiq0wnmaCExT400JqMxXsCc")
require("dotenv").config()
const router  = express.Router();
// const stripe = Stripe(require("sk_test_51MNK7eALEJ6oj7OB6L08U6il7MKjIZEFENuPzl08JU29Lz07cTZCmsPVv9LeAzzHCqcODo3Eu4kOiq0wnmaCExT400JqMxXsCc"));

router.post('/create-checkout-session', async (req, res) => {
  
      // const orderDetails1 =  Object.keys(req.body.orderDetails)
      // console.log("orderDetails1 is "+orderDetails1)
    // console.log("this is response" +req.body.orderArray)
    // console.log("this is response" +req.body.orderDetails)
    // console.log("this is response" +req.body.orderArray[0])
    // console.log("this is response" +req.body.orderArray[1])
    // console.log("this is response" +req.body.orderArray[3])
    // const data = req.body.orderDetails
    // const data = req.body.order
    // console.log("consooling raw data " +data)
    // const arrayFromObj = Object.entries(data)

    // const line_items = data.map((key,index)=>{
    //     // console.log(line_items)
    //     // totalPRice  =   Math.round(item[3]*100)
    //     // console.log()
    //     // console.log(key)
    //     return{
    //     price_data: {
    //         currency: 'usd',
            
    //         product_data: {
    //           name:"tshirt and etc",
    //         },
    //         unit_amount: key.totalPrice*1000,
    //       },
    //       quantity: 1,
    //     }
    // })
    // console.log(line_items)
    
    const session = await Stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount:req.body.order.totalPrice*1000 ,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
    res.send({url:session.url,
    });
});

module.exports = router;