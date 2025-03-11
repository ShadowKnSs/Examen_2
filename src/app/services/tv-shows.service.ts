import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  title: string = "Hola mundo desde mi TvShowsService editado";

  shows: Show[] = [{
    "name": "Game of Thrones",
    "image": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    "description": "",
  },
  {
    "name": "The Office",
    "image": "https://m.media-amazon.com/images/I/91d053F2aKL._AC_UF894,1000_QL80_.jpg",
    "description": "Un documental sobre la vida cotidiana de los empleados en una oficina de ventas de papel.",
  },
  {
    "name": "Friends",
    "image": "https://www.debate.com.mx/__export/1698600791542/sites/debate/img/2023/10/29/friends.jpg_423682103.jpg",
    "description": "Seis amigos navegan por la vida y el amor en Nueva York.",
  },
  {
    "name": "The Mandalorian",
    "image": "https://m.media-amazon.com/images/I/71bBDuXUvOL._AC_UF894,1000_QL80_.jpg",
    "description": "Un cazarrecompensas mandaloriano navega por la galaxia lejos de la autoridad de la Nueva República.",
  },
  {
    "name": "The Witcher",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfdUzjdZLK_9v2nmaabc5wsJydbBp2fBMsA&s",
    "description": "Un cazador de monstruos a sueldo lucha por encontrar su lugar en un mundo donde las personas son a menudo más perversas que las bestias.",
  }
  ]

  constructor() {

  }
}
