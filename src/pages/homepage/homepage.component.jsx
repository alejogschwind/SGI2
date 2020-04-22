import React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/layout/layout.component';
import CardList from '../../components/card-list/card-list.component';
import Filter from '../../components/filter/filter.component';
import VirtualCardEvent from '../../components/virtual-card-event/virtual-card-event.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      loading: true
    }
  }

  componentDidMount() {
    if (this.state.events != []) {
      this.setState({loading: false})
    }
  }

  render() {
    return (
      <div className="homepage">
        {
          !this.state.loading ? 
            this.props.events.map(event => 
              <VirtualCardEvent
                key={event.name}
                name={event.name}
                imageURL={event.image}
                withLimit={event.withLimit}
                limit={event.limit}
                plataform={event.plataform}
              />) :
              (
                <p style={{
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center'
                }}>No hay eventos</p>
              )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps)(HomePage);