<template>
    <header class="container">
       <h1 v-if="this.type == 'simple'" class="my-5 text-center" v-text="simpleAdm"></h1> 
       <h1 v-else-if="this.type == 'avanzado'" class="my-5 text-center" v-text="advancedAdm"></h1> 
    </header>
</template>
<script>
export default {
    name: 'Administrador',
    props: ['type'],
    computed: {
        simpleAdm(){
            return 'Bienvenido a la página de Administración'
        },
        advancedAdm(){
            return 'Esta página de administración está en construcción. Intente como administrador simple'
        }
    }
}
</script>