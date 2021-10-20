<template>
  <div>
    <h5>Aula {{index}}</h5>
    <input type="text" placeholder="Título do curso" v-model="lesson.title">
    <input type="text" placeholder="Url do vídeo" v-model="lesson.link">
    <input type="text" placeholder="Descrição do curso" v-model="lesson.description">
  </div>
</template>

<script>
export default {
  props:{
    lesson: Object,
    index: Number
  }
};
</script>

<style>
input[type="text"] {
  border: 1px var(--input-border) solid;
  background-color: var(--input-background);
  color: var(--input-text);
  font-size: 1.8rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

input::placeholder {
  color: var(--input-text);
}
</style>