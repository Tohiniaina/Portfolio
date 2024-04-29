import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 1,
      name: 'Okaz',
      frontEnd: 'React JS/ Ionic',
      backEnd: 'SpringBoot (JAVA)',
      database: 'PostgreSQL',
      description: "Okaz est une multi-plateforme dédiée au vente de voiture d'occasion ou neuve. Cette application permet aux utilisateurs de consulter des annonces, de publier des annonces de vente, de rechercher des voitures selon les critères souhaités, et même de communiquer avec les propriétaires des véhicules.",
      projectLink: '',
      pictures: [
        "../../assets/img1.jpg",
      ]
    },
    {
      id: 3,
      name: 'SolarPanel Manager',
      frontEnd: 'JSP',
      backEnd: 'JAVA',
      database: 'PostgreSQL',
      description: "SolarPanel Manager est une application de gestion d'energie solaire. Grâce à des fonctionnalités avancées telles que la surveillance en temps réel, l'analyse des performances et la prévision des coupures mon application pemet aux utilisateurs de maximiser leur production d'énergie solaire.",
      projectLink: '',
      pictures: []
    },
    {
      id: 2,
      name: 'Poketra',
      frontEnd: 'JSP',
      backEnd: 'JAVA',
      database: 'PostgreSQL',
      description: "Poketra est une application back-office dédiée à la fabrication et de la vente de sacs malagasy. Cette application permet de gerer les matières premieres (y compris les stocks), la fabrication, la vente et surtout l'etats de stock.",
      projectLink: '',
      pictures: [
        "../../assets/Poketra/img1.png",
        "../../assets/Poketra/img2.png",
        "../../assets/Poketra/img3.png",
        "../../assets/Poketra/img4.png",
        "../../assets/Poketra/img5.png",
      ]
    },
    {
      id: 4,
      name: 'Katsaka',
      frontEnd: 'ASP .NET',
      backEnd: 'C#',
      database: 'PostgreSQL',
      description: "Katsaka est une application de gestion de suivi de culture de maÏs qui permet de suivre en temps réel la culture(rapport mensuel, les anomalies, ...), de gerer les dépenses des besoins et surtout faire la prevision de recolte.",
      projectLink: '',
      pictures: []
    },
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id == id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: '+id);
    }

    return project;
  }
}
