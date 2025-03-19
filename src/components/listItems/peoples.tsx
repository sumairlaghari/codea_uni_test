import {View} from 'react-native';
import React from 'react';
import TextComp from '../textComp';
import {ListProps} from './types';

const Peoples: React.FC<ListProps> = ({item, styles, navigation}) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Birth Year: '} />
        <TextComp style={styles.boxItemValue} text={item.ano_nacimiento} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Eye Color: '} />
        <TextComp style={styles.boxItemValue} text={item.color_ojos} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Films: '} />
        <View>
          {item.peliculas.map((filmItem: string) => (
            <TextComp style={styles.boxItemValue} text={filmItem} />
          ))}
        </View>
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Gender: '} />
        <TextComp style={styles.boxItemValue} text={item.genero} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Hair Color: '} />
        <TextComp style={styles.boxItemValue} text={item.color_cabello} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Height: '} />
        <TextComp style={styles.boxItemValue} text={item.altura} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Home World: '} />
        <TextComp style={styles.boxItemValue} text={item.mundo_natal} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Mass: '} />
        <TextComp style={styles.boxItemValue} text={item.masa} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Name: '} />
        <TextComp style={styles.boxItemValue} text={item.nombre} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Skin Color: '} />
        <TextComp style={styles.boxItemValue} text={item.color_piel} />
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
        <TextComp style={styles.boxItemKey} text={'Url: '} />
        <TextComp
          onPress={() => navigation.navigate('detailedView', {url: item.url})}
          style={styles.boxItemValue}
          text={item.url}
        />
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

export default React.memo(Peoples);
