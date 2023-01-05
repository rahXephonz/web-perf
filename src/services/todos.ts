import { Extracts } from 'extracts';

class CoreAPI extends Extracts {
  constructor() {
    // extends your api URL for your api route url ;)
    super('https://jsonplaceholder.typicode.com');
  }

  // another logic
}

class TodosService extends CoreAPI {
  async getAllTodos() {
    // returning generic types promises
    return await this.extracts<DataTodos[]>('/todos', 'GET');
  }

  // code above will convert into
  // will convert into
  //  async getAllTodos(id:number) {
  //   return await axios.get("/todos")/then(res => res.json())
  //  }

  async deleteTodos(id: number) {
    return await this.extracts(`/todos/${id}`, 'DELETE');
  }

  async updateTodos(id: number, props: Record<string, any>) {
    return await this.extracts(`/todos/${id}`, 'PATCH', {
      json: {
        ...props,
      },
    });
  }
}

const todosService = new TodosService();

export default todosService;
