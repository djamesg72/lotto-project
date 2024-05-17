<template>
  <div id="timeLine">
    <div id="timeLineFill"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimeLine",
});
</script>
<style scoped lang="scss">
#timeLine {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 5px;
  background-color: rgba(white, 0.4);
  display: flex;
  justify-content: start;
  align-items: start;
}

#timeLineFill {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: greenyellow;
}
</style>
