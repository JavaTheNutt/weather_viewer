import {HomeView} from "../view/home_view/homeView";
let homeView = new HomeView();
export function appendHome(elem:HTMLElement){
	elem.appendChild(homeView.getHtml())
}


