import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned from here (usually an object) will show up as props inside of BookList, i.e to be used above. avail as this.props.books
  return {
    books: state.books
  };
}

// Anything returned from this function (i.e. the object passed as the first arg to bindActionCreators) will end up as props on the BookList container. i.e. this.props.selectBook
function mapDispatchToProps(dispatch) {
  // whenever selectBook action creator is called, the result should flow through all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// react and redux are completely separate libraries. to put them together, we make use of another library called react-redux.

// one of the components gets defined as a container (aka smart component) - a react component that has a direct connection to the state managed by redux.

// which components should be containers? most top-level componenet that cares about state. in this case, App doesn't really care about the list of books or the selected book. It's BookList and BookDetail that should be containers, and a direct connection to Redux. App can just be an ordinary component.

// when a component is a container, you export the connect function between the mapStateToProps function and then the component, and produces a container

// when application state changes, our container (in this case BookList) will automatically rerender, and the object from the mapStateToProps function will auto get assigned as props to BookList container
