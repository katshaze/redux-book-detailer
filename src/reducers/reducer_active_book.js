// state argument is not app state, but the state that this reducer is responsible for.
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}

// the state = null bit sets null as the default if state comes in as undefined

// Don't mutate the state: always return a fresh object.  // Don't do anything like:
// state.title = book.title
// return state
