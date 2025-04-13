<template>
    <div class="task" :class="{ done: task.status === 1 }">
        <div class="task_btns">
            <task_btn class="task_btn_remove" @click="$emit('remove', task)" >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </task_btn>
            <task_btn class="task_btn_done" @click="$emit('setDone', task)">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </task_btn>
        </div>
        <p><strong> {{ task.title }} </strong></p>
        <p> {{ task.text }} </p>
        <p class="task_date">  {{ task.date_start }}  </p>
    </div>
</template>

<script>
    export default {
        props: {
            task: { 
              type: Object,
              required: true  
            }
        }
    }
</script>

<style>
    .task {
        min-height: 170px;
        width: 220px;
        background-color: #1090c2;
        color: #fff;
        font-size: 14px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .task_date {
        margin: auto 0 0 0;
    }

    .task_btns {
        align-self: flex-end;
        display: flex;
        gap: 5px;
    }

    .task_btn_remove {
        position: relative;
    }

    .task_btn_remove span {
        height: 1px;
        width: calc(100% - 5px);
        background-color: #fff;
        position: absolute;
    }

    .task_btn_done>span {
        height: 1px;
        width: 20px;
        background-color: #fff;
    }

    .task_btn_remove span:nth-child(1) {
        transform: rotate(45deg);
    }
    .task_btn_remove span:nth-child(2) {
        transform: rotate(-45deg);
    }

    .task_btn_done>span:nth-child(1) {
        transform: rotate(55deg) translateX(3px) translateY(-1px);
        width: 10px;
    }
    .task_btn_done>span:nth-child(2) {
        transform: rotate(-45deg) translateY(-0.5px);
    }
    
    .task.done {
        background-color: #4caf50;
        text-decoration: line-through;
        opacity: 0.8;
    }
</style>    