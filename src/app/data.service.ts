import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { AppSettings } from './app.settings';

@Injectable()
export class DataService {
  constructor(private http: Http) {}

  getData(path: string): Observable < any > {
    const vm = this;
    return this.http.get(AppSettings.api_endpoint + path)
      .map((res: Response) => {
        return vm.extractData(res);
      })
      .catch((error: Response) => {
        return vm.handleError(error);
      });
  }

  postData(path: string, data: any): Observable < any > {
    const vm = this;
    return this.http.post(AppSettings.api_endpoint + path, data)
      .map((res: Response) => {
        return vm.extractData(res);
      })
      .catch((error: Response) => {
        return vm.handleError(error);
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    if (body.error) {
      throw (res);
    } else {
      return body;
    }
  }

  private handleError(error: Response | any) {
    if (error.status !== 0) {
      const errorMsg = error.json();
      return throwError(errorMsg);
    } else if (error.status === 0) {
      const resObj = {};
      resObj['error'] = true;
      resObj['message'] = 'Server issue, try again';
      return throwError(resObj);
    }
  }
}
