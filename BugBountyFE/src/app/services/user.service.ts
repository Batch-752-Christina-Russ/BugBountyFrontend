import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/User';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

}
