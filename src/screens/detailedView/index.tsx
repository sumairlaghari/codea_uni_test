import {View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import getStyles from './styles';
import {GlobalImports} from '../../config/globalImports';
import ThemeWrapper from '../../components/themeWrapper';
import TextComp from '../../components/textComp';
import ListLoader from '../../components/listLoader';
import Back from '../../assets/svg/back';
import {getRequestWithoutAuth} from '../../config/helperFunction';
import Peoples from '../../components/listItems/peoples';
import {translateKeys} from '../../redux/translations';
//import { StackScreenProps } from '@react-navigation/stack';

// type DetailedViewParams = {
//   url: string;
// };

// type RootStackParamList = {
//   DetailedView: DetailedViewParams;
// };

// type Props = StackScreenProps<RootStackParamList, 'DetailedView'>;

interface DataState {
  results: any[];
}

const DetailedView: React.FC = ({navigation, route}: any) => {
  const {colors} = GlobalImports.useTheme();
  const styles = getStyles(colors);

  const [data, setData] = useState<DataState>({results: []});
  const [loading, setLoading] = useState<boolean>(false);
  const url = route.params.url;

  useEffect(() => {
    getData(url);
  }, []);

  const getData = async (url: string) => {
    setLoading(true);
    try {
      const response = await getRequestWithoutAuth(url);
      if (response) {
        setData(translateKeys({results: [response]}));
        setLoading(false);
      }
    } catch (error) {
      console.log('Error fetching peoples:', error);
      setLoading(false);
    }
  };

  const handleNav = () => {
    navigation.goBack();
  };

  const renderItem = ({item}: {item: Record<string, any>}) => (
    <Peoples item={item} styles={styles} navigation={navigation} />
  );

  return (
    <ThemeWrapper>
      <View style={styles.header}>
        <Back
          fillColor={colors.commonWhite}
          onPress={handleNav}
          styles={styles.backButton}
        />
        <TextComp
          text={'Detailed View'}
          size={GlobalImports.FONT_SIZE.xLarge}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: GlobalImports.hp('0.88%'),
          width: GlobalImports.wp('90%'),
          alignSelf: 'center',
        }}
        data={data.results}
        keyExtractor={item => item.created.toString()}
        renderItem={renderItem}
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
    </ThemeWrapper>
  );
};

export default DetailedView;
