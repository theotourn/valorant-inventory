import { Component, OnInit } from '@angular/core';
import { valorantapiService } from 'src/app/services/valorantapi.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css'],
})
export class SkinsComponent implements OnInit {
  public sdata: any;

  constructor(private apiService: valorantapiService) {}

  ngOnInit(): void {
    this.getSkinsData();
  }

  getSkinsData() {
    this.apiService.getSkinsData().subscribe((res: any) => {
      this.sdata = res;
      console.log(this.sdata);
    });
  }
}
