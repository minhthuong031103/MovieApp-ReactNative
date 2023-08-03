import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../theme/theme';
import {MySvg} from '../assets/MySvg';
import {baseImagePath, nowPlayingMovies} from '../api/apicalls';
import MovieCard from '../components/MovieCard';
const {width} = Dimensions.get('window');
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
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.Black},
});

//asyncronus
export default function HomeScreen() {
  const [nowPlaying, setNowPlaying] = React.useState([]);
  useEffect(() => {
    (async () => {
      const options = {method: 'GET', headers: {accept: 'application/json'}};
      const results = await fetch(nowPlayingMovies, options);
      const data = await results.json();
      setNowPlaying(data.results);
    })();
  }, []);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <View
        style={{
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
          <Text>{nowPlaying[0].title}</Text>
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
      </View> */}

      <StatusBar hidden />
      {/* 
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
      </View> */}
      {/* 
      <CategoryHeader title={'Now Playing'} /> */}
      <Text>now playing</Text>
      <FlatList
        data={nowPlaying}
        keyExtractor={(item: any) => item.id}
        bounces={false}
        snapToInterval={width * 0.7 + 36}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        contentContainerStyle={{gap: 36}}
        renderItem={({item, index}) => {
          if (!item.original_title) {
            return (
              <View
                style={{
                  width: (width - (width * 0.7 + 36 * 2)) / 2,
                }}></View>
            );
          }
          return (
            <MovieCard
              shoudlMarginatedAtEnd={true}
              cardFunction={() => {
                // navigation.push('MovieDetails', {movieid: item.id});
              }}
              cardWidth={width * 0.7}
              isFirst={index == 0 ? true : false}
              // isLast={index == upcomingMoviesList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w780', item.poster_path)}
              genre={item.genre_ids.slice(1, 4)}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
            />
          );
        }}
      />
    </ScrollView>
  );
}
