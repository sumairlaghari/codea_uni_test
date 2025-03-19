import {FlatList, FlatListProps} from 'react-native';
import React, {useCallback} from 'react';
import {GlobalImports} from '../../config/globalImports';
import ListLoader from '../../components/listLoader';
import Peoples from '../../components/listItems/peoples';
import TextComp from '../../components/textComp';

interface ListProps {
  peoples: any[];
  loadMorePeople: () => void;
  styles: any;
  navigation: any;
  loading: boolean;
}

const List: React.FC<ListProps> = ({
  peoples,
  loadMorePeople,
  styles,
  navigation,
  loading,
}) => {
  const renderItem = useCallback(
    ({item}: {item: Record<string, any>}) => (
      <Peoples item={item} styles={styles} navigation={navigation} />
    ),
    [],
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: GlobalImports.hp('0.88%'),
        width: GlobalImports.wp('90%'),
        alignSelf: 'center',
      }}
      data={peoples}
      keyExtractor={item => item.created.toString()}
      renderItem={renderItem}
      initialNumToRender={6}
      maxToRenderPerBatch={4}
      windowSize={4}
      onEndReached={loadMorePeople}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading ? <ListLoader /> : null}
      ListEmptyComponent={
        !loading ? (
          <TextComp
            style={{textAlign: 'center', marginVertical: 10}}
            text={'No Data Found'}
          />
        ) : null
      }
    />
  );
};

export default React.memo(List);
