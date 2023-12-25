import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES } from "../pages/registry";
class Navigation {
    #authenticatedRoutes = [];
    #unauthenticatedRoutes = [];
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
    }
    get AvailableRoutes() {
        return { ...UNAUTHENTICATED_ROUTES, ...AUTHENTICATED_ROUTES };
    }
    get AuthRoutes() {
        return this.#authenticatedRoutes;
    }
    get UnauthRoutes() {
        return this.#unauthenticatedRoutes;
    }
    get SidebarRoutes() {
        return Object.values(ROUTES).filter((r) => !r.excludeFromSidebar);
    }
    /**
     * @param {String} path
     * @returns {Object}
     */
    getRouteDataByPath(path) {
        return Object.values(this.AvailableRoutes).find((route) => route.path == path);
    }
}

export default new Navigation();
