import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  //temp api var
  API_URL = "http://localhost:5000/blogs"

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.API_URL)
  }
  deleteBlog(id: number): Observable<Blog[]> {
    return this.http.delete<Blog[]>(`${this.API_URL}/${id}`)
  }
  editBlog(editedBlog: Blog): Observable<Blog[]> {
    return this.http.put<Blog[]>(`${this.API_URL}/${editedBlog.id}`, editedBlog)
  }
  addBlog(newBlog: Blog): Observable<Blog[]> {
    return this.http.post<Blog[]>(this.API_URL, newBlog)
  }
}
