import {FlatList, FlatListProps} from 'react-native';
import React, {useCallback} from 'react';
import {GlobalImports} from '../../config/globalImports';
import ListLoader from '../../components/listLoader';
import Planets from '../../components/listItems/planets';
import Peoples from '../../components/listItems/peoples';
import Films from '../../components/listItems/films';
import TextComp from '../../components/textComp';

interface ListProps {
  peoples: Record<string, any>;
  films: Record<string, any>;
  planets: Record<string, any>;
  loadMoreFilm: () => void;
  loadMorePeople: () => void;
  loadMorePlanet: () => void;
  styles: any;
  navigation: any;
  selected: string;
}

const List: React.FC<ListProps> = ({
  selected,
  peoples,
  films,
  planets,
  loadMoreFilm,
  loadMorePeople,
  loadMorePlanet,
  styles,
  navigation,
}) => {
  const renderItem = useCallback(
    ({item}: {item: Record<string, any>}) =>
      selected == 'peoples' ? (
        <Peoples item={item} styles={styles} navigation={navigation} />
      ) : selected == 'planets' ? (
        <Planets item={item} styles={styles} navigation={navigation} />
      ) : (
        <Films item={item} styles={styles} navigation={navigation} />
      ),
    [selected],
  );

  const handleFooterComponent = () =>
    selected == 'peoples' ? (
      peoples.status == 'loading' ? (
        <ListLoader />
      ) : null
    ) : selected == 'planets' ? (
      planets.status == 'loading' ? (
        <ListLoader />
      ) : null
    ) : films.status == 'loading' ? (
      <ListLoader />
    ) : null;
  const handleEmptyComponent = () =>
    selected == 'peoples' ? (
      peoples.status != 'loading' ? (
        <TextComp
          style={{textAlign: 'center', marginVertical: 10}}
          text={peoples.error || 'No Data Found'}
        />
      ) : null
    ) : selected == 'planets' ? (
      planets.status != 'loading' ? (
        <TextComp
          style={{textAlign: 'center', marginVertical: 10}}
          text={planets.error || 'No Data Found'}
        />
      ) : null
    ) : films.status != 'loading' ? (
      <TextComp
        style={{textAlign: 'center', marginVertical: 10}}
        text={films.error || 'No Data Found'}
      />
    ) : null;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: GlobalImports.hp('0.88%'),
        width: GlobalImports.wp('90%'),
        alignSelf: 'center',
      }}
      data={
        selected == 'peoples'
          ? peoples.data
          : selected == 'planets'
          ? planets.data
          : films.data
      }
      keyExtractor={item => item.created.toString()}
      renderItem={renderItem}
      initialNumToRender={6}
      maxToRenderPerBatch={4}
      windowSize={4}
      onEndReached={
        selected == 'peoples'
          ? loadMorePeople
          : selected == 'planets'
          ? loadMorePlanet
          : loadMoreFilm
      }
      onEndReachedThreshold={0.1}
      ListFooterComponent={handleFooterComponent}
      //columnWrapperStyle={{justifyContent:'center',alignItems:'center'}}
      ListEmptyComponent={handleEmptyComponent}
      // getItemLayout={(data, index) => (
      //     {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
      // )}
    />
  );
};

export default React.memo(List);
