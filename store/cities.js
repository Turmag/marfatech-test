import Vue from "vue";

class City {
    constructor(title, text, id) {
        this.title = title;
        this.text = text;
        this.id = id;
    }
}

export const state = () => ({
    cities: [],
    requestObj: {}
});

export const mutations = {
    loadCities(state, payload) {
        state.cities = [];

        let cities = payload,
            citiesLen = cities.length;

        for (let i = 0; i < citiesLen; i++) {
            let title = cities[i].text,
                titleArr = title.split(" "),
                cityTitle = title,
                cityText = "";

            if (cities[i].text.includes("(")) {
                cityTitle = titleArr[0];
                titleArr.shift();
                cityText = titleArr.join(" ");
            }

            let city = new City(cityTitle, cityText, cities[i].id);
            state.cities.push(city);
        }
    },
    chooseCity(state, payload) {
        let citiesLen = state.cities.length;
        for (let i = 0; i < citiesLen; i++) {
            delete state.cities[i].active;
        }

        for (let i = 0; i < citiesLen; i++) {
            if (state.cities[i].id == payload) {
                state.cities[i].active = true;
            }
        }
    },
    setRequestObj(state, payload) {
        state.requestObj[payload.key] = payload.cities;
    }
};

export const actions = {
    async getCitiesByStr({ commit, getters }, payload) {
        const text = payload;
        let cities = [];

        const requestObj = getters.requestObj;
        const key = Vue.replaceRequestStr(text);

        if (Vue.isExistValue(requestObj[key])) {
            cities = requestObj[key];
        }
        else {
            cities = await this.$axios.get(
                `https://api.hh.ru/suggests/areas/?text=${text}`,
            );

            cities = cities.data.items;

            const obj = {
                key,
                cities
            }

            commit("setRequestObj", obj)
        }

        commit("loadCities", cities)
    },
    chooseCity({ commit }, payload) {
        commit("chooseCity", payload)
    }
};

export const getters = {
    cities(state) {
        return state.cities;
    },
    cityById(state, getters) {
        return function (id) {
            return getters.cities.find(city => city.id === id);
        }
    },
    requestObj(state) {
        return state.requestObj;
    }
};