export class RouteManager{

    public routes = [];

    constructor(){

    }

    all(){
        return this.routes;
    }

    add(route: string, component: any, guard?: any[]){
        this.routes.push({
            path: route,
            component: component,
            canActivate: guard
        })
    }
}