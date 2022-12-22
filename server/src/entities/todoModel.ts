import Todos from "./schema";


class TodoModel{
    // show all todos
    async index():Promise<any>{
        const  rows  = await Todos.find();
        return rows;
    }

    // create a todo item 
    async createToDo(todo:any):Promise<any>{
        try {
            
            const  rows  = await Todos.create(todo)
            return rows;
        } catch (error:any) {
            return error?.message
        }
    }

    // update todo item
    async updateTodo(todo:any):Promise<any>{
        try {
            console.log(todo)
            const {id,title,disc} = todo
            const  rows  = await Todos.findByIdAndUpdate(id,{title,disc})
            return rows;
        } catch (error:any) {
            return error?.message   
        }
    }

    async deleteTodo(todo:any):Promise<string>{
        try {
            const id = todo.id
            await Todos.findByIdAndDelete(id)
            return "deleted";
        } catch (error:any) {
            return error?.message
        }
    }

}
export default TodoModel;