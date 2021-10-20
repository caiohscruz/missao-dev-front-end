<template>
  <div>
    <div>
      <iframe
        width="560"
        height="315"
        :src="lesson.link"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div>
      <h3>{{ lesson.title }}</h3>
      <p>
        {{ lesson.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: Object,
  },
};
</script>

<style>
</style>