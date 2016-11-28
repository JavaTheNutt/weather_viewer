import {IView} from "../iView";
import {Elem} from "../blocks/elem";
/**
 * Created by joewe on 28/11/2016.
 */
export class HomeView implements IView {
	private rootElem = new Elem('h1', {'class': 'text-center'}, 'Home page view');

	getHtml(): HTMLElement{
		return this.rootElem.getElem();
	}
}
