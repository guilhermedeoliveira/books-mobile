/* eslint-disable react/destructuring-assignment */

import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  shape,
  func,
  bool,
  arrayOf,
  object
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider } from 'react-native-elements';

import { ViewContainer, StyledMaterialIcon } from '../components/shared';
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import Grid from '../components/Grid';

import { fetchBooks, paginateBooks } from '../store/books';

import styles, { em } from '../styles';
import { listScreendividerStyle } from '../styles/general';

class ListScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired,
    fetchBooks: func.isRequired,
    paginateBooks: func.isRequired,
    loading: bool.isRequired,
    books: arrayOf(object).isRequired
  };

  state = {
    isShowingSearchInput: false,
    isFetchingWithButton: false,
    startIndex: 10
  };

  onNavigate = (route, params) => {
    const { navigation: { navigate } } = this.props;
    return navigate(route, params);
  };

  onPressSearchButton = async () => {
    await this._fetchBooks();

    return this.setState({
      isShowingSearchInput: false,
      isFetchingWithButton: true
    });
  };

  onChangeInput = (value, name) => this.setState({ [name]: value });

  _showSearchInput = () => this.setState({ search: '', isShowingSearchInput: true });

  _fetchBooks = () => {
    this.props.fetchBooks(this.state.search);
    this.setState({ startIndex: 10 });
  };

  _paginateBooks = () => {
    const { paginateBooks } = this.props;
    const { search, startIndex, isShowingSearchInput } = this.state;

    if (startIndex < 40 && !isShowingSearchInput) {
      paginateBooks(search, startIndex);
      this.setState({ startIndex: startIndex + 10 });
    }
  };

  render() {
    const { loading, books } = this.props;
    const { isShowingSearchInput, isFetchingWithButton, search } = this.state;

    return (
      <ViewContainer
        paddingTop={em(1)}
        paddingHorizontal={em(0.3)}
        backgroundColor={styles.colors.mainColor}
      >
        {isShowingSearchInput
          ? (
            <SearchInput
              name="search"
              placeholder="Search book"
              value={search}
              onChangeText={this.onChangeInput}
              onPressSearchButton={this.onPressSearchButton}
            />
          )
          : (
            <Header
              left={<StyledMaterialIcon name="menu" />}
              title="Design Books"
              right={(
                <TouchableOpacity onPress={this._showSearchInput}>
                  <StyledMaterialIcon name="search" />
                </TouchableOpacity>
              )}
            />
          )}

        <Divider style={listScreendividerStyle} />

        <Grid
          isLoading={loading}
          isFetchingWithButton={isFetchingWithButton}
          data={books}
          onRefresh={this._fetchBooks}
          onEndReached={this._paginateBooks}
          grid={3}
          onPressGridItem={this.onNavigate}
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
  dispatch => bindActionCreators({ fetchBooks, paginateBooks }, dispatch)
)(ListScreen);
