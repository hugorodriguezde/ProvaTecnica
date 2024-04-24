
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Photographer } from '../../interfaces/photographer.interface';

@Component({
  selector: 'app-photographers-detail',
  standalone: true,
  imports: [],
  templateUrl: './photographers-detail.component.html',
  styleUrl: './photographers-detail.component.scss'
})
export class PhotographersDetailComponent implements OnInit {

  photographer!: Photographer;
isLoading: boolean = true; // Add this line

constructor(private router: Router,
            private route: ActivatedRoute,
            private apiService: ApiService
) { }

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id')); // Convert id to a number
  const storedPhotographer = localStorage.getItem(`photographer-${id}`);
  if (storedPhotographer) {
    this.photographer = JSON.parse(storedPhotographer);
    this.isLoading = false; 
  } else {
    this.apiService.getPhotographer(id).subscribe((response: Photographer) => {
      this.photographer = response;
      localStorage.setItem(`photographer-${id}`, JSON.stringify(response));
      this.isLoading = false;
    });
  }
}

back(){
  this.router.navigate(['/home']);
}

clickFav(photographer: Photographer){
  photographer.isFav = !photographer.isFav;
  localStorage.setItem(`photographer-${photographer.id}`, JSON.stringify(photographer));
}
}
