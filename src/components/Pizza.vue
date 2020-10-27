<template>
  <b-table
    style="text-align:center"
    :items="orders"
    :fields="fields"
    bordered
    small
  >
    <template v-slot:cell(slno)="data">{{ data.index + 1 }}</template>
    <template v-slot:cell(status)="data">{{
      status[data.item.status]
    }}</template>
    <template v-slot:cell(action)="data"
      ><b-button
        :disabled="data.item.status == '3'"
        @click="updateOrder({ index: data.index })"
        variant="success"
        >Update Status</b-button
      ></template
    >
  </b-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({ orders: "getOrders" }),
  },
  data() {
    return {
      status: {
        1: "Order Received",
        2: "Preparing",
        3: "Ready to Serve",
      },
      fields: [
        { label: "No.", key: "slno" },
        { label: "Customer Name", key: "name" },
        { label: "Quantity", key: "quantity" },
        { label: "Total Amount", key: "total_amount" },
        { label: "Status", key: "status" },
        { label: "Action", key: "action" },
      ],
    };
  },
  methods: {
    ...mapActions(["updateOrder"]),
  },
};
</script>

<style lang="scss" scoped></style>
