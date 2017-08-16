import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isUpdated = true;
  isUpdating = false;

  outdatedMsg = "An update is available";
  updateMsg = "Last update date: ";
  updateDate = "";
  private updateUrl = 'https://loterias.cfapps.io/api/euromillon/update';
  private isUpdateUrl = 'https://loterias.cfapps.io/api/euromillon/isupdated';

  constructor(private http: Http) {
    this.isUpdateData();
  }

  getUpdateData() {
    return this.http.get(this.updateUrl)
      .map((res: Response) => res.json());
  }

  getIsUpdateData() {
    return this.http.get(this.isUpdateUrl)
      .map((res: Response) => res.json());
  }
  
  isUpdateData() {
    this.getIsUpdateData().subscribe(data => {
      this.isUpdated = data['isUpdated'];
      this.updateDate = data['updateDate'];      
    })
  }

  updateData() {
    this.isUpdating = true;

    this.getUpdateData().subscribe(data => {
     
      this.isUpdated = data['isUpdated'];
      this.updateDate = data['updateDate'];
      this.isUpdating = false;
      
    })
  }

}
