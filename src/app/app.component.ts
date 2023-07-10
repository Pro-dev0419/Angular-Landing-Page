import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-code';

  mybreakpoint: number | undefined;

  services = [
    { 'name' : 'Digital Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Lead Generation' , 'icon' : 'beach_access' },
    { 'name' : 'Medical Billing' , 'icon' : 'beach_access' },
    { 'name' : 'Cold Calling' , 'icon' : 'beach_access' },
    { 'name' : 'Virtual Business And Personal Support' , 'icon' : 'beach_access' },
    { 'name' : 'Virtual Assistance' , 'icon' : 'beach_access' }
  ];

  blogs = [
    { 'name' : 'Digital Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Digital Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Digital Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Digital Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Digital Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Digital Marketing' , 'icon' : 'beach_access' },
  ];

  servicesStored = [
    { 'name' : 'Digital Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Lead Generation' , 'icon' : 'beach_access' },
    { 'name' : 'Medical Billing' , 'icon' : 'beach_access' },
    { 'name' : 'Cold Calling' , 'icon' : 'beach_access' },
    { 'name' : 'Virtual Business And Personal Support' , 'icon' : 'beach_access' },
    { 'name' : 'Virtual Assistance' , 'icon' : 'beach_access' },
    { 'name' : 'Google Reviews' , 'icon' : 'beach_access' },
    { 'name' : 'Social Media Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Web Development' , 'icon' : 'beach_access' },
    { 'name' : 'SEO' , 'icon' : 'beach_access' },
    { 'name' : 'Youtube Monetization' , 'icon' : 'beach_access' },
    { 'name' : 'Social Media Management' , 'icon' : 'beach_access' },
    { 'name' : 'Email Marketing' , 'icon' : 'beach_access' },
    { 'name' : 'Google & Facebook ads Management' , 'icon' : 'beach_access' },
    { 'name' : 'Content Writting' , 'icon' : 'beach_access' },
    { 'name' : 'Assignment Writting' , 'icon' : 'beach_access' },
  ];

  ngOnInit() {
    if((window.innerWidth <= 600)){
      this.mybreakpoint = 1;
    }else if((window.innerWidth <= 960)){
      this.mybreakpoint = 2;
    }else{
      this.mybreakpoint = 4;
    }
  }

  handleSize(event: any) {
    if((event.target.innerWidth <= 600)){
      this.mybreakpoint = 1;
    }else if((event.target.innerWidth <= 960)){
      this.mybreakpoint = 2;
    }else{
      this.mybreakpoint = 4;
    }
  }

  anchorNavigation(name: string): void {
    window.location.href = name;
  }

  showAllService(): void {
    this.services = this.servicesStored;
  }

}
