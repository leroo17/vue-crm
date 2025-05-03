<template>
    <div class="calendar_inner">
        <Popup v-model:showPopup="popupVisible">
            <DayForm></DayForm>
        </Popup>
        <h2>Апрель 2025</h2>
        <task_btn class="day_btn_add" @click="showPopups">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </task_btn>
        <div class="calendar">
            <div class="calendar_month">
                <DayItem v-for="day in days" :day="day" :key="day.id" @setDayComplete="$emit('setDayComplete', day)"></DayItem>
            </div>
        </div>
    </div>
</template>

<script>

    import Popup from '../UI/Popup.vue';
    import DayForm from './DayForm.vue';
    import DayItem from './DayItem.vue';


    export default {
        data() {
            return {
                popupVisible: false,
            }
        },
        props: {
            days: {
                type: Array,
                required: true
            }
        },
        components: {
            DayItem, Popup, DayForm
        },
        methods: {
            showPopups() {
                console.log('Wowow');
                
                this.popupVisible = true;
            }
        },
    }

</script>

<style>

    .calendar_inner {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .calendar_month {
        display: grid;
        grid-template-rows: repeat(5, 50px);
        grid-template-columns: repeat(7, 100px);
    }

    .day_btn_add {
        border: 1px solid #000 !important;
        z-index: 3;
    }

    .day_btn_add>span {
        height: 1px;
        width: calc(100% - 5px);
        background-color: #000;
        position: absolute;

    }

    .day_btn_add span:nth-child(1) {
        background-color: #000;
    }
    .day_btn_add span:nth-child(2) {
        background-color: #000;
        transform: rotate(-90deg);
    }
</style>    