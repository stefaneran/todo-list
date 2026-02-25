import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../language.service';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Filter = 'all' | 'active' | 'completed';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  lang = inject(LanguageService);

  todos = signal<Todo[]>([]);
  filter = signal<Filter>('all');
  newTodoText = '';
  private nextId = 1;

  filteredTodos = computed(() => {
    const f = this.filter();
    return this.todos().filter(todo => {
      if (f === 'active') return !todo.completed;
      if (f === 'completed') return todo.completed;
      return true;
    });
  });

  remaining = computed(() => this.todos().filter(t => !t.completed).length);

  addTodo() {
    const text = this.newTodoText.trim();
    if (!text) return;
    this.todos.update(todos => [...todos, { id: this.nextId++, text, completed: false }]);
    this.newTodoText = '';
  }

  toggleTodo(id: number) {
    this.todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  deleteTodo(id: number) {
    this.todos.update(todos => todos.filter(t => t.id !== id));
  }

  clearCompleted() {
    this.todos.update(todos => todos.filter(t => !t.completed));
  }

  setFilter(f: Filter) {
    this.filter.set(f);
  }
}
