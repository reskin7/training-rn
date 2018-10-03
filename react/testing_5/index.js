import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PAGINATION_LIMITS } from '~constants/paginationLimit';

import { contextIsFalabella } from '~constants/businessCompany';

import { TABLE_TYPES } from '../SimpleTable/constants';

import Table from './layout';

class TableContainer extends PureComponent {
  state = { scrollToIndex: undefined };

  onScroll = () => this.setState({ scrollToIndex: undefined });

  render() {
    return (
      <Table
        headerHeight={this.props.headerHeight}
        rowHeight={this.props.rowHeight}
        rowClassName={this.props.rowClassName}
        headerClassName={this.props.headerClassName}
        className={this.props.className}
        rows={this.props.rows}
        selectedRows={this.props.rows.filter(row =>
          this.props.selectedIndexes.find(item => item.index === row.index)
        )}
        elementType={this.props.elementType}
        currentPage={this.props.currentPage}
        pagesAmount={this.props.pagesAmount}
        scrollToIndex={this.state.scrollToIndex}
        onScroll={this.onScroll}
        paginated={this.props.paginated}
        loading={this.props.loading}
        actionButtons={this.props.actionButtons}
        singleSelected={this.props.singleSelected}
        multipleSelected={this.props.multipleSelected}
        rowsQuantity={PAGINATION_LIMITS}
        massiveActionSuccessMessage={this.props.massiveActionSuccessMessage}
        customComponent={this.props.customComponent}
        autoHeight={this.props.autoHeight}
        gridClassName={this.props.gridClassName}
        customHeight={
          this.props.isFullHeight && this.props.rows.length * this.props.rowHeight + this.props.headerHeight
        }
        rowRenderer={this.props.rowRenderer}
        tableButtons={this.props.tableButtons}
        onPaginationChange={this.props.onPaginationChange}
        paginationClassName={this.props.paginationClassName}
        noButtonSection={this.props.noButtonSection}
        onRowMouseOver={this.props.onRowHover}
        onRowMouseOut={this.props.onRowUnhover}
        leftFooterComponent={this.props.leftFooterComponent}
      >
        {this.props.children}
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  limit: state.query.limit,
  massiveActionSuccessMessage: state.product.massiveActionSuccessMessage,
  selectedIndexes: state.table.selectedIndexes
});

TableContainer.propTypes = {
  isFullHeight: PropTypes.bool,
  autoHeight: PropTypes.bool,
  headerHeight: PropTypes.number,
  rowHeight: PropTypes.number,
  rowClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  elementType: PropTypes.oneOf(TABLE_TYPES),
  onPaginationChange: PropTypes.func,
  currentPage: PropTypes.number,
  pagesAmount: PropTypes.number,
  paginated: PropTypes.bool,
  loading: PropTypes.bool,
  actionButtons: PropTypes.element,
  singleSelected: PropTypes.string,
  multipleSelected: PropTypes.string,
  massiveActionSuccessMessage: PropTypes.string,
  selectedIndexes: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  customComponent: PropTypes.element,
  gridClassName: PropTypes.string,
  rowRenderer: PropTypes.func,
  tableButtons: PropTypes.element,
  paginationClassName: PropTypes.string,
  noButtonSection: PropTypes.bool,
  onRowHover: PropTypes.func,
  onRowUnhover: PropTypes.func,
  leftFooterComponent: PropTypes.element
};

TableContainer.defaultProps = {
  rowClassName: '',
  headerClassName: '',
  className: '',
  headerHeight: contextIsFalabella ? 60 : 76,
  rowHeight: contextIsFalabella ? 60 : 85,
  gridClassName: '',
  paginationClassName: ''
};

export default connect(mapStateToProps)(TableContainer);
