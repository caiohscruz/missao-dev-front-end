<template>
  <div>
    <h1>Painel Administrativo</h1>
    <h4>Educação financeira é tudo de bom</h4>
    <div class="main">
      <table>
        <tr>
          <td class="table-header">Curso</td>
          <td class="table-header actions">Ações</td>
        </tr>
        <tr v-for="(course, index) in courses" :key="index" class="course">
          <td>
            {{ course.title }}
          </td>
          <td class="actions">
            <button class="warning-btn">
              <router-link :to="'/admin/course/?action=edit&id=' + course.id">
                editar
              </router-link>
            </button>
            <button class="danger-btn" @click="confirmDeletion(course.id)">
              excluir
            </button>
          </td>
        </tr>
      </table>
      <button class="enter-course">
        <router-link :to="'/admin/course/?action=new'">
          Adicionar curso
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      courses: [],
    };
  },
  created() {
    axios
      .get("https://demo-api-anima-project.herokuapp.com/courses")
      .then((res) => {
        res.data.forEach((course) => {
          this.courses.push({
            id: course.id,
            title: course.title,
          });
        });
      });
  },
  methods: {
    confirmDeletion(id) {
      var decision = confirm("Você quer realmente deletar este curso?");
      if (decision) {
        axios
          .delete("https://demo-api-anima-project.herokuapp.com/course/" + id)
          .then(() => {
            alert(
              `Curso deletado com sucesso`
            );
            window.location.href = "/admin";
          }).catch(err=>{
            console.log(err);
            alert(
              `Houve algum problema, confira o console`
            );
          })
      }
    },
  },
};
</script>

<style>
table {
  font-weight: 400;
  border-spacing: 0;
  border: var(--table-border) 1px solid;
  background-color: var(--table-background);
  font-size: 1.8rem;
  width: fit-content;
}

.table-header {
  font-size: 2.4rem;
  background-color: var(--table-header);
}

.course td {
  border-top: var(--table-border) 1px solid;
}

.warning-btn,
.danger-btn {
  width: 8.7rem;
  height: 2.2rem;
  font-weight: 400;
  color: var(--overlay);
  font-size: 1.5rem;
}

.warning-btn {
  background-color: var(--warning);
}

.danger-btn {
  background-color: var(--danger);
}

.actions {
  display: flex;
  justify-content: space-between;
  width: 20rem;
}

.course td:nth-child(1) {
  width: 50rem;
}

td {
  padding: 0.5rem;
}
.main {
  padding-top: 9.5rem;
  padding-bottom: 9.5rem;
  padding-right: 5.7rem;
  padding-left: 3rem;
}
</style>