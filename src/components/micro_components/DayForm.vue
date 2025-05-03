<template>
    <form class="dayForm">
         <div v-for="category in groupedOptions">
            <DayFormCategory :key="category.name" :category="category.name" :options="category.items"></DayFormCategory>
         </div>
    </form>
</template>

<script>
    import InputApp  from '../UI/Input.vue';
    import SelectApp from '../UI/Select.vue';
    import InputCheckbox from '../UI/Checkbox.vue';
    import LabelApp from '../UI/LabelApp.vue';
    import DayFormCategory from './DayFormCategory.vue'

    export default {
        name: 'day_form',
        components: {
            InputApp, SelectApp, InputCheckbox, LabelApp, DayFormCategory
        },
        data() {
            return {
                options: [
                    // 🌟 BASIC
                    { id: 0, name: 'Настроение', type: 'select', category_name: 'Базовые показатели' , category: 'basic', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 1, name: 'Уровень энергии', type: 'select', category_name: 'Базовые показатели' , category: 'basic', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 2, name: 'Радость', type: 'checkbox', category_name: 'Базовые показатели' , category: 'basic', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 3, name: 'Апатия', type: 'checkbox', category_name: 'Базовые показатели' , category: 'basic', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 4, name: 'Раздражение', type: 'checkbox', category_name: 'Базовые показатели' , category: 'basic', subcategory: '', comment: false, icon: 'leaf' },

                    // 🩺 PHYSICAL
                    { id: 5, name: 'Самочувствие', type: 'select', category_name: 'Физическое состояние' , category: 'physical', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 6, name: 'Качество сна', type: 'select', category_name: 'Физическое состояние' , category: 'physical', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 7, name: 'Головная боль', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 8, name: 'Давление', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 9, name: 'ПМС', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 10, name: 'Аллергия', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 11, name: 'Недостаточный сон', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 12, name: 'Витамины', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 13, name: 'Кофеин', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: 'nutrition', comment: false, icon: 'leaf' },
                    { id: 14, name: 'Алкоголь', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: 'nutrition', comment: false, icon: 'leaf' },
                    { id: 15, name: 'Пропуск еды', type: 'checkbox', category_name: 'Физическое состояние' , category: 'physical', subcategory: 'nutrition', comment: false, icon: 'leaf' },

                    // 💥 TRIGGERS
                    { id: 16, name: 'Конфликты', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'stress', comment: false, icon: 'leaf' },
                    { id: 17, name: 'Дэдлайны', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'stress', comment: false, icon: 'leaf' },
                    { id: 18, name: 'Неожиданные траты', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'stress', comment: false, icon: 'leaf' },
                    { id: 19, name: 'Общение', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'social', comment: false, icon: 'leaf' },
                    { id: 20, name: 'Устала от людей', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'social', comment: false, icon: 'leaf' },
                    { id: 21, name: '«Зарядилась»', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'social', comment: false, icon: 'leaf' },
                    { id: 22, name: 'Солнечно', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'weather', comment: false, icon: 'leaf' },
                    { id: 23, name: 'Дождь', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'weather', comment: false, icon: 'leaf' },
                    { id: 24, name: 'Ветер', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'weather', comment: false, icon: 'leaf' },
                    { id: 25, name: 'Много работала', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'hardworkhallelujah', comment: false, icon: 'leaf' },
                    { id: 26, name: 'Переутомление', type: 'checkbox', category_name: 'Внешние триггеры' , category: 'triggers', subcategory: 'hardworkhallelujah', comment: false, icon: 'leaf' },

                    // 🧠 COGNITIVE
                    { id: 27, name: 'Cделала ли запланированное', type: 'checkbox', category_name: 'Когнитивные и эмоциональные маркеры' , category: 'cognitive', subcategory: 'productivity', comment: false, icon: 'leaf' },
                    { id: 28, name: 'Прокрастинировала', type: 'checkbox', category_name: 'Когнитивные и эмоциональные маркеры' , category: 'cognitive', subcategory: 'productivity', comment: true, placeholder: 'Что отвлекло? Сколько времени заняло?', icon: 'leaf' },
                    { id: 29, name: 'Кручу прошлые ошибки', type: 'checkbox', category_name: 'Когнитивные и эмоциональные маркеры' , category: 'cognitive', subcategory: 'patterns', comment: true, placeholder: 'Какие мысли повторялись?', icon: 'leaf' },
                    { id: 30, name: 'Планирую будущее', type: 'checkbox', category_name: 'Когнитивные и эмоциональные маркеры' , category: 'cognitive', subcategory: 'patterns', comment: true, placeholder: 'О чём думала? Какие планы строила?', icon: 'leaf' },
                    { id: 31, name: 'Прилив идей', type: 'checkbox', category_name: 'Когнитивные и эмоциональные маркеры' , category: 'cognitive', subcategory: 'creativity', comment: true, placeholder: 'Какие идеи появились?', icon: 'leaf' },
                    { id: 32, name: 'Пустота в голове', type: 'checkbox', category_name: 'Когнитивные и эмоциональные маркеры' , category: 'cognitive', subcategory: 'creativity', comment: false, icon: 'leaf' },

                    // 🛟 RESOURCE
                    { id: 33, name: 'Музыка', type: 'checkbox', category_name: 'Ресурсные активности' , category: 'resource', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 34, name: 'Подкасты', type: 'checkbox', category_name: 'Ресурсные активности' , category: 'resource', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 35, name: 'Общение с определёнными людьми', type: 'checkbox', category_name: 'Ресурсные активности' , category: 'resource', subcategory: '', comment: true, placeholder: 'С кем именно? Какое было настроение после общения?', icon: 'leaf' },
                    { id: 36, name: 'Спорт/йога', type: 'checkbox', category_name: 'Ресурсные активности' , category: 'resource', subcategory: '', comment: false, icon: 'leaf' },
                    { id: 37, name: 'Творчество (код, рисование и т.д.)', type: 'checkbox', category_name: 'Ресурсные активности' , category: 'resource', subcategory: '', comment: false, icon: 'leaf' }
                    ]
            }
        },
        computed: {
            groupedOptions() {
                const groups = {};
                this.options.forEach(option => {
                    if (!groups[option.category]) {
                        groups[option.category] = {
                            name: option.category_name,
                            items: []
                        }
                    }
                    groups[option.category].items.push(option);
                });
                console.log(groups);
                return Object.values(groups);
            }
        }
    }
</script>

<style>
    .dayForm {
        height: 100%;
        z-index: 5;
        font-size: 14px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 5px;
        padding: 20px;
    }

    .dayForm select {
        width: 50px;
    }

    .dayForm>div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        border: 1px solid #1090c2;
        padding: 10px;
    }

    .inputInnerDiv {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    .inputInnerDivCheck {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

</style>    