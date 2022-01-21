import React from 'react';
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SearchStackRouteParamsList} from '../../navigators/types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useQuery} from "@apollo/client";
import {FeedQuery, FeedQueryVariables} from "../../types/graphql";
import feedQuery from "../../graphql/query/feedQuery";
import {getWeekDay, humanDuration} from "../../lib/dateTimeHelper";

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
});
const PodcastDetailScreen = () => {
  const {data : podcastData} = useRoute<NavigationParams>().params ?? {};
  const {data , loading} = useQuery<FeedQuery,FeedQueryVariables>(feedQuery , {
      variables : {
          feedUrl : podcastData.feedUrl
      }
  })
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                paddingLeft: 10,
                marginBottom: 20,
              }}>
              {podcastData.thumbnail && (
                <Image
                  source={{uri: podcastData.thumbnail}}
                  style={styles.imageStyle}
                />
              )}
              <View style={{flex: 1}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {podcastData.podcastName}
                </Text>
                <Text
                  style={{fontSize: 16, fontWeight: '500', color: '#C9C9C9'}}>
                  {podcastData.artist}
                </Text>
                <Text
                  style={{fontSize: 16, fontWeight: '500', color: '#87CEFA'}}>
                  Subscribed
                </Text>
              </View>
            </View>
            <View style={{paddingLeft: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FeatherIcon name="play" size={30} style={{marginRight: 10}} />
                  <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Play</Text>
                  <Text style={{fontSize: 14, fontWeight: '200'}}>{data?.feed[0].title}</Text>
                  </View>

              </View>
            </View>
            <View style={{paddingLeft: 10, marginBottom: 20}}>
              <Text style={{fontSize: 22, marginTop: 20, fontWeight: 'bold'}}>
                Episodes
              </Text>
            </View>
              {loading && (
                  <View>
                      <ActivityIndicator size={"large"} color={"blue"}/>
                  </View>
              )}
          </>
        }
        data={data?.feed }
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              paddingLeft: 20,
              marginTop: 20,
              marginBottom: 20,
            }}>
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: '#e0e0e0',
              }}
            />
          </View>
        )}
        renderItem={({item}) => (
          <View style={{marginLeft: 10, flex: 1}}>
            <Text style={{fontSize: 14, color: 'grey'}}>{getWeekDay(new Date(item?.pubDate)).toUpperCase() }</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {item.title}
            </Text>
            <Text style={{fontSize: 16 , color : 'grey'}} numberOfLines={2}>
                {item?.description}
            </Text>
            <Text style={{fontSize: 14 , color : 'grey',fontWeight : '200'}}>{humanDuration(item.duration)}</Text>
          </View>
        )}
        keyExtractor={item => item?.linkUrl}
      />
    </View>
  );
};
export default PodcastDetailScreen;
