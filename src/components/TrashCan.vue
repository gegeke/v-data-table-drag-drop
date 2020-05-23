<template>
  <div>
    <drop
      @drop="handleDrop"
    >
      <div
        class="drop-area"
      >
        PUT IT IN THE TRASHCAN
      </div>
    </drop>
  </div>
</template>

<script>
export default {
  name: "TrashCan",
  methods: {
    handleDrop(data) {
      console.log(data)
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