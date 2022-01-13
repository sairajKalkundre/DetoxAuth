import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SearchStackRouteParamsList} from '../../navigators/types';
import FeatherIcon from 'react-native-vector-icons/Feather';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
});
const PodcastDetailScreen = () => {
  const {data} = useRoute<NavigationParams>().params ?? {};
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
              {data.thumbnail && (
                <Image
                  source={{uri: data.thumbnail}}
                  style={styles.imageStyle}
                />
              )}
              <View style={{flex: 1}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {data.podcastName}
                </Text>
                <Text
                  style={{fontSize: 16, fontWeight: '500', color: '#C9C9C9'}}>
                  {data.artist}
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
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Play</Text>
              </View>
            </View>
            <View style={{paddingLeft: 10, marginBottom: 20}}>
              <Text style={{fontSize: 22, marginTop: 20, fontWeight: 'bold'}}>
                Episodes
              </Text>
            </View>
          </>
        }
        data={[{id: '1'}, {id: '2'}]}
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
        renderItem={() => (
          <View style={{marginLeft: 10, flex: 1}}>
            <Text style={{fontSize: 18, color: 'grey'}}>FRIDAY</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              #400 - The Title
            </Text>
            <Text style={{fontSize: 16}} numberOfLines={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            <Text style={{fontSize: 18}}>3hrs.13min</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default PodcastDetailScreen;
