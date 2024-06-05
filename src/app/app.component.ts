import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  @ViewChild('menu', { static: false }) menu!: ElementRef;
  isMouseDown = false;
  startX = 0;
  scrollLeft = 0;
  showLeftButton = false;
  showRightButton = true;

  items = [
    { icon: 'bi bi-calendar', headerText: 'NGHỈ PHÉP' },
    { icon: 'bi bi-clock', headerText: 'NGHỈ BÙ' },
    { icon: 'bi bi-person', headerText: 'BỔ NHIỆM - ĐIỀU CHUYỂN' },
    { icon: 'bi bi-journal', headerText: 'NHẬT KÝ CÔNG TÁC' },
    { icon: 'bi bi-briefcase', headerText: 'DỰ ÁN THAM GIA' },
    { icon: 'bi bi-clock', headerText: 'NGHỈ BÙ' },
    { icon: 'bi bi-person', headerText: 'BỔ NHIỆM - ĐIỀU CHUYỂN' },
    { icon: 'bi bi-journal', headerText: 'NHẬT KÝ CÔNG TÁC' },
    { icon: 'bi bi-briefcase', headerText: 'DỰ ÁN THAM GIA' },
    { icon: 'bi bi-clock', headerText: 'NGHỈ BÙ' },
    { icon: 'bi bi-person', headerText: 'BỔ NHIỆM - ĐIỀU CHUYỂN' },
    { icon: 'bi bi-journal', headerText: 'NHẬT KÝ CÔNG TÁC' },
    { icon: 'bi bi-briefcase', headerText: 'DỰ ÁN THAM GIA' },
    { icon: 'bi bi-check-square', headerText: 'CÔNG VIỆC THỰC HIỆN' }
  ];

  ngAfterViewInit() {
    this.checkScrollButtons();
  }

  scrollLeftButton() {
    this.menu.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(() => this.checkScrollButtons(), 300);
  }

  scrollRightButton() {
    this.menu.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => this.checkScrollButtons(), 300);
  }

  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.startX = event.pageX - this.menu.nativeElement.offsetLeft;
    this.scrollLeft = this.menu.nativeElement.scrollLeft;
  }

  onMouseLeave() {
    this.isMouseDown = false;
  }

  onMouseUp() {
    this.isMouseDown = false;
    this.checkScrollButtons();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown) return;
    event.preventDefault();
    const x = event.pageX - this.menu.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; //scroll-fast
    this.menu.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onScroll() {
    this.checkScrollButtons();
  }

  checkScrollButtons() {
    const { scrollLeft, scrollWidth, clientWidth } = this.menu.nativeElement;
    this.showLeftButton = scrollLeft > 0;
    // this.showRightButton = scrollLeft + clientWidth < scrollWidth;
    this.showRightButton = scrollLeft + clientWidth < scrollWidth - 1;
  }
}
