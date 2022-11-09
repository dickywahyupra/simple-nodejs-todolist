import http from 'http';
import { TodoListService } from './todolist-service.mjs';

let service = new TodoListService;

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json')

    if (request.method === 'GET') {
        service.getTodoList(request, response);
    }

    if (request.method === 'POST') {
        service.addTodoList(request, response);
    }

    if (request.method === 'PUT') {
        service.updateTodoList(request, response);
    }

    if (request.method === 'DELETE') {
        service.deleteTodoList(request, response);
    }
})

server.listen(3000)