<template>
  <div>
    <input type="text" v-model="name" placeholder="Nova tarefa" @keydown.enter="addNewTask">   
    <button @click="addNewTask">+</button>
  </div>
</template>

<script>
export default {
  props: { 
    newTask: {} 
  },
  data() {
    return {
      name: ""
    }
  },
  methods:{
    addNewTask() {
      this.newTask = {
        name: this.name,
        pending: true
      } 
      
      this.$emit("taskAdd", this.newTask)

      this.name = ""
    }
  }
}
</script>

<style>

</style>