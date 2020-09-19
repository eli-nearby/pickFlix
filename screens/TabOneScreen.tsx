import React, {Component} from "react";
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../components/Themed';
import Carousel from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

/* https://icons.expo.fyi/ */

export default class TabOneScreen extends Component {

  state = {
    entries: [
      {
        id: 1,
        title: 'Parasite',
        rating: 'R',
        genres: ['Comedy', 'Drama'],
        type: 'Movie',
        year: 2019,
        length: '2h 12m',
        description: 'Greed, class discrimination, and a mysterious interloper threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        logo: 'https://img.hulu.com/user/v3/artwork/2fd691a0-f66b-467f-8635-00d7f151f3d4?base_image_bucket_name=image_manager&base_image=7950e659-83e2-40eb-8811-2a9149c08f23&operations=%5B%7B%22resize%22:%22600x120%7Cmax%22%7D,%7B%22format%22:%22png%22%7D%5D',
        image: 'https://img.hulu.com/user/v3/artwork/2fd691a0-f66b-467f-8635-00d7f151f3d4?base_image_bucket_name=image_manager&base_image=3388e2a5-989d-4488-ba59-8f1e2de8832c&operations=%5B%7B%22resize%22:%22810x810%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D'
      },
      {
        id: 2,
        title: 'A Kind of Murder',
        rating: 'R',
        genres: ['Crime', 'Drama'],
        type: 'Movie',
        year: 2016,
        length: '1h 36m',
        description: 'Patrick Wilson and Jessica Biel star in this Hitchcockian noir based on a novel by Patricia Highsmith (The Talented Mr. Ripley, Carol).',
        logo: 'https://img1.hulu.com/user/v3/artwork/3db8daad-52b7-4f2e-979a-88925147bb06?base_image_bucket_name=image_manager&base_image=f0409243-e206-4feb-8a76-988ec01a0be3&operations=%5B%7B%22resize%22:%22600x120%7Cmax%22%7D,%7B%22format%22:%22png%22%7D%5D',
        image: 'https://img1.hulu.com/user/v3/artwork/3db8daad-52b7-4f2e-979a-88925147bb06?base_image_bucket_name=image_manager&base_image=037b7820-6f3e-4971-8024-3238d443a90c&operations=%5B%7B%22resize%22:%22810x810%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D'
      },
      {
        id: 3,
        title: 'How to Train Your Dragon: The Hidden World',
        rating: 'PG',
        genres: ['Comedy', 'Family'],
        type: 'Movie',
        year: 2019,
        length: '1h 44m',
        description: 'From DreamWorks Animation comes a surprising tale about growing up, finding the courage to face the unknown… and how nothing can ever train you to let go. ',
        logo: 'https://img2.hulu.com/user/v3/artwork/1cdc5f79-6e22-4467-a647-1e6e8bca5c7d?base_image_bucket_name=image_manager&base_image=d408f57a-4480-40aa-a0b1-a5aedb52de9d&operations=%5B%7B%22resize%22:%22600x120%7Cmax%22%7D,%7B%22format%22:%22png%22%7D%5D',
        image: 'https://img2.hulu.com/user/v3/artwork/1cdc5f79-6e22-4467-a647-1e6e8bca5c7d?base_image_bucket_name=image_manager&base_image=f5726ad2-1582-4cad-b827-72bc8588037c&operations=%5B%7B%22resize%22:%22810x810%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D'
      }
    ]
  }

  // @ts-ignore
  _renderItem = ({item, index}) => {
    return (
        <View style={styles.card}>
          <View style={styles.item}>
            <View style={styles.itemBody}>
              <Image
                  source={{uri: item.image}}
                  style={styles.itemBodyImage}
              />
            </View>
            <View style={styles.itemFooter}>
              <Image
                  source={{uri: item.logo}}
                  style={styles.logo}
              />
              <View style={styles.stats}>
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text style={styles.statHeader}>
                    Year
                  </Text>
                  <Text style={styles.statContent}>
                    {item.year}
                  </Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text style={styles.statHeader}>
                    Time
                  </Text>
                  <Text style={styles.statContent}>
                    {item.length}
                  </Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text style={styles.statHeader}>
                    Rating
                  </Text>
                  <Text style={styles.statContent}>
                    {item.rating}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
    )
  }

  render() {
    const fullWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
          <Carousel
              data={this.state.entries}
              itemWidth={fullWidth - 30}
              layout={'tinder'}
              layoutCardOffset={10}
              renderItem={this._renderItem}
              sliderWidth={fullWidth}
          />
          <View style={styles.footer}>
            <View style={styles.footerChild}>
              <TouchableOpacity style={styles.footerChildButton}>
                <Feather
                    name="x"
                    size={32}
                    color="#e73420"
                    style={{marginTop: 4, marginLeft: 2}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.footerChild}>
              <TouchableOpacity style={styles.footerChildButton}>
                <Feather
                    name="share"
                    size={28}
                    color="#0271E0"
                    style={{marginTop: 1, marginLeft: 1}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.footerChild}>
              <TouchableOpacity style={styles.footerChildButton}>
                <Feather
                    name="heart"
                    size={28}
                    color="#34c33d"
                    style={{marginTop: 4, marginLeft: 2}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    height: '85%',
    backgroundColor: 'transparent',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerChild: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerChildButton: {
    height: 70,
    width: 70,
    borderRadius: 70/2,
    backgroundColor: '#111213',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    borderRadius: 15,
    flex: 1,
    backgroundColor: '#111213',
  },
  itemFooter: {
    bottom: 0,
    height: '20%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'transparent',
  },
  itemBody: {
    height: '80%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  itemBodyImage: {
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderRadius: 15,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  stats: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 12,
    backgroundColor: 'transparent'
  },
  statHeader: {
    fontSize: 9,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  statContent: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 16
  },
});
