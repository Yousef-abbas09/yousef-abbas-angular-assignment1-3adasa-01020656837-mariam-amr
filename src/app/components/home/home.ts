import { Component, OnInit } from '@angular/core';
import { HomeSec1 } from '../home-sec1/home-sec1';
import { HomeSec2 } from '../home-sec2/home-sec2';
import { HomeSec3 } from '../home-sec3/home-sec3';
import { HomeSec4 } from '../home-sec4/home-sec4';


@Component({
  selector: 'app-home',
  imports: [HomeSec1 , HomeSec2 ,HomeSec3 , HomeSec4],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home{



  
}
