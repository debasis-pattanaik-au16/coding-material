const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const dbURL = 'mongodb+srv://expressApp:1234@cluster0.69m9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

MongoClient.connect(dbURL, async (er, connectInstance) => {

    if (er) throw new Error('Failed to connect')

    console.log('MongoDb Connected')
    // console.log(client)

    const db = connectInstance.db('maruti')

    // const carsCollection = db.collection('cars')

    // const cars = await carsCollection.find({}).toArray()

    // console.log(cars)

    // connectInstance.close();


    //Inserting

    const carsCl = db.collection('cars')

    const newCar = {
        name: "Alto",
        price: 800000,
        mfg: "Maruti",
        bhp: 120
    }

    // const asd = await carsCl.insertOne(newCar)
    
    // console.log(asd)


    //Delete
    
    // const deleteResult = await carsCl.deleteOne({_id: ObjectId('60917b62dc66996face2b547')})

    // console.log(deleteResult.deletedCount)


    // const updates = {
    //     cost: 100000
    // }

    // const updateResult = await carsCl.replaceOne({_id: ObjectId("6091753f56891e2bd1608842")}, updates )

    // console.log(updateResult.modifiedCount)



    const updates = {
        $set: { cost: 0, name: 'Alto' }
    }

    const updateResult = await carsCl.updateOne({_id: ObjectId("6091753f56891e2bd1608842")}, updates )

    console.log(updateResult.modifiedCount)

    connectInstance.close()
})
