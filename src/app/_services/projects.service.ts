import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 1,
      name: 'CodexConstruction',
      frontEnd: 'JSP',
      backEnd: 'SpringBoot (JAVA)',
      database: 'PostgreSQL',
      description: "Codex Construction est une application de gestion de construction BTP. Dans cette application, on peut gérer l’aspect technique et l’aspect financier grâce à ses différentes fonctionnalités implémentées",
      projectLink: 'https://github.com/Tohiniaina/CodexConstruction.git',
      pictures: []
    },
    {
      id: 2,
      name: 'Okaz',
      frontEnd: 'React JS/ Ionic',
      backEnd: 'SpringBoot (JAVA)',
      database: 'PostgreSQL',
      description: "Okaz est une multi-plateforme dédiée au vente de voiture d'occasion ou neuve. Cette application permet aux utilisateurs de consulter des annonces, de publier des annonces de vente, de rechercher des voitures selon les critères souhaités, et même de communiquer avec les propriétaires des véhicules.",
      projectLink: 'https://github.com/Tohiniaina/Tomobilina',
      pictures: []
    },
    {
      id: 4,
      name: 'Poketra',
      frontEnd: 'JSP',
      backEnd: 'JAVA',
      database: 'PostgreSQL',
      description: "Poketra est une application back-office dédiée à la fabrication et de la vente de sacs malagasy. Cette application permet de gerer les matières premieres (y compris les stocks), la fabrication, la vente et surtout l'etats de stock.",
      projectLink: 'https://github.com/Tohiniaina/Poketra',
      pictures: []
    },
    {
      id: 3,
      name: 'SolarPanel Manager',
      frontEnd: 'JSP',
      backEnd: 'JAVA',
      database: 'PostgreSQL',
      description: "SolarPanel Manager est une application de gestion d'energie solaire. Grâce à des fonctionnalités avancées telles que la surveillance en temps réel, l'analyse des performances et la prévision des coupures mon application pemet aux utilisateurs de maximiser leur production d'énergie solaire.",
      projectLink: 'https://github.com/Tohiniaina/SolarPanel',
      pictures: []
    },
    {
      id: 5,
      name: 'Katsaka',
      frontEnd: 'ASP .NET',
      backEnd: 'C#',
      database: 'PostgreSQL',
      description: "Katsaka est une application de gestion de suivi de culture de maÏs qui permet de suivre en temps réel la culture(rapport mensuel, les anomalies, ...), de gerer les dépenses des besoins et surtout faire la prevision de recolte.",
      projectLink: 'https://github.com/Tohiniaina/Katsaka',
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
