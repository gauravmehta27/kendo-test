import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { pipe } from "rxjs";
import { map } from "rxjs/operators";

import { BadInput } from "./../common/bad-input";
import { NotFoundError } from "./../common/not-found-error";
import { AppError } from "./../common/app-error";
import { environment } from "./../../environments/environment";

@Injectable()
export class MainService {
  constructor(private http: HttpClient, private router: Router) {}

  getFileResp(url) {
    return this.http.get(url).pipe(map(response => response));
  }

  // function to return URL to download an image.
  getImageURL(payload) {
    return `${environment.baseURL}/${payload}`;
  }

  // function to get all data without any parameters
  getAll(url) {
    return this.http
      .get(`${environment.baseURL}/${url}`)
      .pipe(map(response => response));
  }

  // function to get token for user
  getTokenUserLogin(url, params) {
    return this.http
      .post(`${environment.loginURL}/${url}`, params)
      .pipe(map(response => response));
  }

  logout(url) {
    return this.http
      .get(`${environment.loginURL}/${url}`)
      .pipe(map(response => response));
  }

  // function to get all data for a specific id
  get(url, id) {
    return this.http
      .get(`${environment.baseURL}/${url}/${id}`)
      .pipe(map(response => response));
  }

  // function to post data
  // let body = JSON.stringify({ 'foo': 'bar' });
  // let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' });
  // let options = new RequestOptions({ headers: headers });

  create(url, postData) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post(`${environment.baseURL}/${url}`, JSON.stringify(postData))
      .pipe(map(response => response));
  }

  // function to post data with headers
  createPostLogin(url, postData) {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token")
    );
    headers.append("Content-Type", "application/json");
    headers.append("createdBy", sessionStorage.getItem("userName"));
    return this.http
      .post(`${environment.baseURL}/${url}`, JSON.stringify(postData))
      .pipe(map(response => response));
  }

  // function to get data with headers
  getPostLogin(url) {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token")
    );
    headers.append("createdBy", sessionStorage.getItem("userName"));
    return this.http
      .get(`${environment.baseURL}/${url}`)
      .pipe(map(response => response));
  }

  // function to put(update) data with headers
  put(url, postData) {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token")
    );
    headers.append("Content-Type", "application/json");
    headers.append("createdBy", sessionStorage.getItem("userName"));
    return this.http
      .put(`${environment.baseURL}/${url}`, JSON.stringify(postData))
      .pipe(map(response => response));
  }

  // function to patch(update) data with headers
  patch(url, postData) {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token")
    );
    headers.append("Content-Type", "application/json");
    headers.append("createdBy", sessionStorage.getItem("userName"));
    // headers.append('Access-Control-Allow-Methods','PATCH');
    return this.http
      .patch(`${environment.baseURL}/${url}`, JSON.stringify(postData))
      .pipe(map(response => response));
  }

  // function to update data
  update(url, id, data) {
    return this.http
      .patch(
        `${environment.baseURL}/${url}/${id}`,
        JSON.stringify({ isRead: true })
      )
      .pipe(map(response => response));
  }

  // function to delete data
  delete(url, id) {
    return this.http
      .delete(`${environment.baseURL}/${url}/${id}`)
      .pipe(map(response => response));
  }

  // function to upload file
  upload(url, file) {
    const headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");
    return this.http
      .post(`${environment.baseURL}/${url}`, file)
      .pipe(map(response => response));
  }

  // // function to handle service errors
  // private handleError(error: Response) {
  //   if (error.status === 400) {
  //     return Observable.throw(new BadInput(error));
  //   }
  //   if (error.status === 401 || error.status === 403) {
  //     sessionStorage.clear();
  //     this.router.navigate(["/login"]);
  //   }
  //   if (error.status === 404) {
  //     return Observable.throw(new NotFoundError());
  //   }
  //   return Observable.throw(new AppError(error));
  // }
}
