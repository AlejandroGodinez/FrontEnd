import { Component, OnInit } from '@angular/core';
import { NewsService} from '../../globals/services/news.service'

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  news:any[] = []
  country:string = 'mx';
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.getTopHeadlines()
  }

  getTopHeadlines(country?):void{
    this.newsService.getTopHeadlines(country).then(data=>{
      this.news = data;
    }).catch(err=>{
      console.log(err);
    })
  }

  setCountry(){
    this.getTopHeadlines(this.country)
  }
}
