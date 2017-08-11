import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  private apiUrl = 'https://loterias.cfapps.io/api/euromillon/update';

  constructor(private http: Http) {
    this.getUpdateDate();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }

  getUpdateDate() {
    console.log('update date');
    this.getData().subscribe(data => {
      this.title = data['updateDate'];
      console.log(data);
    })
  }

}
