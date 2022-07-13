import { Component, OnInit } from '@angular/core';
import { valorantapiService } from 'src/app/services/valorantapi.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css'],
})
export class SkinsComponent implements OnInit {
  public skinList: any;
  public selectedSkin: any;

  constructor(private apiService: valorantapiService) {}

  ngOnInit(): void {
    this.getSkinsList();
  }

  getSkinsList() {
    this.apiService.getData('weapons/skins').subscribe((res: any) => {
      this.skinList = res;
      console.log(this.skinList);
      this.getSkin(this.skinList.data[50].uuid);
    });
  }
  getSkin(id: string) {
    this.apiService.getData('weapons/skins/' + id).subscribe((res: any) => {
      this.selectedSkin = res;
      console.log(this.selectedSkin);
    });
  }
}
