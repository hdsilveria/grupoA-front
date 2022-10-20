<template>
    <form class="form-login" @submit.prevent="getToken()">
        <h1>Sistema Acadêmico</h1>

        <v-text-field 
        label="Usuário" 
        variant="underlined" 
        v-model="login.username"
        required>
        </v-text-field>

        <v-text-field 
        label="Senha" 
        variant="underlined" 
        v-model="login.password"
        type="password"
        required>
        </v-text-field>

        <button type="submit">ENTRAR</button>

        <v-snackbar color="error" v-model="snackbar" timeout="3000">
           <span>Login ou senha invalidos!</span> 
    </v-snackbar>
    </form>
</template>

<script lang="ts">
import studantService from '@/services/students'

    export default {
        data(){
            return {
                login: {
                    username: '',
                    password: ''
                },
                snackbar: false
            }
        },

        methods: {
            getToken(): void{
                studantService.login(this.login).then(res => {
                    localStorage.setItem('token', res.data.access_token)
                    this.$router.push({name: 'students'})
                }).catch(err => {
                    this.snackbar = true
                })
            }   
        }
    }
</script>

<style lang="scss">
    @import '@/assets/mixins.scss';
    @import '@/assets/variables.scss';


    .form-login {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 50px;
        box-shadow: $boxShadow;
        button {
            width: 100%;
            height: 40px !important;
            @include button-action(green);
        }
    }
</style>