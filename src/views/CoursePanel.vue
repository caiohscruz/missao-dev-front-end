<template>
    <div>
        <div>
            <h1>{{course.title}}</h1>
            <p>
                {{course.description}}
            </p>
        </div>
        <div>
            <img :src="course.cover" />
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        props: {
            id: Number,
        },
        data(){
            return{
                course : Object,
                lessons: [],
            }
        },
        created() {
            axios.get('https://dashboard.heroku.com/apps/demo-api-anima-project/course/' + this.id).then(res=>{
                this.course = res.data;
            })


        }
    }
</script>

<style>

</style>