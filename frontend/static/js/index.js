//import Dashboard  from "./views/Dashboard.js";
//import Posts from "./views/Posts.js";
//import Settings from "./views/Settings.js";

const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
}

const router = async ()=>{
    const routes = [
        {path:"/",view: ()=> console.log('"viewing dashbarosd')},
       {path:"/posts", view: ()=> console.log('"viewing posts')},
       {path:"/settings", view: ()=> console.log('"viewing settings')}
    ]

    //Test each routes for portenials maths
const potentialMathes = routes.map(route=>{
    return {
        route,
        isMatch : location.pathname === route.path
    }
})

let match = potentialMathes.find(potentialMath => potentialMath.isMatch);
if(!match)
  match = {
      route : routes[0],
      isMatch: true
  }
//const view = new match.route.view();
//document.querySelector("#app").innerHTML =await view.getHtml();
console.log(match.route.view());
}
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", e=>{
        if(e.target.matches("[data-link")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});

