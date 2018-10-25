import React, { PureComponent } from 'react';
import { func, bool, shape, string, number } from 'prop-types';
import Button from '@components/Button';

import styles from './styles.scss';

class Book extends PureComponent {
  handleClick = () => {
    const {
      data: { id, name },
      handleClick
    } = this.props;
    handleClick({ id, name, quantity: 1 });
  };

  render() {
    const { data, isSelected } = this.props;
    return (
      <div className={styles.bookItem}>
        <div className={styles.book}>
          <div className={styles.bookFront}>
            <div>
              <img src={data.image} alt={data.name} className={styles.bookCover} />
            </div>
            <div />
          </div>
          <div className={styles.bookPages}>
            <div />
            <div>
              <h1 className={styles.title}>{data.name}</h1>
              <h4 className={styles.subtitle}>{data.author}</h4>
              <p>{data.summary}</p>
              <h6 className={styles.year}>Publication: {data.year}</h6>
            </div>
            <div />
            <div />
            <div />
          </div>
          <div className={styles.bookBack} />
        </div>
        {isSelected && <Button text="Add to cart" onClick={this.handleClick} />}
      </div>
    );
  }
}

Book.propTypes = {
  data: shape({
    name: string,
    author: string,
    image: string,
    summary: string,
    year: number
  }),
  isSelected: bool,
  handleClick: func.isRequired
};

export default Book;
