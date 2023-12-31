import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES } from "../../pages/registry";

class Navigation {
    #authenticatedRoutes = [];
    #unauthenticatedRoutes = [];
    #availableRoutes = {};
    #sidebarRoutes = [];
    constructor() {
        this.#authenticatedRoutes = Object.values(AUTHENTICATED_ROUTES).map((route) => ({
            ...route,
            isAuthenticated: true
        }));
        this.#unauthenticatedRoutes = Object.values(UNAUTHENTICATED_ROUTES).map((route) => ({
            ...route,
            isAuthenticated: false,
            excludeFromSidebar: true
        }));
        this.#availableRoutes = { ...AUTHENTICATED_ROUTES, ...UNAUTHENTICATED_ROUTES };
        this.#sidebarRoutes = Object.values(this.#availableRoutes).filter((r) => !r.excludeFromSidebar);
    }
    get AvailableRoutes() {
        return this.#availableRoutes;
    }
    get AuthRoutes() {
        return this.#authenticatedRoutes;
    }
    get UnauthRoutes() {
        return this.#unauthenticatedRoutes;
    }
    get SidebarRoutes() {
        return this.#sidebarRoutes;
    }
    /**
     * @param {String} path
     * @returns {Object}
     */
    getRouteDataByPath(path) {
        return Object.values(this.AvailableRoutes).find((route) => route.path === path);
    }
}

export default new Navigation();
