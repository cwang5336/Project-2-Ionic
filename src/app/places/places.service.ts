import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p4',
      'The College of Staten Island CUNY',
      'Not your average College, was a haunted mental hospital!',
      'https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/about/administration/offices/ehsrm/CSI_horizontal.jpg',
      19.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p5',
      'The Westin New York Grand Central',
      'Luxury hotel with restaurant, near Grand Central Terminal',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0b/39/03/exterior.jpg?w=900&h=-1&s=1',
      519.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p6',
      'JW Marriott Essex House New York',
      'Luxury hotel with spa, near Central Park',
      'https://sqdte9mbh615zsvesmkh1eyq-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/160-Central-Park-JW-Marriott-Essex-House-TA01.jpg',
      119.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p7',
      'Executive Hotel Le Soleil New York',
      '4-star hotel with restaurant, near Macy\'s',
      'https://www.hotellesoleil.com/new-york/images/home-page2.jpg',
      219.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    )
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return { ...this._places.find(p => p.id === id) };
  }
}
