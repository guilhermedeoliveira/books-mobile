import React, { Component } from 'react';
import {
  func,
  bool,
  arrayOf,
  object
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider } from 'react-native-elements';

import { ViewContainer, StyledMaterialIcon } from '../components/shared';
import Header from '../components/Header';
import Grid from '../components/Grid';

import { getBooks } from '../store/books';

import styles, { em, isIOS } from '../styles';
import { listScreendividerStyle } from '../styles/general';

class ListScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'List'
  };

  static propTypes = {
    getBooks: func.isRequired,
    loading: bool.isRequired,
    books: arrayOf(object).isRequired
  };

  async componentDidMount() {
    await this.props.getBooks('a vida como');
  }

  render() {
    const { loading, books } = this.props;

    return (
      <ViewContainer
        paddingVertical={isIOS ? em(3.5) : em(1.5)}
        paddingHorizontal={em(0.3)}
        backgroundColor={styles.colors.mainColor}
      >
        <Header
          left={<StyledMaterialIcon name="menu" />}
          title="Design Books"
          right={<StyledMaterialIcon name="search" />}
        />

        <Divider style={listScreendividerStyle} />

        <Grid
          isLoading={loading}
          data={books}
          grid={3}
        />
      </ViewContainer>
    );
  }
}

export default connect(
  store => ({
    loading: store.books.loading,
    books: store.books.data,
    error: store.books.error
  }),
  dispatch => bindActionCreators({ getBooks }, dispatch)
)(ListScreen);
