import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useLazyQuery} from '@apollo/client';
import {
  SearchQuery,
  SearchQuery_search,
  SearchQueryVariables,
} from '../../types/graphql';
import searchQuery from '../../graphql/query/searchQuery';
import {SearchEmpty} from './SearchEmpty';
import {SearchTile} from './SearchTile';

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#DCDCDC',
    height: 50,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    paddingLeft: 20,
  },
});

export default function SearchScreen() {
  const [term, setTerm] = useState<string>('');
  const [search, {data, loading, error}] = useLazyQuery<
    SearchQuery,
    SearchQueryVariables
  >(searchQuery);

  const onSearch = async () => {
    try {
      await search({variables: {term}});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        onChangeText={setTerm}
        autoCorrect={false}
        onSubmitEditing={onSearch}
        value={term}
      />
      <FlatList<SearchQuery_search>
        keyboardShouldPersistTaps="never"
        data={data?.search ?? []}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        ListHeaderComponent={
          <>
            {loading && (
              <View style={{height: 100}}>
                <ActivityIndicator size="large" color="blue" />
              </View>
            )}
          </>
        }
        ListEmptyComponent={<>{!loading && <SearchEmpty />}</>}
        renderItem={({item}) => <SearchTile item={item} />}
        keyExtractor={item => item.podcastName}
      />
    </SafeAreaView>
  );
}
