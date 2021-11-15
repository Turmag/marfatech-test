<template>
  <div
    class="search-elem"
    :data-id="elem.id"
    @click="chooseElem(elem.id)"
    :class="searchClass(elem.active)"
  >
    <div class="search-elem-title">{{ elem.title }}</div>
    <div class="search-elem-text">{{ elem.text }}</div>
  </div>
</template>

<script>
export default {
  props: ["elem"],
  methods: {
    chooseElem(id) {
      this.$emit("chooseElem", id);
    },
    searchClass(isActive) {
      return {
        "search-elem--active": isActive
      };
    }
  }
};
</script>

<style scoped>
.search-elem {
  width: 100%;
  padding: 12px;

  cursor: pointer;
  user-select: none;
}

.search-elem:hover,
.search-elem--active {
  background-color: #eeeeee;
}

.search-elem-title {
  font-weight: 700;
}

.search-elem-text {
  font-size: 14px;
  color: #aaaaaa;
}
</style>