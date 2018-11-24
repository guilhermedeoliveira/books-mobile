import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { arrayOf, object, number } from 'prop-types';

import { GridItemContainer } from './Grid.styles';
import Text from '../Text';

import { formatGridData } from '../../helpers/array';

class Grid extends PureComponent {
  static propTypes = {
    data: arrayOf(object).isRequired,
    grid: number.isRequired
  };

  _renderItem = ({ item }) => (
    <GridItemContainer>
      <Text>{item.name}</Text>
    </GridItemContainer>
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
