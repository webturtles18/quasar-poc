<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="state.newTask"
        square
        filled
        dense
        bg-color="white"
        placeholder="Add Task"
        class="col"
        @keyup.enter="addTask"
      >
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addTask" />
        </template>
      </q-input>
    </div>
    <q-list separator bordered class="bg-white">
      <q-item
        v-for="(task, index) in state.tasks"
        :key="index"
        @click="task.done = !task.done"
        clickable
        v-ripple
        :class="{ done: task.done }"
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="primary"
            class="no-no-pointer-events"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            flat
            color="primary"
            icon="delete"
            @click.stop="confirmDeleteTask(index)"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!state.tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary"></q-icon>
      <div class="text-h5 text-primary text-center">No Tasks</div>
    </div>
    <ConfirmDialog
      v-if="state.showConfirmDialog"
      show
      heading="Confirm"
      subHeading="Are you sure?"
      @confirm="deleteTask"
      @cancel="state.showConfirmDialog = false"
    />
  </q-page>
</template>

<script setup>
import { reactive, ref } from "vue";
// Components
import ConfirmDialog from "components/ConfirmDialog.vue";
// Helpers
import { notify } from "boot/notify";

const state = reactive({
  tasks: [],
  newTask: "",
  showConfirmDialog: false,
  selectedIndex: null,
});

const addTask = () => {
  state.tasks.push({
    title: state.newTask,
    done: false,
  });

  state.newTask = "";
};

const confirmDeleteTask = (index) => {
  state.selectedIndex = index;
  state.showConfirmDialog = true;
};
const deleteTask = () => {
  state.tasks.splice(state.selectedIndex, 1);
  state.showConfirmDialog = false;
  state.selectedIndex = null;
  notify("Task deleted");
};
</script>

<style lang="scss" scoped>
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.5;
}
</style>
