<template>
    <div>
        <h2 class="font-title">{{ title }}</h2>
    </div>
</template>
<script>
export default {
    'props': {
        'title': {
            'default': 'Titre',
            'required': true,
            'type': String
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
