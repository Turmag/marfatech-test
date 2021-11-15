<template>
  <div class="search-list-wrapper" v-show="visible">
    <div class="search-list">
      <div class="search-list-elems" v-if="elems.length > 0">
        <app-elem
          v-for="elem in elems"
          :key="elem.active"
          :elem="elem"
          @chooseElem="chooseElem"
        ></app-elem>
      </div>
      <div class="search-list-elems search-list-elems--center" v-else>
        По Вашему запросу города не найдены
      </div>
    </div>
  </div>
</template>

<script>
import Elem from "@/components/Search/ListElem";

export default {
  props: ["visible"],
  computed: {
    elems() {
      return this.$store.getters["cities/cities"];
    },
  },
  methods: {
    chooseElem(id) {
      this.$emit("chooseElem", id);
    },
  },
  components: {
    appElem: Elem,
  },
};
</script>

<style scoped>
.search-list-wrapper {
  position: absolute;
  bottom: -8px;

  width: 100%;
}

.search-list {
  position: absolute;
  top: 0;

  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 50px;
  max-height: 200px;

  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;

  filter: drop-shadow(0px 7px 11px rgba(8, 0, 47, 0.07))
    drop-shadow(0 3px 5px rgba(8, 0, 47, 0.04));

  overflow: auto;
}

.search-list::-webkit-scrollbar {
  width: 8px;
}

.search-list::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #e5e5e5;
}

.search-list::-webkit-scrollbar-track {
  border-radius: 8px;
  background: #ffffff;
}

.search-list-elems {
  position: relative;
  width: 100%;
}

.search-list-elems--center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 8px;
}
</style>