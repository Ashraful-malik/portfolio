<template>
  <div>
    <div @mousemove="mouseMove" class="relative md:">
      <div class="cursor" id="cursor"></div>

      <Herosection />
    </div>
  </div>
</template>

<script>
// import feather from "feather-icons";
export default {
  name: "IndexPage",

  data() {
    return {
      cursor: "",
    };
  },

  mounted() {
    // feather.replace();

    const cursors = document.getElementById("cursor");
    this.cursor = cursors;
  },
  methods: {
    mouseMove(e) {
      this.cursor.style.left = e.pageX - 50 + "px";
      this.cursor.style.top = e.pageY - 50 + "px";
      this.cursor.style.display = "block";
    },
  },
};
</script>
<style scoped>
.cursor {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgb(20, 20, 20);
  border-radius: 50%;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  display: none;
}
</style>
