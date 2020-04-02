import React from 'react';

import CardItem from '../card-item/card-item.component';

import './card-list.styles.scss';

class CardList extends React.Component {
  constructor() {
    super();

    this.state = {
      events: [
        {
          title: 'Asamblea AIRAP 2020',
          imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcc%2FOlavarria_Plaza_Coronel_Olavarria.JPG&f=1&nofb=1',
          id: 1
        },
        {
          title: 'ERAUP 2021',
          imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcc%2FOlavarria_Plaza_Coronel_Olavarria.JPG&f=1&nofb=1',
          id: 2
        },
        {
          title: 'Foro distrital 4921',
          imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcc%2FOlavarria_Plaza_Coronel_Olavarria.JPG&f=1&nofb=1',
          id: 3
        },
        {
          title: 'ERAUP 2020',
          imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcc%2FOlavarria_Plaza_Coronel_Olavarria.JPG&f=1&nofb=1',
          id: 4
        }
      ]
    }
  }

  render() {
    return (
      <div className="card-list">
        {
          this.state.events.map( (event) => (
            <CardItem key={event.id} event={event}/>
          ))
        }
      </div>
    )
  }
}

export default CardList;