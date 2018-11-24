import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { arrayOf, object, number } from 'prop-types';

import Book from '../Book';

import { listScreenBookStyle } from '../../styles/general';
import { formatGridData } from '../../helpers/array';

class Grid extends PureComponent {
  static propTypes = {
    data: arrayOf(object).isRequired,
    grid: number.isRequired
  };

  _renderItem = ({ item }) => (
    <Book item={item} containerStyle={listScreenBookStyle} />
  );

  render() {
    const { data, grid } = this.props;

    return (
      <FlatList
        data={formatGridData(data, grid)}
        keyExtractor={item => item.id}
        numColumns={grid}
        renderItem={this._renderItem}
      />
    );
  }
}

export default Grid;
