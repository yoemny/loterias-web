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

  private isUpdated = true;
  private isUpdating = false;

  private outdatedMsg = "An update is available";
  private updateMsg = "Last update date: ";
  private updateDate = "";
  private updateUrl = 'http://localhost:8080/api/euromillon/update';
  private isUpdateUrl = 'http://localhost:8080/api/euromillon/isupdated';

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
