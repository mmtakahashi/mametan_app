<template>
    <div>
        <button @click="reset()">←</button>
        <button @click="increment()">→</button>
    </div>
</template>

<script>
export default {
    methods: {
        // forwordSwitch: function() {
        //     this.$emit('forword-switch');
        // },
        // backSwitch: function() {
        //     this.$emit('back-switch');
        // },
        increment: function() {
            this.$emit('increment');
        },
        reset: function () {
            this.$emit('reset')
        }
    }
}
</script>