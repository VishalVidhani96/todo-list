import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Components/todos/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: any;
  localStorageItem: string | undefined;

  constructor() {
    this.localStorageItem = localStorage.getItem("todos")!;
    this.todoList = this.localStorageItem == null? [] : JSON.parse(this.localStorageItem);  
  }

  ngOnInit(): void {
  }

  removeTodo(todo: Todo){
      const index = this.todoList?.indexOf(todo);
      this.todoList.splice(index!, 1);
      localStorage.setItem("todos", JSON.stringify(this.todoList));
  }

  addTodo(todo: Todo){
    this.todoList.push(todo);
    console.log(JSON.stringify(this.todoList))    
    localStorage.setItem("todos", JSON.stringify(this.todoList));
  }

  toggleDoneCheckBox(todo: Todo){
    const index = this.todoList?.indexOf(todo);
    this.todoList[index].isActive = !this.todoList[index].isActive  
    localStorage.setItem("todos", JSON.stringify(this.todoList));
  }
}
