import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      id: 1,
      title: 'Educational Platform For Kids',
      image: 'assets/explorak5.png',
      description: 'The Explora K5 platform is a web application that allows children to learn through interactive activities. The platform is designed to be used by children under 8 years old. It uses the Canvas LMS code base and is customized to meet the needs of the target audience. My contribution was to redesign the view of the Modules section, which is the main feature that allows the student to access the course content. The repository is private, but you can view the Canvas LMS repository for reference.',
      url: 'https://github.com/instructure/canvas-lms',
      techs: [
        { name: 'Ruby on Rails', svg: 'https://cdn.simpleicons.org/rubyonrails' },
        { name: 'PostgreSQL', svg: 'https://cdn.simpleicons.org/postgresql'},
        { name: 'React', svg: 'https://cdn.simpleicons.org/react' },
      ]
    },
    {
      id: 2,
      title: 'Adogtame',
      image: 'assets/landing.png',
      description: 'Adogtame is a landing page that simulates a pet adoption platform. The main goal was to create a simple and responsive layout that could be used as a template for a real platform.',
      url: 'https://johrespi.github.io/landing/',
      techs: [
        { name: 'JavaScript',svg: 'https://cdn.simpleicons.org/javascript' },
        { name: 'HTML',svg: 'https://cdn.simpleicons.org/html5'},
        { name: 'CSS',svg: 'https://cdn.simpleicons.org/css' },
      ]
    },
    {
      id: 3,
      title: 'Filtering an BMP Image',
      image: 'assets/bmp.png',
      description: 'This project is an implementation of a BMP image filter. The filter is applied to the image by changing the color of each pixel. The are two filters blur and edge enhancement.',
      url: 'https://github.com/Johrespi/proyecto-os',
      techs: [
        { name: 'C', svg: 'https://cdn.simpleicons.org/c' },
      ]
    },
    {
      id: 4,
      title: 'Communities',
      image: 'assets/communities.png',
      description: 'This project is a platform that allows users to create and join communities and attend to events within these communities.',
      url: 'https://github.com/Johrespi/comunidades',
      techs: [
        { name: 'Ruby on Rails',svg: 'https://cdn.simpleicons.org/rubyonrails' },
        { name: 'JavaScript',svg: 'https://cdn.simpleicons.org/javascript' },
      ]
    },
    {
      id: 5,
      title: 'Guayaquil Weather',
      image: 'assets/dashboard.png',
      description: 'This project is a dashboard that provides real-time weather updates for Guayaquil, Ecuador. It integrates up-to-date meteorological data and intuitive charts for enhanced visualization.',
      url: 'https://johrespi.github.io/dashboard/',
      techs: [
        { name: 'React', svg: 'https://cdn.simpleicons.org/react' },
        { name: 'TypeScript',svg: 'https://cdn.simpleicons.org/typescript' },
      ]
    },
  ];

}
