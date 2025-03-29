<template>
    <div class="tasks_list">
        <!-- Вывод задач циклом -->
        <!-- <div class="task" v-for="task in tasks">
            <p><strong> {{ task.title }} </strong></p>
            <p> {{ task.text }} </p>
            <p class="task_date">  {{ task.date_start }}  </p>
        </div> -->
        <TaskItem v-for="task in tasks" :task="task"></TaskItem>
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
        }
    }
</script>

<style>
    .tasks_list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }


</style>    