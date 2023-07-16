import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Group } from 'src/models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  register(group: any): Observable<Group> {
    return this.http.post<Group>(`$${environment.apiUrl}/group/create`, group, this.httpOptions);
  }

  getGroupsByUserId(userId: number): Observable<Group[]> {
    return this.http.get<Group[]>(`${environment.apiUrl}/group/user/${userId}`, this.httpOptions);
  }

}
