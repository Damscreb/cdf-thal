<template>
    <div>
        {{ this.name }}
    </div>
</template>
<script>
export default {
    asyncData(ctx) {
        // eslint-disable-next-line
        console.log(ctx)
        return {name: 'page name'};
    },
    name: 'cast',
};
</script>
<style scoped>

</style>
