import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    orders: [
      // will typically get this from an api
      { name: "Adam", quantity: "3", total_amount: "150", status: 1 },
      { name: "James", quantity: "4", total_amount: "200", status: 1 },
      { name: "Eve", quantity: "1", total_amount: "50", status: 1 },
      { name: "Smith", quantity: "2", total_amount: "100", status: 1 },
    ],
  },
  mutations: {
    updateOrders: (state, idx) => (state.orders[idx].status += 1), // incrementing status
  },
  actions: {
    updateOrder: (state, payload) =>
      state.commit("updateOrders", payload.index),
  },
  getters: {
    getOrders: (state) => state.orders,
  },
});
