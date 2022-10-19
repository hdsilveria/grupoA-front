<template>
    <div class="sidebar">
        <header class="sidebar__header">{{$route.name}}</header>
        <ul>
            <li v-for="option in options" :key="option.value" class="sidebar__option">
                <router-link :to="option.path">{{option.value}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            options: [
                {value: 'Alunos', path: '/alunos'},
                {value: 'Cadastrar Aluno', path: '/novo-aluno'}
            ]
        }
    }

})
</script>

<style lang="scss" scoped>

@import '@/assets/variables.scss';
    .sidebar {
        background: white;
        border-radius: 12px;
        width: 20%;
        height: 100%;
        box-shadow: $boxShadow;
        display: flex;
        flex-direction: column;
        align-items: left;
        
        &__header {
            text-align: center;
            padding: 20px 0px;
            background: rgb(87, 87, 87);
            border-radius: 12px 12px 0px 0px;
            color: white;
            margin-bottom: 15px;
        }
        
        &__option {
            padding: 7px 20px;
            color: rgb(87, 87, 87);
            font-size: 14pt;
            font-weight: 600;
            transition: 0.6s;

            &:hover {
                background-color: rgb(87, 87, 87);
                cursor: pointer;
                a {
                    color: white !important;
                }
            }
            a {
                text-decoration: none;

                &:visited {
                    text-decoration: none;
                    color: rgb(87, 87, 87);
                }
            }
            
        }

    }

</style>