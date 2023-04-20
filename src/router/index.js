import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import GRN from "../components/GRN/GRN.vue";
// import AddSample from "../components/Sample/AddSample.vue";
// import SampleEdit from "../components/Sample/SampleEdit.vue";
// import SampleDetails from "../components/Sample/SampleDetails.vue";
import Store from "../components/Store/Store.vue";
// import AddOrder from "../components/Orders/AddOrder.vue";
// import OrderDetails from "../components/Orders/OrderDetails.vue";
import GDN from "../components/GDN/GDN.vue";
import OrderDispatch from "../components/GDN/OrderDispatch.vue";
import Actions from "../components/Actions/Actions.vue";
// import Dispatch from "../components/Delivery/Dispatch.vue";
import Notification from "../components/Notification/Notification.vue";
import Login from "../components/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/GRN",
      name: "GRN",
      component: GRN,
    },
    // {
    //   path: "/AddSample",
    //   name: "AddSample",
    //   component: AddSample,
    // },
    // {
    //   path: "/SampleEdit",
    //   name: "SampleEdit",
    //   component: SampleEdit,
    // },
    // {
    //   path: "/SampleDetails",
    //   name: "SampleDetails",
    //   component: SampleDetails,
    // },
    {
      path: "/Store",
      name: "Store",
      component: Store,
    },
    // {
    //   path: "/AddOrder",
    //   name: "AddOrder",
    //   component: AddOrder,
    // },
    // {
    //   path: "/OrderDetails",
    //   name: "OrderDetails",
    //   component: OrderDetails,
    // },
    {
      path: "/GDN",
      name: "GDN",
      component: GDN,
    },
    {
      path: "/OrderDispatch",
      name: "OrderDispatch",
      component: OrderDispatch,
    },
    {
      path: "/Actions",
      name: "Actions",
      component: Actions,
    },
    // {
    //   path: "/Dispatch",
    //   name: "Dispatch",
    //   component: Dispatch,
    // },
    {
      path: "/Notification",
      name: "Notification",
      component: Notification,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    
  ],
});

export default router;
