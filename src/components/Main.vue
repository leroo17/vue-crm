<template>
    <main class="main">
        <div class="container">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>

</script>

<style>
    .main {
        min-height: calc(100vh - 99px);
        padding: 20px 0;

        
    }
    .main .container {
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>