<template>
  <section class="main-section">
    <app-field />
  </section>
</template>

<script>
import Field from "@/components/Search/Field";
export default {
  components: {
    appField: Field
  }
};
</script>

<style scoped>
.main-section {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
}
</style>