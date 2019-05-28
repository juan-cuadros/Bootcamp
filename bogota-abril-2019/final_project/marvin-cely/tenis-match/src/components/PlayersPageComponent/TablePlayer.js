import React from '../../../node_modules/react';
import '../../css/TablePlayer.css';
import { observer } from '../../../node_modules/mobx-react';
import playerListHeader from './playersTableHead';
import { ImageCountry } from '../SmallPieceComponent';
import utils from '../../utils/utils';
import thesaurus from '../../utils/thesaurus';


const TablePlayer = observer(
  class TablePlayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        flagSize: 64,
        NATIONALITY: thesaurus.elementKey.NATIONALITY,
        NATIONALITY_ABBREVIATION: thesaurus.elementKey.NATIONALITY_ABBREVIATION,
      }
    }

    render() { 
      const tableHeader = (headerList) => { //TODO: Encajar Título con la tabla
        return(
          <section className="row" role="row">
            <h4 className="col-md-3" role="columnheader">{headerList.name}</h4>
            <h4 className="col-md-3" role="columnheader">{headerList.nationality}</h4>
            <h4 className="col-md-3" role="columnheader">{headerList.age}</h4>
            <h4 className="col-md-3" role="columnheader">{headerList.ranking}</h4>
          </section>
        );
      }

      const countries = this.props.store.countries; 
      const playersList = this.props.store.players.map(({id, name, idCountry, birthDate, ranking}) => {
        return (
          <section className="row" key={id} role="row">
            <article className="col-10">
              <div className="row">
                <p className="col-md-3" role="cell">
                  {name}
                </p>
                <p className="col-md-3" role="cell">
                    <ImageCountry
                      abbreviation={countries.get(idCountry)[this.state.NATIONALITY_ABBREVIATION]}
                      shinyTheme={true}
                      flagSize={this.state.flagSize}
                      countryName={countries.get(idCountry)[this.state.NATIONALITY]}
                    />
                </p>
                <p className="col-md-3" role="cell">
                  {utils.getAge(birthDate)}
                  &nbsp;<span className="d-inline d-md-none">años</span>
                </p>
                <p className="col-md-3" role="cell">
                  {ranking}&nbsp;<span className="d-inline d-md-none">puntos</span>
                </p>
              </div>
            </article>
            <section className="col-2">
              <button type="button" className="btn btn-light" role="cell" aria-label="opciones" title="Opciones" data-toggle="modal" data-target="#ModalCRUDPlayer" name="editPlayer" value={id} onClick={this.props.onClick}>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </section>   
          </section>
        );
      });

      return(
        <React.Fragment>        
          <section role="table" 
            aria-label="Estadisticas de Jugadores" 
            summary="Tabla de los jugadores y sus esetadísticas">
              <section className="shadow-sm p-2 mb-1 bg-white rounded-pill d-none d-md-block">
                {tableHeader(playerListHeader)}
              </section>
              {playersList}
          </section>
        </React.Fragment>
      );
    }
  }
);

export default TablePlayer;