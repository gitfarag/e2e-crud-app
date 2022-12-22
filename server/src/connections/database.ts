import mongoose from 'mongoose'

const connectDB = async (url:string):Promise<void> =>{
    try {
        await mongoose.connect(url)
        console.log('mongo is connected')
    } catch (error:any) {
        console.log(error?.message)
    }
}
export {connectDB}