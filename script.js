const mongoose = require("mongoose")
const User = require("./User")


mongoose.connect("mongodb://localhost/testdb")

run()
async function run () {

    

    try{
        // const user = await User.create({
        //     name:"Kylie",
        //     age:27,
        //     email: "abc@gmail.com",
        //     hobbies: ["Weight Lifting" , "bowling"],
        //     address: {
        //         street: "Main St",
        //     },
        // },
        // {
        //     name:"Mason",
        //     age:22,
        //     email: "def@gmail.com",
        //     hobbies: ["Swimming" , "reading"],
        //     address: {
        //         street: "Canal St",
        //     },
        // },
        // {
        //     name:"Abraham",
        //     age:24,
        //     email: "ghi@gmail.com",
        //     hobbies: ["Biking" , "Travelling"],
        //     address: {
        //         street: "Park Avenue",
        //     },
        // })
        // console.log(user)

        // const user = await User.findById("627be4b0610565e63c4bb80d")
        // const user = await User.findOne({ name: "Kylie"})
        // 
        // const user = await User.where("age").gt("12")
        // const user = await User.where("age").gt("12").where("name").equals("Sally").limit(1)
        // const user = await User.where("age")
        // .gt("12")
        // .where("name")
        // .equals("Kylie")
        // .limit(1)
        // .select("age")
        // user[0].bestFriend = "627be4b0610565e63c4bb80d"
        // await user[0].save()

        // const user = await User.where("age")
        // .gt("12")
        // .where("name")
        // .equals("Kylie")
        // .populate("bestFriend")
        // .limit(1)
        // const user = await User.findOne({ name: "Kylie"})
        // const user = await User.find().byName("Kylie")
        const user = await User.findOne({ name: "Kylie",email: "test@test.com"})
        console.log(user)
        await user.save()
        // console.log(user.nemail)
        console.log(user)
        // user.sayHi()
    } catch (e) {
        console.log(e.message)
    }

    
    // user.name = "Sally"
    // await user.save()
    // const user = new User({ })
    // await user.save()
    // console.log(user)
}


