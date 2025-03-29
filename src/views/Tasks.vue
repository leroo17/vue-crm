<template>
    <p>Tasks</p>
    <TasksForm :tasks="tasks" @create="addTask"></TasksForm>
    <TasksList :tasks="tasks"></TasksList>
  </template>
  
  <script>
  import TasksList from '@/components/micro_components/TasksList.vue';
  import TasksForm from '@/components/micro_components/TasksForm.vue';
  
  export default {
    components: { TasksList, TasksForm },
    data() {
      return {
        tasks: [],
        lastTaskId: Number(localStorage.getItem('lastTaskId')) || 0, // Берем из localStorage или 0
      };
    },
    mounted() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
        } else {
            this.tasks = [
            { id: 1, title: 'Поесть', text: 'Поешь уже как нормальный человек', date_start: '14.03.2025', date_finish: '', status: 0, category: 'important' },
            { id: 2, title: 'Поспать', text: 'Поспи уже как нормальный человек', date_start: '14.03.2025', date_finish: '', status: 0, category: 'important' },
            { id: 3, title: 'Узнать о мореплавателях', text: 'Понять, чем я занималась на уроках географии', date_start: '14.03.2025', date_finish: '', status: 0, category: 'important' }
            ];
            this.saveTasks();
        }

        // Если lastTaskId не был сохранен, устанавливаем его по максимальному ID
        if (!this.lastTaskId) {
            this.lastTaskId = this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) : 0;
            localStorage.setItem('lastTaskId', this.lastTaskId);
        }
    },
    methods: {
      addTask(task) {
        this.lastTaskId += 1; // Увеличиваем ID
        task.id = this.lastTaskId;
        this.tasks.push(task); // Добавляем новую задачу
        this.saveTasks(); // Сохраняем весь массив в localStorage
        localStorage.setItem('lastTaskId', this.lastTaskId); // Сохраняем в localStorage
      },
      saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Сохраняем весь массив
      }
    }
  };
  </script>