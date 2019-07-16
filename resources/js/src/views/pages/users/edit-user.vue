<template>
    <h1>hello</h1>
</template>

<script>
export default {
data:() => ({

}),
mounted() {
    console.log(this.$route.params.id)
}
}
</script>

<style>

</style>
