import { Component, OnInit } from "@angular/core";

import { Navbar } from '../layout/header/navbar/navbar.model';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  menu: Navbar;

  ngOnInit() {}
}
