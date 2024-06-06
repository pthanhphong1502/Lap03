import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('menu', { static: false }) menu!: ElementRef;
  isMouseDown = false;
  startX = 0;
  scrollLeft = 0;
  showLeftButton = false;
  showRightButton = true;
  dropdownOpen = false;
  tabActive: any;
  active = true;

  selectItem(index: number): void {
    this.tabActive = this.lstTab[index];
  }

  ngOnInit(): void {
    this.lstTab;
    this.tabActive = this.lstTab[0];
    console.log('tabActive', this.tabActive)
    console.log(this.lstTab);
    for (let i = 0; i < this.lstTab.length; i++) {

    }
  }

  // Tắt mở Dropdown button ALL
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onOutsideClick(){
    this.dropdownOpen=false;
    console.log('Click ra ngoài')
  }

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

  // Fake data
  lstTab = [
    {
        customName: 'Sơ yếu lý lịch',
        entityName: "HR_EmpList",
        formName: "EmpList",
        functionID: "HREM101",
        functionType: "T",
        gridViewName: "grvEmpList",
        isActive: true,
        isBookmark: false,
        language: "VN",
        largeIcon: "bi bi-calendar",
        module: "HR",
        parentID: "HRT101d",
        url: "hr/emplist/HREM101",
        userID: ""
    },
    {
      customName: 'Thông tin pháp lý',
      entityName: "HR_EmpList",
      formName: "EmpList",
      functionID: "HREM102",
      functionType: "T",
      gridViewName: "grvEmpList",
      isActive: true,
      isBookmark: false,
      language: "VN",
      largeIcon: "bi bi-check-square",
      module: "HR",
      parentID: "HRT101d",
      url: "hr/emplist/HREM102",
      userID: ""
    },
    {
      customName: 'Lương & Phúc lợi',
      entityName: "HR_EmpList",
      formName: "EmpList",
      functionID: "HREM103",
      functionType: "T",
      gridViewName: "grvEmpList",
      isActive: true,
      isBookmark: false,
      language: "VN",
      largeIcon: "bi bi-person",
      module: "HR",
      parentID: "HRT101d",
      url: "hr/emplist/HREM103",
      userID: ""
    },
    {
      customName: 'Quá trình làm việc',
      entityName: "HR_EmpList",
      formName: "EmpList",
      functionID: "HREM104",
      functionType: "T",
      gridViewName: "grvEmpList",
      isActive: true,
      isBookmark: false,
      language: "VN",
      largeIcon: "bi bi-clock",
      module: "HR",
      parentID: "HRT101d",
      url: "hr/emplist/HREM104",
      userID: ""
    },
    {
      customName: "Kiến thức",
      entityName: "HR_EmpList",
      formName: "EmpList",
      functionID: "HREM105",
      functionType: "T",
      gridViewName: "grvEmpList",
      isActive: true,
      isBookmark: false,
      language: "VN",
      largeIcon: "bi bi-person",
      module: "HR",
      parentID: "HRT101d",
      url: "hr/emplist/HREM105",
      userID: ""
    },
    {
      customName: "Khen thưởng - Kỷ luật",
      entityName: "HR_EmpList",
      formName: "EmpList",
      functionID: "HREM106",
      functionType: "T",
      gridViewName: "grvEmpList",
      isActive: true,
      isBookmark: false,
      language: "VN",
      largeIcon: "bi bi-person",
      module: "HR",
      parentID: "HRT101d",
      url: "hr/emplist/HREM106",
      userID: ""
    },
    {
      customName: "Sức khỏe - Hoạt động",
      entityName: "HR_EmpList",
      formName: "EmpList",
      functionID: "HREM107",
      functionType: "T",
      gridViewName: "grvEmpList",
      isActive: true,
      isBookmark: false,
      language: "VN",
      largeIcon: "bi bi-person",
      module: "HR",
      parentID: "HRT101d",
      url: "hr/emplist/HREM107",
      userID: ""
    },
    {
      customName: "Thôi việc",
      entityName: "HR_EmpList",
      formName: "EmpList",
      functionID: "HREM108",
      functionType: "T",
      gridViewName: "grvEmpList",
      isActive: true,
      isBookmark: false,
      language: "VN",
      largeIcon: "bi bi-journal",
      module: "HR",
      parentID: "HRT101d",
      url: "hr/emplist/HREM108",
      userID: ""
    },
    {
      customName: "Theo dõi thay đổi",
      entityName: "HR_EmpList",
      formName: "EmpList",
      functionID: "HREM109",
      functionType: "T",
      gridViewName: "grvEmpList",
      isActive: true,
      isBookmark: false,
      language: "VN",
      largeIcon: "bi bi-briefcase",
      module: "HR",
      parentID: "HRT101d",
      url: "hr/emplist/HREM109",
      userID: ""
    },
  ];

  lstFuncCurriculumVitae: any = []; // SYLL
  lstFuncLegalInfo: any = []; // Pháp lý
  lstFuncSalaryBenefit: any = []; // Phúc lợi
  lstFuncHRProcess: any = []; // QTLV
  lstFuncAward: any = []; // Khen thưởng - Kỹ luật
  lstFuncKnowledge: any = []; // Kiến thức
  lstFuncHealth: any = []; // Sức khỏe
  lstFuncQuitJob: any = []; // Thôi việc
  lstFuncChangeInfo: any = []; // Theo dõi thay đổi

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
