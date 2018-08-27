import {Directive, TemplateRef, ViewContainerRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appClock]'
})
export class ClockDirective {

    private tickCounter;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {
    }

    @Input()
    set appClock(condition: number) {
        if (condition) {
            this.viewContainer.clear();
            this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: Date.now()});
        } else {
            this.viewContainer.clear();
        }
    }

}
