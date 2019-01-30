import React from "react";
import { connect } from "react-redux";
import { fetchFolk } from "../actions";
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchFolk();
  }

  render() {
    if (this.props.fetchingPeople) {
      // return something here to indicate that you are fetching data
      return (<h1>Please wait, loading data...</h1>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // our state machine is working for us based on fetching, success, and error. lets make sure our component knows about the state machine
    characters: state.charsReducer.characters,
    error: state.charsReducer.error, // error for when we mispell something!
    fetchingPeople: state.charsReducer.fetchingPeople // pending state, the fetching spinner or loading message etc. for when we're fetching!
  };
};

export default connect(mapStateToProps, { fetchFolk })(CharacterListView);
