import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import EmailVerification from "./EmailVerification";
import Dashboard from "./Dashboard";

export const UNAUTHENTICATED_ROUTES = {
    SIGNIN: {
        path: "/",
        default: true,
        component: SignIn
    },
    SIGNUP: {
        path: "/signup",
        component: SignUp
    },
    RESET_PASSWORD: {
        path: "/reset-password",
        component: ResetPassword
    },
    CONFIRM_RESET_PASSWORD: {
        path: "/resetPassword/:token",
        component: ResetPassword
    },
    EMAIL_VERIFICATION: {
        path: "/verification/:token",
        component: EmailVerification
    }
};
export const AUTHENTICATED_ROUTES = {
    DASHBOARD: {
        path: "/dashboard",
        default: true,
        label: "Dashboard",
        component: Dashboard,
        image: ""
    }
};
