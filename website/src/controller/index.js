import axios from "axios"

class TodoHandler {
     async getItems(){
        try {
            const res = await axios.get('http://localhost:3001/api/todos')
            const data = res.data
            // console.log(data)
            return data
        } catch (error) {
            console.log(error)  
        }
    }

    async additem(e){
        try {
            e.preventDefault()
            const res= await axios.post('http://localhost:3001/api/todos/create',{
                title:"title",
                disc:"description"
            })
            // console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)  
        }
    }
    
       async deleteItem(e,item){
        try {
            e.preventDefault()
            const res= await axios.delete("http://localhost:3001/api/todos/delete", {
                data: {
                  id: item._id
                }
              });
            //   console.log(res)
              return res
        } catch (error) {
            console.log(error)  
        }
    }

    async updateItem(e,item){
        try {
            e.preventDefault()
            const res= await axios.put("http://localhost:3001/api/todos/update", item);
            //   console.log(res)
            return res
        } catch (error) {
            console.log(error)  
        }
    }
        
}


export default TodoHandler