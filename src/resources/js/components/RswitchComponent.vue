<template>
    <div>
        <button @click="rd()">ランダム</button>
        <template v-if="numCheck" >
            <button @click="increment()">回答</button>
        </template>
    </div>
</template>

<script>
export default {
    methods: {
        increment: function() {
            this.$emit('increment');
        },
        rd: function () {
            this.$emit('rd')
        }
    },
    // computed: {
    //     numCheck(){
    //         return this.num %2 ==1
    //     }
    // },
    // props: {
    //     'num': {
    //         type: String
    //     }
    // }
}
</script>