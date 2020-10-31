import { Component } from '@angular/core';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';
import { MenuItemDetailComponent } from '../menu-item-detail/menu-item-detail.component';
import { CartComponent } from '../cart/cart.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ErrorMsg } from 'src/app/models/errorMsg';
import { LogService } from '../../services/logService';
import { ErrorType } from 'src/app/models/errorType';
import { NotificationService } from '../../services/notificationService';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CategoryFilterComponent, MenuItemDetailComponent, 
              CartComponent, ErrorType, LogService, NotificationService],
})
export class HomeComponent {
  private className: "HomeComponent";
  copywriteInfo: string = null;
  nextNotification: string = null;
  notifications: string[] = [];
  
  public constructor(
    public ngxSmartModalService: NgxSmartModalService,
    public categoryFilterComponent: CategoryFilterComponent,
    public menuItemDetailComponent: MenuItemDetailComponent,
    public cartComponent: CartComponent,
    public errorType: ErrorType,
    public logService: LogService,
    public notificationService: NotificationService
  ) {}

  get getTicketCounter() : number {
    let methodName: string = 'getTicketCounter';

    try {
      return 3;
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  get getMenuItemDetailsPerCategory() : any[] {
    let methodName: string = 'getMenuItemDetailsPerCategory';

    try {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  ngOnInit() {
    let methodName: string = 'ngOnInit';

    try {
      //this.readRouteParams();
      this.prettyPrintCopywriteInfo();
      this.notificationService.notificationQueue();
      this.subscribeToNotifyQueue();
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  openCategoryFilterModal() {
    let methodName: string = 'openCategoryFilterModal';

    try {
      this.closeAllModals();
      this.categoryFilterComponent.loadModal();
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  openMenuItemDetailModal() {
    let methodName: string = 'openMenuItemDetailModal';

    try {
      this.closeAllModals();
      this.menuItemDetailComponent.loadModal(false);
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  openCartModal() {
    let methodName: string = 'openCartModal';

    try {
      this.closeAllModals();
      this.cartComponent.loadModal();
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  private closeAllModals() : void {
    let methodName: string = 'closeAllModals';

    try {
      this.ngxSmartModalService.getModal('categoryFilter').close();
      this.ngxSmartModalService.getModal('menuItemDetail').close();
      this.ngxSmartModalService.getModal('cart').close(); 
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  private prettyPrintCopywriteInfo() {
    let methodName: string = 'prettyPrintCopywriteInfo';

    try {
      var date = new Date().toString().split(' ')[3];
      this.copywriteInfo = 'Silverskippy (c) ' + date;
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  private subscribeToNotifyQueue() {
    let methodName: string = 'subscribeToNotifyQueue';

    try {    
        setInterval(() => {
          this.nextNotification = this.notificationService.getNextNotification();
          if(this.nextNotification !== null) {
            this.easeDownNotifyBanner();
            this.pauseNotifyQueue(6000);
          }
        }, 8000);
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  private async pauseNotifyQueue(ms: number) {
    let methodName: string = 'pauseNotifyQueue';

    try {
      await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.controlNotifyBanner());
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  private controlNotifyBanner() {
    let methodName: string = 'controlNotifyBanner';

    try {
      this.easeUpNotifyBanner();
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  private easeDownNotifyBanner() {
    let methodName: string = 'easeDownNotifyBanner';

    try {
      setTimeout(function() {
        $('#flyover-notification-XS').removeClass('ease-up').addClass('ease-down');
        $('#flyover-notification-M').removeClass('ease-up').addClass('ease-down');
        $('#flyover-notification-L').removeClass('ease-up').addClass('ease-down');
        $('#flyover-notification-XL').removeClass('ease-up').addClass('ease-down');
      }, 2000);
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }

  private easeUpNotifyBanner() {
    let methodName: string = 'easeUpNotifyBanner';

    try {
      setTimeout(function() {
        $('#flyover-notification-XS').removeClass('ease-down').addClass('ease-up');
        $('#flyover-notification-M').removeClass('ease-down').addClass('ease-up');
        $('#flyover-notification-L').removeClass('ease-down').addClass('ease-up');
        $('#flyover-notification-XL').removeClass('ease-down').addClass('ease-up');
        this.nextNotification = null;
      }, 1000);
    } catch (errMsg) {
      let errorMsg = new ErrorMsg(this.className, methodName, this.errorType.parseException, errMsg);
      this.logService.logHandler(errorMsg);
    }
  }
}