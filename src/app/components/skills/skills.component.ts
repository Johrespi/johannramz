import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  categories = [
    {
      title: 'Lenguajes de Programación',
      techs: [
        { name: 'Ruby', color:'#CC342D', svg: 'https://cdn.simpleicons.org/ruby'},
        { name: 'JavaScript', color: '#F7DF1E', svg: 'https://cdn.simpleicons.org/javascript' },
        { name: 'TypeScript', color: '#3178C6', svg: 'https://cdn.simpleicons.org/typescript' },
        { name: 'Python', color: '#3776AB', svg: 'https://cdn.simpleicons.org/python' },
        { name: 'C', color: '#A8B9CC', svg: 'https://cdn.simpleicons.org/c' },
      ]
    },
    {
      title: 'Frameworks y Librerías',
      techs: [
        { name: 'Angular', color: '#DD0031', svg: 'https://cdn.simpleicons.org/angular' },
        { name: 'Ruby on Rails', color: '#D30001', svg: 'https://cdn.simpleicons.org/rubyonrails' },
        { name: 'React', color: '#61DAFB', svg: 'https://cdn.simpleicons.org/react' }
      ]
    },
    {
      title: 'Bases de Datos',
      techs: [
        { name: 'MySQL', color: '#4479A1', svg: 'https://cdn.simpleicons.org/mysql' },
        { name: 'PostgreSQL', color: '#336791', svg: 'https://cdn.simpleicons.org/postgresql' },
        { name: 'SQLite', color: '#003B57', svg: 'https://cdn.simpleicons.org/sqlite' }
      ]
    },
    {
      title: 'Herramientas y DevOps',
      techs: [
        { name: 'Git', color: '#F05032', svg: 'https://cdn.simpleicons.org/git' },
        { name: 'GitHub', color: '#181717', svg: 'https://cdn.simpleicons.org/github' }
      ]
    }
  ]
}
