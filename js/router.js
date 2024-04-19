
export class Router {
    routes = {}
    background = {}

    add(routeName, page){
        this.routes[routeName] = page
    }
    
    addBackground(routeName, background){
        this.background[routeName] = background
    }



    route(event) {
        event = event || window.event
    
        event.preventDefault();
        window.history.pushState({},"",event.target.href)
    
        this.handle()

        
    }

    handle(){
        const pathName = window.location.pathname
        const route = this.routes[pathName] || this.routes[404]
        const background = this.background[pathName] || this.background[404]
    
        fetch(route).then( data => data.text()).then( html => {
            document.querySelector("#app").innerHTML = html
        })
        if(background){
             document.body.style.backgroundImage = `url(${background})`
        }
        
    }

}