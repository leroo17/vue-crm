<template>
    <menu class="menu">
        <ul class="menu_list">
            <li class="menu_item"><a class="menu_item_link" href="/">Home</a></li>
            <li class="menu_item"><a class="menu_item_link" href="/tasks">Tasks</a></li>
            <li class="menu_item"><a class="menu_item_link" href="/hobbies">Hobbies</a></li>
            <li class="menu_item"><a class="menu_item_link" href="/actitvities">Actitvities</a></li>
            <li class="menu_item"><a class="menu_item_link" href="/admin">Admin</a></li>
        </ul>
    </menu>
</template>

<script>

</script>

<style>
    .menu_list {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .menu_item {
        list-style: none;
    }
    .menu_item_link {
        text-decoration: none;
        color: #000;
        cursor: pointer;
        color: #fff;
    }
</style>    