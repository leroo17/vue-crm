<template>
    <form class="task_add_form">
        <!-- первый инпут с v-bind + обработчик события input (отказались от v-bind в пользу v-model + сделали bind в компоненте input_app из-за modelValue) -->
        <!-- <input_app 
            v-bind:value="task.title"
            @input="task.title = $event.target.value"
            type="text"
            placeholder="Заголовок"
        ></input_app> -->
        <input_app 
            v-model:value="task.title"
            type="text"
            placeholder="Заголовок"
        ></input_app>
        <!-- второй инпут с v-model -->
        <input_app 
            v-model:value="task.text"
            type="text"
            placeholder="Текст"
        ></input_app>
        <button class="task_add_btn" @click.prevent="addTask">Добавить</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                task: {
                    id: '',
                    title: '',
                    text: '',
                    date_start: '',
                    date_finish: '', 
                    status: 0, 
                    category: ''
                }
            }
        },
        props: {
            tasks: {
                type: Array,
                required: true
            }
        },
        methods: {
            InputTitle(event) {
                this.title = event.target.value;
                console.log(tasks.length);

            },
            addTask() {
                this.task.id = this.tasks.length + 1;
                this.task.date_start = new Date(Date.now()).toLocaleDateString('ru-RU');
                this.$emit('create', this.task, 'Wow');
                console.log(this.task.id);
                this.task = {
                    id: '',
                    title: '',
                    text: '',
                    date_start: '',
                    date_finish: '', 
                    status: 0, 
                    category: ''                 
                }
            }
        }
    }

</script>

<style>
    .task_add_form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .task_add_btn {
        padding: 10px;
        outline: none;
        border: none;
        max-width: min-content;
        background-color: #1090c2;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
    }
</style>    