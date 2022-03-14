import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [

    new Place(
      'p1',
      'The Peninsula',
      'In the heart of New York City.',
      'https://www.peninsula.com/en/-/media/images/new-york/compressed/photos/pny-exterior.jpg?mw=987&hash=DD59C80BDEA3D2D4BBD38CAD865C9489340B042D',
      149.99
    ),
    new Place(
      'p2',
      'ritz-carlton Paris',
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/H%C3%B4tel_de_Crozat.jpg/300px-H%C3%B4tel_de_Crozat.jpg',
      189.99
    ),
    new Place(
      'p3',
      'Great Wall of China',
      'Not your average Wall',
      'https://cdn.mos.cms.futurecdn.net/5pCA2Sgpfj9Vu8XcALuMtb.jpg',
      99.99
    )

  ];

  get places() {
    // estint-disable-next-Lineno-underscore-dangle
    return [...this._places];
  }
  getPlace(id: string) {
    // estint-disable-next-line no-underscore-dangle
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}

