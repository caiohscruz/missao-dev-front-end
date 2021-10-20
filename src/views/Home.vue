<template>
  <div>
    <h1>Cursos</h1>
    <h4>Educação financeira é tudo de bom</h4>
    <div v-for="(course, index) in courses" :key="index">
      <coursecard class="courseslist" />
      <div class="separator" v-show="index < courses.length - 1"></div>
    </div>
  </div>
</template>

<script>
  import coursecard from "../components/CourseCard.vue";

  export default {
    name: "Home",
    components: {
      coursecard,
    },
    data() {
      return {
        courses: [1, 2, 3, 4]
      }
    }
  };
</script>

<style>
  .courseslist {
    padding-top: 9.5rem;
    padding-bottom: 9.5rem;
    padding-right: 5.7rem;
    padding-left: 3rem;
  }

  h1 {
    font-weight: 700;
    color: var(--secondary);
    font-size: 6rem;
  }

  h4 {
    font-weight: 400;
    font-size: 2rem;
    color: var(--subtitle);
  }

  .separator {
    background-color: var(--hr);
    height: 5px;
  }
</style>