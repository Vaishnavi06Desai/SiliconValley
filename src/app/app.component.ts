import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IeeeFestSiliconValley';

  ngOnInit(){
  }

  toTrailer() {
    document.getElementById("trailer").scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  toMovieWebsite() {
    document.getElementById("moviewebsite").scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  toSynopsis(){
    document.getElementById("synopsis").scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  toCast(){
    document.getElementById("cast").scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  toOst(){
    document.getElementById("ost").scrollIntoView({ block: 'end', behavior: 'smooth' });
  }
}

