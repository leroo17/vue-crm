<template>
    <div class="tasks_list" v-if="tasks.length>0">
        <!-- Вывод задач циклом -->
        <!-- <div class="task" v-for="task in tasks">
            <p><strong> {{ task.title }} </strong></p>
            <p> {{ task.text }} </p>
            <p class="task_date">  {{ task.date_start }}  </p>
        </div> -->
        <div class="tasks_list_inner">
            <h3>В работе</h3>
            <div class="tasks_list_div">
                <TaskItem v-for="task in getTasksAtWork" :task="task" :key="task.id" @remove="$emit('remove', task)" @setDone="$emit('setDone', task)"></TaskItem>
            </div>
        </div>
        <div class="tasks_list_inner">
            <h3>Выполнено</h3>
            <div class="tasks_list_div">
                <TaskItem v-for="task in getTasksDone" :task="task" :key="task.id" @remove="$emit('remove', task)" @setDone="$emit('setDone', task)"></TaskItem>
            </div>
        </div>
    </div>
    <div v-else>
        <h3>Задач нет</h3>
    </div>
</template>
<script>
import TaskItem from './TaskItem.vue';

    export default {
        props: {
            tasks: {
                type: Array,
                required: true
            }
        },
        components: {
            TaskItem
        },
        computed: {
            getTasksDone() {
                return this.tasks.filter(task => task.status === 1)
            },
            getTasksAtWork() {
                return this.tasks.filter(task => task.status === 0)
            },
        }
    }
</script>

<style>
    .tasks_list {
        display: flex;
        gap: 20px;
    }

    .tasks_list_inner {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: calc(50% - 20px);
    }

    .tasks_list_div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        min-width: 220px;
    }


</style>    