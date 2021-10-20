<template>
  <div class="coursecard">
    <div>
      <h1>{{ course.title }}</h1>
      <p>
        {{ course.description }}
      </p>
    </div>
    <div>
      <img :src="course.cover" />
    </div>
    <div v-for="(lesson,index) in lessons" :key="index">
        <lessoncard :lesson="lesson" />
        <div class="separator" v-show="index < lessons.length - 1"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lessoncard from "../components/LessonCard.vue";

export default {
  data() {
    return {
      id: "",
      course: {
        id: "",
        title: "",
        cover: "",
        teacher: "",
        description: "",
      },
      lessons: [],
    };
  },
  created() {
    this.id = this.$route.params.id;
    axios
      .get("https://demo-api-anima-project.herokuapp.com/course/" + this.id)
      .then((res) => {
        this.course.id = res.data.id;
        this.course.title = res.data.title;
        this.course.cover = res.data.cover;
        this.course.description = res.data.description;
      }).catch(() =>{
        alert(`Curso de id ${this.id} não encontrado. \n Iremos redirecioná-lo para a página inicial`);
        window.location.href = "/";
      })
    axios
      .get("https://demo-api-anima-project.herokuapp.com/lessons/" + this.id)
      .then((res) => {
        res.data.forEach((lesson) => {
          this.lessons.push({
            id: lesson.id,
            title: lesson.title,
            link: lesson.link,
            description: lesson.description,
          });
        });
      });
  },
  components: {
    lessoncard,
  },
};
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
  min-width: 38rem;
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

a {
  color: inherit;
}
</style>