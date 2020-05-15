import React from "react";

import HomePage from "../Screen/HomePage";
import CoursesPage from "../Screen/CoursePage";
import LoginPage from "../Screen/LoginPage";
import CourseDetailPage from "../Screen/CourseDetailPage";
import CartPage from "../Screen/CartPage";
import CheckoutPage from "../Screen/CheckoutPage";
import SignUpPage from "../Screen/SignUpPage";
import AdminPage from "../Screen/AdminPage";
import PucharseHistoryPage from "../Screen/PucharseHistoryPage";
import MessagePage from "../Screen/MessagePage";

import CoursesCategoryPage from "../Screen/CoursesCategoryPage";
const routes = [
    {
        path: "/",
        exact: true,
        main: ({ history, match }) => <HomePage history={history} match={match} />,
    },
    {
        path: "/coursedetail/:courseid",
        exact: false,
        main: ({ history, match }) => <CourseDetailPage history={history} match={match} />,
    },
    {
        path: "/category/:id",
        exact: false,
        main: ({ history, match }) => <CoursesCategoryPage history={history} match={match} />,
    },
    {
        path: "/courses",
        exact: false,
        main: ({ history, match }) => <CoursesPage history={history} match={match} />,
    },
    {
        path: "/cart",
        exact: false,
        main: ({ history, match }) => <CartPage history={history} match={match} />,
    },
    {
        path: "/signup",
        exact: false,
        main: ({ history, match }) => <SignUpPage history={history} match={match} />,
    },
    {
        path: "/login",
        exact: false,
        main: ({ history, match }) => <LoginPage history={history} match={match} />,
    },
    {
        path: "/checkout",
        exact: false,
        main: ({ history, match }) => <CheckoutPage history={history} match={match} />,
    },
    ,
    {
        path: "/pucharse-history",
        exact: false,
        main: ({ history, match }) => <PucharseHistoryPage history={history} match={match} />,
    },
    {
        path: "/message",
        exact: false,
        main: ({ history, match }) => <MessagePage history={history} match={match} />,
    },
    {
        path: "/admin",
        exact: false,
        main: ({ history, match }) => <AdminPage history={history} match={match} />,
    },
];

export default routes;
