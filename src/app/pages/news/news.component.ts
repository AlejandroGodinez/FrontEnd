import { Component, OnInit } from '@angular/core';
import { NewsService} from '../../globals/services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news:any[] = []
  sources:any[] = []
  source:string = ''
  search:string = ''
  constructor(private newsService:NewsService) {}

  ngOnInit(): void {
    this.getSources();
    this.getNews();
  }

  getSources():void{
    this.newsService.getSources().then(data=>{
      this.sources = data;
    }).catch(err=>{
      console.log(err);
    })
  }

  getNews(source?, search?):void{
    this.newsService.getEverything(source,search).then(data=>{
      this.news = data;
    }).catch(err=>{
      console.log(err);
    })
  }

}
