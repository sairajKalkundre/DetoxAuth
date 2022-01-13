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
import FeatherIcon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 40,
          borderRadius: 10,
          paddingLeft: 10,
          width: '90%',
          backgroundColor: '#DCDCDC',
          marginLeft: 20,
          marginTop: 20,
          marginBottom: 20,
        }}>
        <FeatherIcon
          name="search"
          size={20}
          color="grey"
          style={{marginRight: 10}}
        />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          onChangeText={setTerm}
          autoCorrect={false}
          onSubmitEditing={onSearch}
          value={term}
        />
      </View>
      <FlatList<SearchQuery_search>
        keyboardShouldPersistTaps="never"
        data={data?.search ?? []}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        ListHeaderComponent={
          <>
            {loading && (
              <View style={{height: 100, marginTop: 20}}>
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
