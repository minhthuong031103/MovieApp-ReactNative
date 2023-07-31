import {View, Text, TextInput, Image, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';
import {MySvg} from '../assets/MySvg';

const data = [
  {
    id: 1,
    title: 'John Wick: Chapter 4',
  },
  {
    id: 2,
    title: 'John Wick: Chapter 4',
  },
  {
    id: 3,
    title: 'John Wick: Chapter 4',
  },
  {
    id: 4,
    title: 'John Wick: Chapter 4',
  },
];

const FilmItem = () => {
  return (
    <View style={{width: 133, height: 200}}>
      <Image
        style={{width: '100%', height: '100%', borderRadius: 20}}
        resizeMode="contain"
        source={require('../assets/johnWick.png')}
      />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          paddingTop: 29,
          paddingHorizontal: 29,
        }}>
        <View
          style={{
            borderRadius: 19.5,
            borderWidth: 1,
            height: 52,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput style={{marginLeft: 20}} placeholder="Search your Movie" />
          <View style={{marginRight: 20}}>{MySvg.searchIcon()}</View>
        </View>

        <View style={{marginTop: 20, marginBottom: 20}}>
          <Text>Now Playing</Text>
        </View>
        <View style={{width: '100%'}}>
          <Image
            style={{height: 500, borderRadius: 20, width: '100%'}}
            resizeMode="contain"
            source={require('../assets/johnWick.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          {MySvg.star()}
          <Text>8.0 (1,024)</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text>John Wick: Chapter 4</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 15}}>
          <View style={{borderRadius: 10, borderWidth: 1, padding: 4}}>
            <Text>Action</Text>
          </View>
          <View style={{borderRadius: 10, borderWidth: 1, padding: 4}}>
            <Text>Thriller</Text>
          </View>
          <View style={{borderRadius: 10, borderWidth: 1, padding: 4}}>
            <Text>Crime</Text>
          </View>
        </View>

        <View>
          <Text>popular</Text>
          <View style={{margintop: 20}}>
            <FlatList
              horizontal={true}
              renderItem={FilmItem}
              contentContainerStyle={{gap: 20}}
              data={data}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
