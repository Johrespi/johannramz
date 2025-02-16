import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component'; 
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, SkillsComponent, ContactComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
