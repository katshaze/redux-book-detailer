
export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action:
  // an object with a type property (uppercase) and sometimes a payload (i.e. more info about the action that was taken)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

// contain all the different action creators that we make

// need to wire up all our action creators to redux. need to bind the selectBook action creator to the BookList container
