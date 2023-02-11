const mongoose=require("mongoose")

const CartSchema=new mongoose.Schema({
       
    items: [
        {
          bookId: {
            type: mongoose.Types.ObjectId,
            ref: "Book",
            required: true
          },
          quantity: {
            type: Number,
            required: true
          }
        }
      ],
      totalCost: {
        type: Number,
        required: true
      },
      userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
      }
    })

const CartModal=mongoose.model("Cart",CartSchema)

module.exports={CartModal}