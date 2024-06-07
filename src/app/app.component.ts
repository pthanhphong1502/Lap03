import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('menu', { static: false }) menu!: ElementRef;

  //Tab
  // Tab

// Sơ yếu lý lịch
@ViewChild('eInfo') eInfo!: TemplateRef<any>;
@ViewChild('eJob') eJob!: TemplateRef<any>;
@ViewChild('eHiring') eHiring!: TemplateRef<any>;
@ViewChild('eFamilyTab') eFamilyTab!: TemplateRef<any>;
@ViewChild('eGroup') eGroup!: TemplateRef<any>;
@ViewChild('ePersonal') ePersonal!: TemplateRef<any>;
@ViewChild('eForeign') eForeign!: TemplateRef<any>;
@ViewChild('eContract') eContract!: TemplateRef<any>;

// Thông tin pháp lý
@ViewChild('overview') overview!: TemplateRef<any>;
@ViewChild('number') number!: TemplateRef<any>;
@ViewChild('personalAccount') personalAccount!: TemplateRef<any>;
@ViewChild('contract') contract!: TemplateRef<any>;
@ViewChild('passport') passport!: TemplateRef<any>;
@ViewChild('visa') visa!: TemplateRef<any>;
@ViewChild('work') work!: TemplateRef<any>;
@ViewChild('nowork') nowork!: TemplateRef<any>;
@ViewChild('card') card!: TemplateRef<any>;
@ViewChild('signup') signup!: TemplateRef<any>;
@ViewChild('car') car!: TemplateRef<any>;
@ViewChild('info') info!: TemplateRef<any>;

// Phúc lợi
@ViewChild('payrollGroup') payrollGroup!: TemplateRef<any>;
@ViewChild('basicBenefit') basicBenefit!: TemplateRef<any>;
@ViewChild('salaryJobPosition') salaryJobPosition!: TemplateRef<any>;
@ViewChild('allowance') allowance!: TemplateRef<any>;
@ViewChild('otherIncome') otherIncome!: TemplateRef<any>;
@ViewChild('compulsoryInsurance') compulsoryInsurance!: TemplateRef<any>;
@ViewChild('deductions') deductions!: TemplateRef<any>;
@ViewChild('allocatedAssets') allocatedAssets!: TemplateRef<any>;
@ViewChild('loan') loan!: TemplateRef<any>;
@ViewChild('otherInsurance') otherInsurance!: TemplateRef<any>;
@ViewChild('costCenter') costCenter!: TemplateRef<any>;
@ViewChild('driverAccount') driverAccount!: TemplateRef<any>;
@ViewChild('authorizationLetter') authorizationLetter!: TemplateRef<any>;

// Quá trình làm việc
@ViewChild('onLeave') onLeave!: TemplateRef<any>;
@ViewChild('compensatoryLeave') compensatoryLeave!: TemplateRef<any>;
@ViewChild('appoint') appoint!: TemplateRef<any>;
@ViewChild('workDiary') workDiary!: TemplateRef<any>;
@ViewChild('projects') projects!: TemplateRef<any>;
@ViewChild('workPerformed') workPerformed!: TemplateRef<any>;
@ViewChild('previousExperience') previousExperience!: TemplateRef<any>;

// Kiến thức
@ViewChild('major') major!: TemplateRef<any>;
@ViewChild('certificate') certificate!: TemplateRef<any>;
@ViewChild('skills') skills!: TemplateRef<any>;
@ViewChild('internalTraining') internalTraining!: TemplateRef<any>;
@ViewChild('research') research!: TemplateRef<any>;

// Khen thưởng - Kỷ luật
@ViewChild('evaluate') evaluate!: TemplateRef<any>;
@ViewChild('reward') reward!: TemplateRef<any>;
@ViewChild('discipline') discipline!: TemplateRef<any>;

// Sức khỏe - Hoạt động
@ViewChild('healthInsurance') healthInsurance!: TemplateRef<any>;
@ViewChild('workAccident') workAccident!: TemplateRef<any>;
@ViewChild('physicalExamination') physicalExamination!: TemplateRef<any>;
@ViewChild('occupationalDisease') occupationalDisease!: TemplateRef<any>;
@ViewChild('vaccineSchedule') vaccineSchedule!: TemplateRef<any>;
@ViewChild('member') member!: TemplateRef<any>;
@ViewChild('titleConferred') titleConferred!: TemplateRef<any>;
@ViewChild('events') events!: TemplateRef<any>;

