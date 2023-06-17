/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import PaymentMethod from "views/PaymentMethod.js";
import ReferaFriend from "views/ReferaFriend.js";
import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
import Community from "views/Community.js";
import HelpCenter from "views/HelpCenter.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "My Account",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  
  {
    path: "/PaymentMethod",
    name: "Payment Method",
    rtlName: "الرموز",
    icon: "tim-icons icon-money-coins",
    component: <PaymentMethod />,
    layout: "/admin",
  },
  {
    path: "/ReferaFriend",
    name: "Refer a Friend",
    rtlName: "خرائط",
    icon: "tim-icons icon-heart-2",
    component: <ReferaFriend />,
    layout: "/admin",
  },
  
  {
    path: "/Community",
    name: "Community",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chat-33",
    component: <Community />,
    layout: "/admin",
  },
  {
    path: "/HelpCenter",
    name: "Help Center",
    rtlName: "طباعة",
    icon: "tim-icons icon-headphones",
    component: <HelpCenter />,
    layout: "/admin",
  },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // },
];
export default routes;
