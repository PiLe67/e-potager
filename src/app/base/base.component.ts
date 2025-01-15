import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent {
  public plant_name: string = ''; // Le nom de la plante
  public isPlantSelected: boolean = false; // Contrôle l'affichage du composant PlantComponent

  constructor(private apiService: ApiService) {}

  searchPlant(): void {
    if (this.plant_name) {
      this.isPlantSelected = true; // Activer l'affichage du composant PlantComponent
    }
    /*
    const payload = this.plant_name;
    this.apiService.getAuthToken().subscribe((authResponse) => {
      const token = authResponse.token;
      console.log(token);
      this.apiService.getData(payload, token).subscribe((response) => {
        console.log(response);
      });
    });*/
  }
}
