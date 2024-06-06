import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[ClickOutside]'
})
export class ClickOutsideDirective {

  @Input() exclude: string = ''; // CSS selector để xác định những element không trigger clickOutside
  @Output() clickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event', '$event.target'])
  public onDocumentClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInsideThis = this.elementRef.nativeElement.contains(targetElement);
    const clickedInsideExcluded = this.exclude ? document.querySelector(this.exclude)?.contains(targetElement) : false;

    if (!clickedInsideThis && !clickedInsideExcluded) {
      this.clickOutside.emit(event);
    }
  }

}
