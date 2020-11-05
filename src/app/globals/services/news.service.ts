import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news = [
    {
      url: '#',
      title: 'Noticias 1',
      image: 'https://dummyimage.com/300.png/09f/fff'
    },
    {
      url: '#',
      title: 'Noticias 2',
      image: 'https://dummyimage.com/300.png/09f/fff'
    },
    {
      url: '#',
      title: 'Noticias 3',
    }
  ]
  constructor(private http:HttpClient) { }
  getNewsCallback(callback){
    setTimeout(()=>{
      callback(
        this.news
      )
    }, 2000)
  }

  getNews():Promise<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise()
  }
  getSources():Promise<any>{
    return this.http.get('http://localhost:3000/api/sources').toPromise()
  }

  getTopHeadlines(country = ''):Promise<any>{
    return this.http.get('http://localhost:3000/api/top-headlines/'+country).toPromise()
  }

  getEverything(source='', search=''):Promise<any>{
    return this.http.get('http://localhost:3000/api/everything/'+source+'?search='+search).toPromise()
  }
}
