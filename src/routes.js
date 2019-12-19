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
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";

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
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/datasets",
    name: "Datasets",
    rtlName: "الرموز",
    icon: "tim-icons icon-app",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/config",
    name: "Configuration",
    rtlName: "خرائط",
    icon: "tim-icons icon-settings-gear-63",
    component: Map,
    layout: "/admin"
  }
];
export default routes;
