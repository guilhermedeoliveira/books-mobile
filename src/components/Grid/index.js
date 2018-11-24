import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import {
  bool,
  arrayOf,
  object,
  number
} from 'prop-types';

import { ViewContainer } from '../shared';
import Loader from '../Loader';
import Text from '../Text';
import Book from '../Book';

import { listScreenBookStyle } from '../../styles/general';
import { formatGridData } from '../../helpers/array';

class Grid extends PureComponent {
  static propTypes = {
    isLoading: bool.isRequired,
    data: arrayOf(object).isRequired,
    grid: number.isRequired
  };

  _renderItem = ({ item }) => (
    <Book item={item} containerStyle={listScreenBookStyle} />
  );

  render() {
    const { isLoading, data, grid } = this.props;

    if (isLoading) {
      return (
        <ViewContainer centralized>
          <Loader />
        </ViewContainer>
      );
    }

    if (data.length < 1) {
      return (
        <ViewContainer centralized>
          <Text large>No books!</Text>
        </ViewContainer>
      );
    }

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
