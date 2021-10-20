<template>
  <div>
    <h1>Painel Administrativo</h1>
    <h4>Educação financeira é tudo de bom</h4>

    <table>
      <tr>
        <td class="table-header">
          Curso
        </td>
        <td class="table-header">
          Ações
        </td>
      </tr>
      <tr v-for="(course, index) in courses" :key="index">
        <td>
          {{course.title}}
        </td>
        <td>
          <button class="warning-btn">editar</button>
          <button class="danger-btn">excluir</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        courses: [{title:"A"},{title:"B"},{title:"C"}]
      }
    }
  }
</script>

<style>
  table {
    font-weight: 400;
    border: var(--table-border) 1px solid;
    border-spacing: 0;
    background-color: var(--table-background);
    font-size: 1.8rem;

  }

  .table-header {
    font-size: 2.4rem;
    background-color: var(--table-header);
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

  .class {
    margin-top: 2.1rem;
  }
</style>