import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topVendors: User[];

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getTopUsers().then(users => {
      this.topVendors = users;
    });

    // this.productService.getTopProducts().then(products => {
    //   this.topProducts = products;
    // });
  }

  goToVendorPage(vendor: User) {
    this.router.navigate(['users/' + vendor.id]);
  }

  // goToProductPage(product: Product) {
  //   this.router.navigate(['products/' + product.id]);
  // }

}
