import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Photographer } from '../../interfaces/photographer.interface';
import { BottomNavigationComponent } from '../../shared/bottom-navigation/bottom-navigation.component';
import { HeaderMenuComponent } from '../../shared/header-menu/header-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photgraphers-list',
  standalone: true,
  imports: [BottomNavigationComponent, HeaderMenuComponent],
  templateUrl: './photgraphers-list.component.html',
  styleUrl: './photgraphers-list.component.scss'
})
export class PhotgraphersListComponent implements OnInit{

  photographers: Photographer[] = [];
  nextUrl?: string;
  loading:boolean = false;
  isFav: boolean = false

constructor(private apiService: ApiService,
  private router: Router) { }

ngOnInit() {
  this.loadPhotographersFromLocalStorage();
}

loadPhotographersFromLocalStorage() {
  const storedPhotographers = localStorage.getItem('photographers');
  const storedNextUrl = localStorage.getItem('nextUrl');
  if (storedPhotographers && storedNextUrl) {
    this.photographers = JSON.parse(storedPhotographers);
    this.nextUrl = JSON.parse(storedNextUrl);
  } else {
    this.loadPhotographers();
  }
}

loadPhotographers(url?: string) {
  if (this.loading) {
    return;
  }
  this.loading = true;
  this.apiService.getPhotographersList(url).subscribe(response => {
    this.photographers = [...this.photographers, ...response.results];
    this.nextUrl = response.next;
    this.loading = false;

    // Guarda els fotografs i la url de la següent petició a localStorage
    localStorage.setItem('photographers', JSON.stringify(this.photographers));
    localStorage.setItem('nextUrl', JSON.stringify(this.nextUrl));
  });
}

  //Implementacio d'un infinite scroll quan el client arriba al 80% de la pagina
  onScroll(scrollableDiv: HTMLElement) {
    const scrollPercentage = (scrollableDiv.scrollTop + scrollableDiv.clientHeight) / scrollableDiv.scrollHeight;
    if (scrollPercentage > 0.8) {
      if (this.nextUrl) {
        this.loadPhotographers(this.nextUrl);
      }
    }
  }

  photographerInfo(id:number){
    this.router.navigate(['/photographers', id]);
  }

  clickFav(photographer: Photographer){
    photographer.isFav = !photographer.isFav;
    localStorage.setItem(`photographer-${photographer.id}`, JSON.stringify(photographer));
  }
}

