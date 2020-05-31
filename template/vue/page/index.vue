<template>
    <section class="P-<$= name $>"></section>
</template>

<script>
    export default {
        data() {
            return {}
        },
        beforeRouteEnter(to, from, next) {
            next()
        },
        created() {

        },
        methods: {
        },
        components: {

        }
    }
</script>

<style lang="less" scoped>
    @import '~common/var';
    .P-<$= name $> {}
</style>
