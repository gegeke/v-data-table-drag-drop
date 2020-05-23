<template>
  <div
    v-if="isDragging"
  >
    <drop
      @drop="handleDrop"
    >
      <div
        class="d-flex justify-center align-center drop-area"
      >
        PUT IT IN THE TRASHCAN
      </div>
    </drop>
  </div>
</template>

<script>
export default {
  name: "TrashCan",
  props: {
    isDragging: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleDrop(data) {
      console.log('to trash:', data)
    }
  }
}
</script>
<style lang="scss" scoped>
.drop-area {
  background-color: rgba(43, 192, 110, 0.4);
  display: block;
  width: 100%;
  height: 50px;
}
</style>