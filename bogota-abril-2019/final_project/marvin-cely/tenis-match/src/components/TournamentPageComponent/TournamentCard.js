import React from 'react';
import '../../css/TournamentCard.css';
import TournamentsLogo from './TournamentLogo';
import { observer } from 'mobx-react';

const TournamentCard = observer(
  class TournamentCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() { 
      return(
        <React.Fragment>
          {/**Revisar responsive y hacer la tarjeta */}
          <section className='card col-md-4'>
            <div className="card">
              <div className="card-body">
                <div className='row'>
                  <div className='col-md-6'>
                    <TournamentsLogo 
                      maxScore={this.props.scores.winner} 
                      tournamentName={this.props.tournamentName}/>
                  </div>
                  <div className='col-md-6'>
                    <p>Torneo jugado en bogotá.</p>
                    <p>Distribución de puntos.</p>
                    <p>Ganador: 2000</p>
                    <p>Finalista: 1200</p>
                    <p>Semifinalistas: 720</p>
                    <p>Cuartos: 360</p>            
                  </div>    
                </div>
              </div>
            </div>  
          </section>
        </React.Fragment>
      );
    }
  }
);

export default TournamentCard;