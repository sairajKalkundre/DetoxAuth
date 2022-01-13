import {SearchQuery_search} from '../../types/graphql';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export function SearchTile(props: {item: SearchQuery_search}) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          marginLeft: 20,
          marginTop: 20,
          height: 60,
          width: 60,
          backgroundColor: '#87CEFA',
          borderRadius: 10,
        }}>
        {props.item.thumbnail && (
          <Image
            source={{uri: props.item.thumbnail}}
            style={{flex: 1, borderRadius: 5}}
          />
        )}
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <Text
          numberOfLines={1}
          style={{
            marginLeft: 20,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {props.item.podcastName}
        </Text>
        <Text style={{marginLeft: 20, fontSize: 14, color: 'grey'}}>
          {props.item.artist}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PodcastDetails', {
              data: props.item,
            })
          }>
          <Text style={{marginLeft: 20, fontSize: 14, color: '#1E90FF'}}>
            {props.item.episodesCount} episodes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
