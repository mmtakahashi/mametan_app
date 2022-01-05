<template>
    <div>
        <button @click="backSwitch()">←</button>
        <button @click="forwordSwitch()">→</button>  
    </div>
</template>

<script>
export default {
    methods: {
        forwordSwitch: function() {
            this.$emit('forword-switch');
        },
        backSwitch: function() {
            this.$emit('back-switch');
        }
    },
    // props: {
    //     'isActive': {
    //         type: String
    //     }
    // }
}
</script>