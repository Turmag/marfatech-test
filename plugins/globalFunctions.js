import Vue from "vue";

let GlobalFunctions = {};

GlobalFunctions.install = function (Vue, options) {
    Vue.isExistValue = function (value) {
        let result = false;
        if (typeof (value) !== "undefined" && value !== "" && value !== null) {
            result = true;
        }

        return result;
    }

    Vue.replaceRequestStr = function (value) {
        let valueLen = value.length,
            newArr = ["r"];
        for (let i = 0; i < valueLen; i++) {
            newArr.push(value.charCodeAt(i));
        }

        return newArr.join("");
    }
}

Vue.use(GlobalFunctions);