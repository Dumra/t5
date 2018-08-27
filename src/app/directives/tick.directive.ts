import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Directive({
    selector: '[appTick]'
})
export class TickDirective implements OnInit{

    @Input() firstColor: string;
    @Input() secondColor: string;
    @Output('tickEvent') tickEvent = new EventEmitter<number>();

    private isFirstColor: boolean;
    private tickCounter: number;

    constructor(private el: ElementRef) {
    }

    @HostListener('tickEvent') onTick() {
        if (this.isFirstColor) {
            this.changeBackGroundColor(this.secondColor);
            this.isFirstColor = false;
        } else {
            this.changeBackGroundColor(this.firstColor);
            this.isFirstColor = true;
        }
    }

    private changeBackGroundColor(color: string) {
        this.el.nativeElement.style.color = color;
    }

    ngOnInit() {
        setInterval(() => {
            this.tickEvent.emit(Date.now());
        }, 1000);
    }

}
