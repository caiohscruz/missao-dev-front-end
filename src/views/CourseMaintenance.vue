<template>
  <div>
    <h3>{{page}}</h3>
    <input type="text" placeholder="Título do curso" v-model="course.title" />
    <input
      type="text"
      placeholder="Url da capa do curso"
      v-model="course.cover"
    />
    <input type="text" placeholder="Professor" v-model="course.teacher" />
    <textarea
      type="text"
      placeholder="Descrição do curso"
      v-model="course.description"
    />
    <div v-for="(lesson, index) in lessons" :key="index">
      <formlesson :lesson="lesson" :index="index+1" />
      <div class="separator" v-show="index < lessons.length - 1"></div>
    </div>
  </div>
</template>

<script>
import formlesson from "../components/FormLesson.vue";
import axios from "axios";

export default {
  components: {
    formlesson,
  },
  data() {
    return {
      page:'',
      action: "",
      id: "",
      course: {
        title: "",
        cover: "",
        teacher: "",
        description: ""
      },
      lessons:[]
    };
  },
  created() {
    this.action = this.$route.query.action;
    this.id = this.$route.query.id;

    if (this.action == "edit") {
      if (!isNaN(this.id)) {
        axios
          .get("https://demo-api-anima-project.herokuapp.com/course/" + this.id)
          .then((res) => {
            this.course.title = res.data.title;
            this.course.cover = res.data.cover;
            this.course.teacher = res.data.teacher;
            this.course.description = res.data.description;
          })
          .catch(() => {
            alert(
              `Curso de id ${this.id} não encontrado. \n Iremos redirecioná-lo ao painel administrativo`
            );
            window.location.href = "/admin";
          });

        axios
          .get(
            "https://demo-api-anima-project.herokuapp.com/lessons/" + this.id
          )
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

          this.page = `Editando curso ${this.id}`;

      } else {
        alert(
          `Id informado não é número. \n Iremos redirecioná-lo ao painel administrativo`
        );
        window.location.href = "/admin";
      }
    } else {
      console.log("ok");
    }
  },
};
</script>

<style>
input[type="text"],
textarea {
  border: 1px var(--input-border) solid;
  background-color: var(--input-background);
  color: var(--input-text);
  font-size: 1.8rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

input::placeholder,
textarea {
  color: var(--input-text);
}
</style>