import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withWire from '../../hocs/withWire';
import './secondPage.css';

const mapStateToProps = state => {
    return { persons: state.persons };
};

class ConnectedSecondPage extends Component {
    render() {
        const { greetingService, persons } = this.props;
        return(
            <div>
                <h3 className='page_title'>SecondPage</h3>
                <p>{greetingService.writeGreet()}</p>
                <div className="persons">
                    {persons.map((person, id) => (
                        <div key={id}>
                            <p>{id}) {person.name} {person.age}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const SecondPage = connect(mapStateToProps)(ConnectedSecondPage);

SecondPage.propTypes = {
    greetingService: PropTypes.shape({
        writeGreet: PropTypes.func
    }).isRequired
};

export default withWire(
    SecondPage,
    ['greetingService'],
    ( greetingService ) => ({ greetingService })
);