import {View} from 'react-native';
import React from 'react';
import TextComp from '../textComp';
import {ListProps} from './types';

const Films: React.FC<ListProps> = ({item, styles, navigation}) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Characters: '} />
        <View>
          {item.personajes.map((characterItem: string) => (
            <TextComp
              onPress={() =>
                navigation.navigate('detailedView', {url: characterItem})
              }
              style={styles.boxItemValue}
              text={characterItem}
            />
          ))}
        </View>
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Director: '} />
        <TextComp style={styles.boxItemValue} text={item.director} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Episode Id: '} />
        <TextComp style={styles.boxItemValue} text={item.id_episodio} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Opening Crawl: '} />
        <TextComp style={styles.boxItemValue} text={item.introduccion} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Planets: '} />
        <View>
          {item.planetas.map((planetItem: string) => (
            <TextComp style={styles.boxItemValue} text={planetItem} />
          ))}
        </View>
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Producer: '} />
        <TextComp style={styles.boxItemValue} text={item.productor} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Release Date: '} />
        <TextComp style={styles.boxItemValue} text={item.fecha_lanzamiento} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Species: '} />
        <View>
          {item.especies.map((specieItem: string) => (
            <TextComp style={styles.boxItemValue} text={specieItem} />
          ))}
        </View>
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Starships: '} />
        <View>
          {item.naves_estelares.map((starshipItem: string) => (
            <TextComp style={styles.boxItemValue} text={starshipItem} />
          ))}
        </View>
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Title: '} />
        <TextComp style={styles.boxItemValue} text={item.titulo} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Url: '} />
        <TextComp style={styles.boxItemValue} text={item.url} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Vehicles: '} />
        <View>
          {item.vehiculos.map((vehicleItem: string) => (
            <TextComp style={styles.boxItemValue} text={vehicleItem} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default React.memo(Films);
