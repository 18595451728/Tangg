<template>
    <div class="book_history">
        <History_header></History_header>
        <History_tab></History_tab>
    </div>
</template>

<script>
    import History_header from "./components/History_header"
    import History_tab from "./components/History_tab"

    import axios from 'axios'
    export default {
        name: "Bookhistory",
        components:{
            History_header,
            History_tab
        },
        data(){
            return{
            }
        },
        mounted() {
        },
        methods:{

        }
    }
</script>

<style scoped>

.book_history{
    background: #f5f5f5;
}
</style>
