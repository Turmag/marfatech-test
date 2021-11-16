<template>
  <div class="search-field">
    <label class="search-field__label">
      <div class="search-field__label-text">Выберите город</div>
      <input
        class="search-field__label-input"
        v-model="city"
        @keyup="searchCity"
        @keydown="clearSearch"
        @click="showCities"
      />
      <div class="search-field__label-input-icon">
        <img src="@/static/search/input-icon.svg" alt />
      </div>
    </label>

    <div class="search-field-inner-container">
      <app-loader :visible="isLoaderVisible" />
      <app-list :visible="isListVisible" @chooseElem="chooseElem" @closeList="closeList" />
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Search/Loader";
import List from "@/components/Search/List";

export default {
  data() {
    return {
      isLoaderVisible: false,
      isListVisible: false,
      city: "",
      searchTimeout: "",
      isFirstSearch: true
    };
  },
  methods: {
    async searchCity(e) {
      if (e.keyCode == 27) {
        return;
      }

      let value = e.target.value;
      if ((value.length > 2 && this.isFirstSearch) || !this.isFirstSearch) {
        this.isFirstSearch = false;

        clearTimeout(this.searchTimeout);

        if (value.length == 0) {
          this.isFirstSearch = true;
          return;
        }

        let that = this;
        await new Promise(function(resolve, reject) {
          that.searchTimeout = setTimeout(function() {
            that.isLoaderVisible = true;
            resolve();
          }, 1000);
        });

        await this.$store.dispatch("cities/getCitiesByStr", value);

        this.isLoaderVisible = false;
        this.isListVisible = true;
      }
    },
    clearSearch() {
      clearTimeout(this.searchTimeout);

      this.isLoaderVisible = false;
      this.isListVisible = false;
    },
    closeList() {
      this.isListVisible = false;
    },
    showCities() {
      const cities = this.$store.getters["cities/cities"];
      if (cities.length > 0) {
        this.isListVisible = true;
      }
    },
    async chooseElem(id) {
      await this.$store.dispatch("cities/chooseCity", id);

      const city = this.$store.getters["cities/cityById"](id);
      this.city = city.title;

      this.isLoaderVisible = false;
      this.isListVisible = false;
    }
  },
  components: {
    appLoader: Loader,
    appList: List
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.search-field {
  position: relative;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  min-width: 300px;
  width: calc(100% - 100px);
  max-width: 1200px;
}

.search-field__label {
  position: relative;
  width: 100%;

  z-index: 1;
}

.search-field__label-text {
  width: 100%;
  color: #acacac;
  font-size: 14px;
}

.search-field__label-input {
  width: 100%;
  height: 35px;
  padding: 8px 8px 8px 35px;

  font-size: $fontSize;

  border: 1px solid #eeeeee;
  border-radius: 4px;
  outline: 0;

  filter: drop-shadow(0px 7px 11px rgba(8, 0, 47, 0.07))
    drop-shadow(0 3px 5px rgba(8, 0, 47, 0.04));
}

.search-field__label-input-icon {
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
}

.search-field__label-input-icon img {
  width: 18px;
}

.search-field-inner-container {
  position: relative;
  width: 100%;
}
</style>