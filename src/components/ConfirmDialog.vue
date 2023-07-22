<template>
  <div>
    <q-dialog v-model="show" persistent>
      <q-card style="width: 400px">
        <q-card-section v-if="heading">
          <div class="text-h6">{{ heading }}</div>
        </q-card-section>
        <q-card-section v-if="subHeading" class="q-pt-none">
          {{ subHeading }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            :label="secondary"
            color="primary"
            @click="$emit('cancel')"
          />
          <q-btn
            flat
            :label="primary"
            color="primary"
            @click="$emit('confirm')"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  heading: String,
  subHeading: String,
  show: Boolean,
  primary: {
    type: String,
    default: "Confirm",
  },
  secondary: {
    type: String,
    default: "Cancel",
  },
});

const show = ref(props.show);
</script>

<style lang="scss" scoped></style>
