import { reactive } from "vue";

export const store = reactive({
    movies: [],
    series: [],
    searchText: "",
    categorySelected: "all",
    navigationLinks: [],
    homeActive: true,
    moviesActive: false,
    seriesActive: false,
})