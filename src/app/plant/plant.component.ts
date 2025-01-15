import { Component, Input, OnInit, inject } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { ArduinoService } from '../arduino.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'], // Corrected the property name to `styleUrls`
})
export class PlantComponent implements OnInit {
  @Input() plant_name: string = ''; 
  public atmospheric_humidity: number = 0;
  public light: number = 0;
  public temperature: number = 0;
  private db = inject(Database);

  constructor(private arduinoService: ArduinoService) {}

  ngOnInit(): void {
    this.getPlantData();
  }

  getPlantData(): void {
    if (!this.plant_name) {
      console.warn('No plant name provided!');
      return;
    }
  
    const plantRef = ref(this.db, '/plant/');
    onValue(
      plantRef,
      (snapshot) => {
        const data = snapshot.val();
        console.log('Plant data:', data);
  
        if (data) {
          this.atmospheric_humidity = data.humidity;
          this.light = data.light;
          this.temperature = data.temperature;
        } else {
          console.warn('No data found for plant:', this.plant_name);
        }
      },
      {
        onlyOnce: true,
      }
    );
  }

  turnOnLight() {
    console.log('Button clicked, sending command...');
    this.arduinoService.sendCommand('on').subscribe(
      () => {
        console.log('Commande allumer envoyée');
      },
      (error) => {
        console.error('Error sending command:', error);
      }
    );
  }

  turnOffLight() {
    console.log('Button clicked, sending command...');
    this.arduinoService.sendCommand('off').subscribe(
      () => {
        console.log('Commande éteindre envoyée');
      },
      (error) => {
        console.error('Error sending command:', error);
      }
    );
  }

  addWater() {
    console.log('Button clicked, sending command...');
    this.arduinoService.sendCommand('water').subscribe(
      () => {
        console.log('Commande arroser envoyée');
      },
      (error) => {
        console.error('Error sending command:', error);
      }
    );
  }


  
  
}
