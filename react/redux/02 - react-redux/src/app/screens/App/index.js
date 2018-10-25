import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import actionsCreators from '@redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  state = {
    books: [],
    bookSelected: []
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected } = store.getState();
      this.setState({ books, bookSelected });
    });
    store.dispatch(actionsCreators.getBooks());
  }

  onSearch = value => {
    store.dispatch(actionsCreators.searchBook(value));
  };

  addToCart = item => {
    store.dispatch(actionsCreators.addToCart(item));
  };

  addItem = itemId => {
    store.dispatch(actionsCreators.addItem(itemId));
  };

  removeItem = itemId => {
    store.dispatch(actionsCreators.removeItem(itemId));
  };

  renderBooks = item => {
    const isSelected = this.state.bookSelected.findIndex(el => el.id === item.id) === -1;
    return <Book key={item.id} data={item} isSelected={isSelected} handleClick={this.addToCart} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {this.state.books.length ? (
            this.state.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.state.bookSelected.length ? (
          <ShoppingCart data={this.state.bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
