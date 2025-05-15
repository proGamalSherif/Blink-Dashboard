import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import {
  ContainerComponent,
  INavData,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';

import { DefaultFooterComponent, DefaultHeaderComponent } from './';
import { AuthService } from '../../../services/auth.service';


function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ContainerComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    NgScrollbar,
    RouterOutlet,
    RouterLink,
    ShadowOnScrollDirective
  ]
})
export class DefaultLayoutComponent implements OnInit {

  isLogged = false;
  userRole : string | null = '';
  public navItems : INavData[] = [];

  constructor(private authServ:AuthService, private router: Router) {
    this.authServ.isLoggedIn$.subscribe((res) => {
      this.isLogged = res
    })
  }
  ngOnInit() {
  this.authServ.userRole$.subscribe((res) => {
    this.userRole = res
  })

  if (this.userRole == 'Supplier') {
    this.navItems.push({
      name: 'Dashboard',
      url: '/dashboard',
      iconComponent: { name: 'cil-speedometer' },
    },
    {
      name: 'Product',
      url: '/product',
      iconComponent: { name: 'cilBasket' },
      children: [
        {
          name: 'Manage Products',
          url: '/product/manage',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Product Attributes',
          url: '/product/product-attributes',
          icon: 'nav-icon-bullet',
        },
      ],
    },
     //BI-Dashboard
     {
      name: 'BI-Dashboard',
      url: '/bidashboard',
      iconComponent: { name: 'cilChart' },
      children: [

        {
          name: 'Supplier',
          url: '/bidashboard/supplier',
          icon: 'nav-icon-bullet',
        },
      ],
    },
    //End BI-Dashboard
    {
      title: true,
      name: 'Account',
    },
    {
      name: 'Logout',
      iconComponent: { name: 'cilAccountLogout' },
      url: '/logout',
    },
    
  )
  }
  else if (this.userRole == 'Admin') {
    this.navItems.push(
      {
        name: 'Dashboard',
        url: '/dashboard',
        iconComponent: { name: 'cil-speedometer' },
      },
 
    // users :
    {
      name: 'Users',
      url: '/users',
      iconComponent: { name: 'cil-people' },
      children: [
        {
          name: 'Manage Users',
          url: '/Users/manage',
          icon: 'nav-icon-bullet',
        },
      ],
    },
    /// end users

 
      
       //BI-Dashboard
       {
        name: 'BI-Dashboard',
        url: '/bidashboard',
        iconComponent: { name: 'cilChart' },
        children: [
          {
            name: 'Customers',
            url: '/bidashboard/customers',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Products',
            url: '/bidashboard/products',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Branches & Inventories',

            url: '/bidashboard/branches-inventories',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Sales & Orders',
            url: '/bidashboard/sales-orders',
            icon: 'nav-icon-bullet',
          }
        ],
      },
      //End BI-Dashboard
      // Category
      {
        name:'Category',
        url: '/category',
        iconComponent: { name: 'cilBasket' },
        children:[
          {
            name:'Manage Category',
            url:'/category/manage',
            icon:'nav-icon-bullet',
          }
        ]
      },
      //End Category
      //Products
      {
        name: 'Product',
        url: '/product',
        iconComponent: { name: 'cilBasket' },
        children: [
          {
            name: 'Manage Products',
            url: '/product/manage',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Product Attributes',
            url: '/product/product-attributes',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Review Products',
            url: '/product/review-products',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Manage Discounts',
            url: '/product/manage-discounts',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Inventory Transaction',
            url: '/product/manage-transaction',
            icon: 'nav-icon-bullet',
          },
        ],
      },
      //End Products
    
       //Inventory
       {
        name: 'Inventory',
        url: '/inventory',
        iconComponent: { name: 'cilLayers' },
        children: [
          {
            name: 'Manage Inventories',
            url: '/inventory/manage',
            icon: 'nav-icon-bullet',
          },
        ],
      },
      //End end

  
         //branchs
         {
          name: 'Branch',
          url: '/branch',
          iconComponent: { name: 'cilMap' },
          children: [
            {
              name: 'Manage Branches',
              url: '/branch/manage',
              icon: 'nav-icon-bullet',
            },
          ],
        },
        //End branchs
    
    
    
     //  brands :
    
     {
      name: 'Brands',
      url: '/brands',
      iconComponent: { name: 'cil-tags' },
      children: [
        {
          name: 'Manage Brands',
          url: '/Brand/manage',
          icon: 'nav-icon-bullet',
        },
        
      ],
    },
    // end brands 
      {
        title: true,
        name: 'Account',
      },
    
      {
        name: 'Logout',
        iconComponent: { name: 'cilAccountLogout' },
        url: '/logout',
      },
    
    );
  }
  }
  
}
