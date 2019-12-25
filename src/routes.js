/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Jobs from "views/Jobs.jsx";
import Docs from "views/Docs";
import Datasets from "views/Datasets";
import Configuration from "views/Configuration"

var routes = [
  {
    path: "/query",
    name: "Query",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-zoom-split",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/jobs",
    name: "Jobs",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-components",
    component: Jobs,
    layout: "/admin"
  },
  {
    path: "/datasets",
    name: "Datasets",
    rtlName: "الرموز",
    icon: "tim-icons icon-app",
    component: Datasets,
    layout: "/admin"
  },
  {
    path: "/config",
    name: "Configuration",
    rtlName: "خرائط",
    icon: "tim-icons icon-settings-gear-63",
    component: Configuration,
    layout: "/admin"
  },
  {
    path: "/docs",
    name: "Docs",
    rtlName: "خرائط",
    icon: "tim-icons icon-single-copy-04",
    component: Docs,
    layout: "/admin"
  }
];
export default routes;
