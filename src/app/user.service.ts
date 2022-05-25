import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  onget(pageIndex: any, pageSize: any) {
    return this.http.get('http://116.68.244.225:3000/api/admin/admin-user?PageIndex=' + pageIndex + '&PageSize=' + pageSize);
  }

  onAdduser(data: any) {
    return this.http.post('http://116.68.244.225:3000/api/admin/admin-user', data)
  }
  onEditForm(data: any) {
    return this.http.put('http://116.68.244.225:3000/api/admin/admin-user', data)
  }
  ondelete(id: any) {
    return this.http.delete('http://116.68.244.225:3000/api/admin/admin-user/' + id)
  }
  onEdit(id: any) {
    return this.http.get('http://116.68.244.225:3000/api/admin/admin-user/' + id)
  }
}
