<template>
    
    <div>
        <h1 class="title"> Hello </h1>
        <p>{{ message }}</p>
        <input v-model="message"/>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'Hello world',
        }
    },
}

</script>
<style scoped>

p {
    color: grey;
}
</style>