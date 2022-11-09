export class TodoListService
{
    todolist = ['Dicky', 'Wahyu'];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: 'OK',
            data: this.todolist.map((val, idx) => {
                return {
                    id: idx,
                    todo: val
                }
            })
        });
    }

    getTodoList(request, response) {
        response.write(this.getJsonTodoList());
        response.end();
    }

    addTodoList(request, response) {
        request.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo)

            response.write(this.getJsonTodoList());
            response.end();
        })
    }

    updateTodoList(request, response) {
        request.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist[body.id] = body.todo;
            }

            response.write(this.getJsonTodoList());
            response.end();
        })
    }

    deleteTodoList(request, response) {
        request.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist.splice(body.id, 1);
            }
            
            response.write(this.getJsonTodoList());
            response.end();
        })
    }
}