// Thôi việc
@ViewChild('settlement') settlement!: TemplateRef<any>;
@ViewChild('handover') handover!: TemplateRef<any>;
@ViewChild('approvalProcess') approvalProcess!: TemplateRef<any>;

  isMouseDown = false;
  startX = 0;
  scrollLeft = 0;
  showLeftButton = false;
  showRightButton = true;
  dropdownOpen = false;
  tabMenuActive: any;
  tabActive: any; // Dùng
  isPin = true; // Dùng để xác định tab có được ghim hay không
  childrenTabs: any[] = []; // Chứa tất cả tab con
  ispinTab: any[] = []; // Dùng để chứa tất cả các tab con được ghim
  lstSubMenu: any[] = []; // Mảng truyền danh sách tab trong menu con
  parentTabID: any; // Lấy parentID cha của tab con (Sub Menu)
  // Danh sách parentID
  parentIDCurriculumVitae = 'HREM101';
  parentIDLegalInfo = 'HREM102';
  parentIDSalaryBenefit = 'HREM103';
  parentIDHRProcess = 'HREM104';
  parentIDKnowledge = 'HREM105';
  parentIDAward = 'HREM106';
  parentIDHealth = 'HREM107';
  parentIDQuitJob = 'HREM108';
  parentIDChangeInfo = 'HREM109';

  selectMenuActive(index: number) {
    this.isSubMenuVisible = true;
    this.tabMenuActive = this.lstTab[index];
    this.parentTabID = this.lstTab[index].functionID;
    switch (this.parentTabID) {
      case this.parentIDCurriculumVitae:
        this.lstSubMenu = this.lstFuncCurriculumVitae;
        this.lstSubMenu.forEach((tab) => {
          tab.isPin = true;
        });
        break;
      case this.parentIDLegalInfo:
        this.lstSubMenu = this.lstFuncLegalInfo;
        break;
      case this.parentIDSalaryBenefit:
        this.lstSubMenu = this.lstFuncSalaryBenefit;
        break;
      case this.parentIDHRProcess:
        this.lstSubMenu = this.lstFuncHRProcess;
        break;
      case this.parentIDKnowledge:
        this.lstSubMenu = this.lstFuncKnowledge;
        break;
      case this.parentIDAward:
        this.lstSubMenu = this.lstFuncAward;
        break;
      case this.parentIDHealth:
        this.lstSubMenu = this.lstFuncHealth;
        break;
      case this.parentIDQuitJob:
        this.lstSubMenu = this.lstFuncQuitJob;
        break;
      case this.parentIDChangeInfo:
        this.lstSubMenu = this.lstFuncChangeInfo;
        break;
    }
    console.log('Tab con', this.lstSubMenu);
  }

  selectTabActive(index: number): void {
    this.tabActive = this.childrenTabs[index];
    console.log('TabActive', this.tabActive);
  }

  // Thay đổi ghim trong Sub Menu
  changePinTab(subMenu: any): void {
    subMenu.isPin = !subMenu.isPin;
  }

  // Bỏ ghim hết
  unCheckedAll() {
    for (let i = 0; i < this.lstSubMenu.length; i++) {
      this.lstSubMenu[i].isPin = false;
    }
  }

  // Ghim tất cả
  checkedAll() {
    for (let i = 0; i < this.lstSubMenu.length; i++) {
      this.lstSubMenu[i].isPin = true;
    }
  }

  check: any;
  // Click vào tab trong Sub Menu
  clickTabSubMenu(e: any) {
    for (let i = 0; i < this.lstSubMenu.length; i++) {
      if (this.lstSubMenu[i].functionID == e.functionID) {
        if (e.isPin == false) {
          this.lstSubMenu[i].isPin = true;
          this.tabActive = this.lstSubMenu[i];
        } else {
          this.tabActive = this.lstSubMenu[i];
        }
      }
    }
    this.check = e.functionID;
    console.log('Check data', this.check);
  }

  ngOnInit(): void {
    this.lstTab;
    this.tabMenuActive = this.lstTab[0];
    console.log('tabMenuActive', this.tabMenuActive);
    console.log(this.lstTab);
    this.lstFuncCurriculumVitae;
    this.lstFuncLegalInfo;
    this.lstFuncSalaryBenefit;
    this.lstFuncHRProcess;
    this.lstFuncKnowledge;
    this.lstFuncAward;
    this.lstFuncHealth;
    this.lstFuncQuitJob;
    this.lstFuncChangeInfo;
    this.childrenTabs = this.childrenTabs.concat(
      this.lstFuncCurriculumVitae,
      this.lstFuncLegalInfo,
      this.lstFuncSalaryBenefit,
      this.lstFuncHRProcess,
      this.lstFuncKnowledge,
      this.lstFuncAward,
      this.lstFuncHealth,
      this.lstFuncQuitJob,
      this.lstFuncChangeInfo
    );
    this.childrenTabs.forEach((tab) => {
      tab.isPin = true;
    });
    console.log('childrenTabs', this.childrenTabs);
    this.tabActive = this.childrenTabs[0];
    console.log('TabActive', this.tabActive);
    this.lstSubMenu = this.lstFuncCurriculumVitae;
  }

  // Tắt mở Dropdown button ALL
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.isSubMenuVisible = true;
  }

  // Tắt Sub Menu
  isSubMenuVisible = true;
  closeSubMenu(): void {
    this.isSubMenuVisible = false;
  }

  onOutsideClick() {
    this.dropdownOpen = false;
    console.log('Click ra ngoài');
  }

  // Fake data
  lstTab = [
    {
      customName: 'Sơ yếu lý lịch',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM101',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM101',
      userID: '',
    },
    {
      customName: 'Thông tin pháp lý',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM102',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-check-square',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM102',
      userID: '',
    },
    {
      customName: 'Lương & Phúc lợi',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM103',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM103',
      userID: '',
    },
    {
      customName: 'Quá trình làm việc',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM104',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-clock',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM104',
      userID: '',
    },
    {
      customName: 'Kiến thức',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM105',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Khen thưởng - Kỷ luật',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM106',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM106',
      userID: '',
    },
    {
      customName: 'Sức khỏe - Hoạt động',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM107',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM107',
      userID: '',
    },
    {
      customName: 'Thôi việc',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM108',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-journal',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM108',
      userID: '',
    },
    {
      customName: 'Theo dõi thay đổi',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM109',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-briefcase',
      module: 'HR',
      parentID: 'HRT101d',
      url: 'hr/emplist/HREM109',
      userID: '',
    },
  ];

  // SYLL
  lstFuncCurriculumVitae = [
    {
      customName: 'Thông tin cá nhân',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10101',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM101',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Thông tin công việc',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10102',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-check-square',
      module: 'HR',
      parentID: 'HREM101',
      url: 'hr/emplist/HREM102',
      userID: '',
    },
    {
      customName: 'Thông tin tuyển dụng',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10103',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM101',
      url: 'hr/emplist/HREM103',
      userID: '',
    },
    {
      customName: 'Thân nhân',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10104',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-clock',
      module: 'HR',
      parentID: 'HREM101',
      url: 'hr/emplist/HREM104',
      userID: '',
    },
    {
      customName: 'Thông tin Đảng-Đoàn',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10105',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM101',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Tiểu sử cá nhân',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10106',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM101',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Lao động nước ngoài',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10107',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM101',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Hồ sơ cần nộp',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10108',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM101',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
  ];

  // Phap ly
  lstFuncLegalInfo = [
    {
      customName: 'Sổ bảo hiểm - Sổ lao động',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10201',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Tài khoản cá nhân',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10202',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-check-square',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM102',
      userID: '',
    },
    {
      customName: 'Hợp đồng lao động',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10203',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM103',
      userID: '',
    },
    {
      customName: 'Hộ chiếu',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10204',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-clock',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM104',
      userID: '',
    },
    {
      customName: 'Thị thực',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10205',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Giấy phép lao động',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10206',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Miễn giấy phép lao động',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10207',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Thẻ tạm trú',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10208',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Đăng ký tạm trú',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10209',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Giấy phép lái xe',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10210',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Thông tin ủy quyền',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10211',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM102',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
  ];

  // Phúc lợi
  lstFuncSalaryBenefit = [
    {
      customName: 'Nhóm tính lương',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10301',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Lương cơ bản',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10302',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Lương theo vị trí công việc',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10303',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Phụ cấp',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10304',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Thu nhập khác',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10305',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Bảo hiểm bắt buộc',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10306',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Khấu trừ khác',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10307',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Tài sản cấp phát',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10308',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Tiền vay',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10309',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Bảo hiểm khác',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10310',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Trung tâm chi phí',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10311',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Tài khoản tài xế',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10312',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Giấy ủy quyền',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10313',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM103',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
  ];

  // QTLV
  lstFuncHRProcess = [
    {
      customName: 'Nghỉ phép',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10401',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM104',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Nghỉ bù',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10402',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-check-square',
      module: 'HR',
      parentID: 'HREM104',
      url: 'hr/emplist/HREM102',
      userID: '',
    },
    {
      customName: 'Bổ nhiệm - Điều chuyển',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10403',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM104',
      url: 'hr/emplist/HREM103',
      userID: '',
    },
    {
      customName: 'Nhật ký Công tác',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10404',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-clock',
      module: 'HR',
      parentID: 'HREM104',
      url: 'hr/emplist/HREM104',
      userID: '',
    },
    {
      customName: 'Dự án tham gia',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10405',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM104',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Công việc thực hiện',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10406',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM104',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Kinh nghiệm trước đây',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10407',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM104',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
  ];

  // Kiến thức
  lstFuncKnowledge = [
    {
      customName: 'Bằng cấp',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10501',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM105',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Chứng chỉ',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10502',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-check-square',
      module: 'HR',
      parentID: 'HREM105',
      url: 'hr/emplist/HREM102',
      userID: '',
    },
    {
      customName: 'Kỹ năng',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10503',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM105',
      url: 'hr/emplist/HREM103',
      userID: '',
    },
    {
      customName: 'Đào tạo nội bộ',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10504',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-clock',
      module: 'HR',
      parentID: 'HREM105',
      url: 'hr/emplist/HREM104',
      userID: '',
    },
    {
      customName: 'Công trình nghiên cứu',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10505',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM105',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
  ];

  // Khen thưởng - Kỹ luật
  lstFuncAward = [
    {
      customName: 'Đánh giá',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10601',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM106',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Khen thưởng',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10602',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-check-square',
      module: 'HR',
      parentID: 'HREM106',
      url: 'hr/emplist/HREM102',
      userID: '',
    },
    {
      customName: 'Kỷ luật',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10603',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM106',
      url: 'hr/emplist/HREM103',
      userID: '',
    },
  ];

  // Sức khỏe
  lstFuncHealth = [
    {
      customName: 'Thẻ Bảo hiểm y tế',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10701',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM107',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Tai nạn lao động',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10702',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-check-square',
      module: 'HR',
      parentID: 'HREM107',
      url: 'hr/emplist/HREM102',
      userID: '',
    },
    {
      customName: 'Khám sức khỏe',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10703',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM107',
      url: 'hr/emplist/HREM103',
      userID: '',
    },
    {
      customName: 'Bệnh nghề nghiệp',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10704',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-clock',
      module: 'HR',
      parentID: 'HREM107',
      url: 'hr/emplist/HREM104',
      userID: '',
    },
    {
      customName: 'Tiêm vaccine',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10705',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM107',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Hội viên',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10706',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM107',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Danh hiệu được phong',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10707',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM107',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
    {
      customName: 'Sự kiện',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10708',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM107',
      url: 'hr/emplist/HREM105',
      userID: '',
    },
  ];

  // Thôi việc
  lstFuncQuitJob = [
    {
      customName: 'Thông tin thôi việc',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10801',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-calendar',
      module: 'HR',
      parentID: 'HREM108',
      url: 'hr/emplist/HREM10101',
      userID: '',
    },
    {
      customName: 'Chi tiết bàn giao',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10802',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-check-square',
      module: 'HR',
      parentID: 'HREM108',
      url: 'hr/emplist/HREM102',
      userID: '',
    },
    {
      customName: 'Quá trình duyệt đơn',
      entityName: 'HR_EmpList',
      formName: 'EmpList',
      functionID: 'HREM10803',
      functionType: 'T',
      gridViewName: 'grvEmpList',
      isActive: true,
      isBookmark: false,
      language: 'VN',
      largeIcon: 'bi bi-person',
      module: 'HR',
      parentID: 'HREM108',
      url: 'hr/emplist/HREM103',
      userID: '',
    },
  ];
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

  // Khởi tạo danh sách template
  listTemplateTabs: any = [];

  initTabs(): void {
    this.listTemplateTabs = [
      { name: 'HREM10101', template: this.eInfo },
      { name: 'HREM10102', template: this.eJob },
      { name: 'HREM10103', template: this.eHiring },
      { name: 'HREM10104', template: this.eFamilyTab },
      { name: 'HREM10105', template: this.eGroup },
      { name: 'HREM10106', template: this.ePersonal },
      { name: 'HREM10107', template: this.eForeign },
      { name: 'HREM10108', template: this.eContract },
      /////////////////////////////
      { name: 'HREM10201', template: this.number },
      { name: 'HREM10202', template: this.personalAccount },
      { name: 'HREM10203', template: this.contract },
      { name: 'HREM10204', template: this.passport },
      { name: 'HREM10205', template: this.visa },
      { name: 'HREM10206', template: this.work },
      { name: 'HREM10207', template: this.nowork },
      { name: 'HREM10208', template: this.card },
      { name: 'HREM10209', template: this.signup },
      { name: 'HREM10210', template: this.car },
      { name: 'HREM10211', template: this.info },
      /////////////////////////////
      { name: 'HREM10301', template: this.payrollGroup },
      { name: 'HREM10302', template: this.basicBenefit },
      { name: 'HREM10303', template: this.salaryJobPosition },
      { name: 'HREM10304', template: this.allowance },
      { name: 'HREM10305', template: this.otherIncome },
      { name: 'HREM10306', template: this.compulsoryInsurance },
      { name: 'HREM10307', template: this.deductions },
      { name: 'HREM10308', template: this.allocatedAssets },
      { name: 'HREM10309', template: this.loan },
      { name: 'HREM10310', template: this.otherInsurance },
      { name: 'HREM10311', template: this.costCenter },
      { name: 'HREM10312', template: this.driverAccount },
      { name: 'HREM10313', template: this.authorizationLetter },
      /////////////////////////////
      { name: 'HREM10401', template: this.onLeave },
      { name: 'HREM10402', template: this.compensatoryLeave },
      { name: 'HREM10403', template: this.appoint },
      { name: 'HREM10404', template: this.workDiary },
      { name: 'HREM10405', template: this.projects },
      { name: 'HREM10406', template: this.workPerformed },
      { name: 'HREM10407', template: this.previousExperience },
      /////////////////////////////
      { name: 'HREM10501', template: this.major },
      { name: 'HREM10502', template: this.certificate },
      { name: 'HREM10503', template: this.skills },
      { name: 'HREM10504', template: this.internalTraining },
      { name: 'HREM10505', template: this.research },
      /////////////////////////////
      { name: 'HREM10601', template: this.evaluate },
      { name: 'HREM10602', template: this.reward },
      { name: 'HREM10603', template: this.discipline },
      /////////////////////////////
      { name: 'HREM10701', template: this.healthInsurance },
      { name: 'HREM10702', template: this.workAccident },
      { name: 'HREM10703', template: this.physicalExamination },
      { name: 'HREM10704', template: this.occupationalDisease },
      { name: 'HREM10705', template: this.vaccineSchedule },
      { name: 'HREM10706', template: this.member },
      { name: 'HREM10707', template: this.titleConferred },
      { name: 'HREM10708', template: this.events },
      /////////////////////////////
      { name: 'HREM10801', template: this.settlement },
      { name: 'HREM10802', template: this.handover },
      { name: 'HREM10803', template: this.approvalProcess },
      /////////////////////////////
    ];
  }

  ngAfterViewInit(): void {
    this.initTabs();
  }
}
