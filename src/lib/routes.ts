// Define a Route interface representing a route configuration.
interface Route {
    path: string;                // Path of the route.
    private: boolean;            // Indicates if the route is private.
    get: (query: string) => string;  // Function to get the full path with optional query string.
}

// Function to create a new Route object.
const createRoute = (path: string, privateRoute: boolean): Route => {
    return {
        path,                     // Path of the route.
        private: privateRoute,    // Whether the route is private or not.
        get(query) {              // Method to get the full path with an optional query string.
            return this.path + (query || '');  // Concatenate path and query (if provided).
        },
    };
}

// Initialize routes with specific configurations using createRoute function.
const routes: Record<string, Route> = {
    home: createRoute('/', false),          // Public route leading to the home page.
    login: createRoute('/login', false),    // Public route for the login page.
    dashboard: createRoute('/dashboard', true),  // Private route requiring authentication for the dashboard.
    invoice: createRoute('/invoice', true),      // Private route requiring authentication for the invoice page.
};

// Function to retrieve paths of all private routes.
function getPrivateRoutes(): Array<string> {
    const stringList: Array<string> = [];   // Initialize an array to store paths of private routes.
    for (const key in routes) {
        if (routes[key].private) {          // Check if the route is private.
            stringList.push(routes[key].path);  // Add the path of the private route to the array.
        }
    }
    return stringList;  // Return the array of paths for private routes.
}

// Export the function to retrieve private routes and the routes configuration.
export { getPrivateRoutes };
export default routes;  // Export the routes configuration as default.
