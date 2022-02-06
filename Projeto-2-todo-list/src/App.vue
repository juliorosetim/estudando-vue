<template>
	<div id="app">
		<h1>Tarefas</h1>
		<AddTask @taskAdd="addNewTask($event)" />
		<TasksGrid :tasks="tasks" />
	</div>
</template>

<script>
import TasksGrid from '@/components/TasksGrid.vue';
import AddTask from '@/components/AddTask.vue';

export default {
	components: {
		TasksGrid, 
		AddTask
	},
	data() {
		return {
			tasks: [
				{ name: 'Lavar louça', pending: false},
				{ name: 'Comprar blusa', pending: true}
			],
			newTask: {}
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addNewTask(e) {
			this.tasks.push( e )	
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
