import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface UserDetails {
  id: number
  name: string
  email: string
  password: string
  exp: number
  iat: number
  state: number
  city: number
  phone: number
  uname: string
  address: string
  dob: string
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number
  name: string
  email: string
  password: string
  state: number
  city: number
  phone: string
  uname: string
  address: string
  dob: string
  terms: boolean
}

@Injectable()
export class AuthenticationService {
  private token: string

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    //console.log(token);
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
      console.log(user);
      return this.http.post(`http://localhost/register/public/api/register`, user, {
        headers: {'Content-Type': 'application/json'}
      })
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(
        `http://localhost/register/public/api/login`, 
        {   email: user.email, password: user.password}, 
        {
            headers: {'Content-Type': 'application/json'}
        }
    )
    //console.log(user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public profile(): Observable<any> {
    return this.http.get(`http://localhost/register/public/api/profile`, {
        headers: {Authorization: `Bearer ${this.getToken()}`}
    })
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }

  public getStates(): Observable<any> {
    // console.log(user)
   
     return this.http.get('http://localhost/register/public/api/state',  {
       headers: {'Content-Type': 'application/json'}
     }).pipe(
      catchError(this.handleError)
    );
 }

 public getCities(stateId: number): Observable<any> {
 
   //console.log("statedid====="+stateId)
   return this.http.get('http://localhost/register/public/api/city/'+stateId,
    { headers: {'Content-Type': 'application/json'}
   }).pipe(
    catchError(this.handleError)
  );
}


private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened. Please try again later.');
}

}
