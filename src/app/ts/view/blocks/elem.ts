import {IElem} from "./iElem";

export class Elem implements IElem{
	private elem : HTMLElement;
	constructor(private type: string, private attrs?: Object, private content?: string){
		this.elem = document.createElement(type);
		if(attrs){
			for(let attr in attrs){
				if(attrs.hasOwnProperty(attr)){
					this.elem.setAttribute(attr, attrs[attr]);
				}
			}
		}
		if(content){
			this.elem.innerHTML = content;
		}
	}
	getElem():HTMLElement{
		return this.elem;
	}
}
