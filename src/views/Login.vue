<template>
    <div class="login-page">
        <FormLogin />
    </div>
</template>

<script lang="ts">

import FormLogin from '@/components/aplication/FormLogin.vue'

export default {
    components: {
        FormLogin
    }
}

</script>

<style lang="scss">
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: -50px;
}
</style>