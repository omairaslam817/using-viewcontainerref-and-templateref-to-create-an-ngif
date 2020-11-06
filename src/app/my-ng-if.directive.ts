import { Directive, OnInit,  TemplateRef,  ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective implements OnInit {

  constructor(private viewContainer:ViewContainerRef,private templalteReff:TemplateRef<Object>) { }
ngOnInit(): void {
const condtion =true;
if(condtion){
  this.viewContainer.createEmbeddedView(this.templalteReff);
}else{
  this.viewContainer.clear();
}
}

}