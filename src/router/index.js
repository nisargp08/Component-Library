import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // Application UI
  // Elements
  {
    path: "/elements/avatars",
    name: "Avatars",
    component: () =>
      import(/* webpackChunkName : "Avatars */ "@/views/Elements/Avatars.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Avatars" }],
    },
  },
  {
    path: "/elements/dropdowns",
    name: "Dropdowns",
    component: () =>
      import(
        /* webpackChunkName : "Dropdowns */ "@/views/Elements/Dropdowns.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Dropdowns" }],
    },
  },
  {
    path: "/elements/badges",
    name: "Badges",
    component: () =>
      import(/* webpackChunkName : "Badges */ "@/views/Elements/Badges.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Badges" }],
    },
  },
  {
    path: "/elements/buttons",
    name: "Buttons",
    component: () =>
      import(/* webpackChunkName : "Buttons */ "@/views/Elements/Buttons.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Buttons" }],
    },
  },
  // Overlays
  {
    path: "/overlays/modals",
    name: "Modals",
    component: () =>
      import(/* webpackChunkName : Modals */ "@/views/Overlays/Modals.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Modals" }],
    },
  },
  {
    path: "/overlays/notification",
    name: "Notifications",
    component: () =>
      import(
        /* webpackChunkName : Notifications */ "@/views/Overlays/Notifications.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Notifications" }],
    },
  },
  {
    path: "/overlays/slide-overs",
    name: "SlideOvers",
    component: () =>
      import(
        /* webpackChunkName : Notifications */ "@/views/Overlays/SlideOvers.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Slide Overs" }],
    },
  },
  // Navigation
  {
    path: "/navigation/navbars",
    name: "Navbars",
    component: () =>
      import(/* webpackChunkName : Navbars */ "@/views/Navigation/Navbars.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Navbars" }],
    },
  },
  {
    path: "/navigation/pagination",
    name: "Pagination",
    component: () =>
      import(
        /* webpackChunkName : Pagination */ "@/views/Navigation/Pagination.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Pagination" }],
    },
  },
  {
    path: "/navigation/tabs",
    name: "Tabs",
    component: () =>
      import(/* webpackChunkName : Tabs */ "@/views/Navigation/Tabs.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Tabs" }],
    },
  },
  {
    path: "/navigation/vertical-navigation",
    name: "VerticalNavigation",
    component: () =>
      import(
        /* webpackChunkName : VerticalNavigation */ "@/views/Navigation/VerticalNavigation.vue"
      ),
    meta: {
      breadcrumb: [
        { name: "Home", link: "Home" },
        { name: "Vertical Navigation" },
      ],
    },
  },
  {
    path: "/navigation/sidebar-navigation",
    name: "SidebarNavigation",
    component: () =>
      import(
        /* webpackChunkName : SidebarNavigation */ "@/views/Navigation/SidebarNavigation.vue"
      ),
    meta: {
      breadcrumb: [
        { name: "Home", link: "Home" },
        { name: "Sidebar Navigation" },
      ],
    },
  },
  {
    path: "/navigation/breadcrumbs",
    name: "Breadcrumbs",
    component: () =>
      import(
        /* webpackChunkName : Breadcrumbs */ "@/views/Navigation/Breadcrumbs.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Breadcrumbs" }],
    },
  },
  {
    path: "/navigation/steps",
    name: "Steps",
    component: () =>
      import(/* webpackChunkName : Steps */ "@/views/Navigation/Steps.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Steps" }],
    },
  },
  //Feedback
  {
    path: "/feedback/alerts",
    name: "Alerts",
    component: () =>
      import(/* webpackChunkName : Alerts */ "@/views/Feedback/Alerts.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Alerts" }],
    },
  },
  //Forms
  {
    path: "/forms/form-layouts",
    name: "FormLayouts",
    component: () =>
      import(
        /* webpackChunkName : FormLayouts */ "@/views/Forms/FormLayouts.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Form Layouts" }],
    },
  },
  {
    path: "/forms/select-menus",
    name: "SelectMenus",
    component: () =>
      import(
        /* webpackChunkName : SelectMenus */ "@/views/Forms/SelectMenus.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Select Menus" }],
    },
  },
  {
    path: "/forms/sign-in-forms",
    name: "SignInForms",
    component: () =>
      import(
        /* webpackChunkName : SignInForms */ "@/views/Forms/SignInForms.vue"
      ),
    meta: {
      breadcrumb: [
        { name: "Home", link: "Home" },
        { name: "Sign-in and Registration" },
      ],
    },
  },
  {
    path: "/forms/radio-groups",
    name: "RadioGroups",
    component: () =>
      import(
        /* webpackChunkName : RadioGroups */ "@/views/Forms/RadioGroups.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Radio Groups" }],
    },
  },
  {
    path: "/forms/toggles",
    name: "Toggles",
    component: () =>
      import(/* webpackChunkName : Toggles */ "@/views/Forms/Toggles.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Toggles" }],
    },
  },
  {
    path: "/forms/action-panels",
    name: "ActionPanels",
    component: () =>
      import(
        /* webpackChunkName : ActionPanels */ "@/views/Forms/ActionPanels.vue"
      ),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Action Panels" }],
    },
  },
  {
    path: "/lists/tables",
    name: "Tables",
    component: () =>
      import(/* webpackChunkName : Tables */ "@/views/Lists/Tables.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Tables" }],
    },
  },
  {
    path: "/lists/stacked-lists",
    name: "StackedLists",
    component: () =>
      import(/* webpackChunkName : StackedLists */ "@/views/Lists/StackedLists.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Stacked Lists" }],
    },
  },
  {
    path: "/lists/grid-lists",
    name: "GridLists",
    component: () =>
      import(/* webpackChunkName : GridLists */ "@/views/Lists/GridLists.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "Home" }, { name: "Grid Lists" }],
    },
  },
  // Wildcard for any other path
  {
    path: "*",
    redirect: {
      name: "Home",
    },
  },
  // {
  //   path : '*',
  //   name : 'Catchall',
  //   component : Home
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
