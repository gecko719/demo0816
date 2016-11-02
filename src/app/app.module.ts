import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CategoryComponent } from './category/category.component';
import { MvpComponent } from './mvp/mvp.component';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, CalendarComponent, CategoryComponent, MvpComponent, ArticleComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],//service
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
