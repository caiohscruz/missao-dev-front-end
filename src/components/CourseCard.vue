<template>
  <div class="coursecard">
    <div>
      <img :src="course.cover" />
    </div>
    <div>
      <h3>{{course.title}}</h3>
      <p>
        {{course.description}}
      </p>
      <button class="enter-course">
        <router-link :to='"/course/"+course.id'>Começar agora</router-link>
      </button>
    

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      course : Object,
    }
  }
</script>

<style>
  .coursecard {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .coursecard div {
    margin: auto;
  }

  .coursecard img {
    width: 38rem;
    height: auto;
    margin-bottom: 3rem;
  }

  .coursecard div:nth-child(2) {
    width: 72.4rem;
  }

  h3 {
    font-weight: 700;
    color: var(--secondary);
    font-size: 3.5rem;
    margin-bottom: 3.7rem;
  }

  .enter-course {
    background-color: var(--primary);
    color: var(--overlay);
    font-size: 2rem;
    border-radius: 6.2rem;
    width: 23.3rem;
    height: 5.1rem;
    margin-top: 6.6rem;
  }

  a{
    color: inherit;
  }
</style>