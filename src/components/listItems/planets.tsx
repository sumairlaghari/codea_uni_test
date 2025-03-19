import {View} from 'react-native';
import React from 'react';
import TextComp from '../textComp';
import {ListProps} from './types';

const Planets: React.FC<ListProps> = ({item, styles, navigation}) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Climate: '} />
        <TextComp style={styles.boxItemValue} text={item.clima} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Diameter: '} />
        <TextComp style={styles.boxItemValue} text={item.diametro} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Gravity: '} />
        <TextComp style={styles.boxItemValue} text={item.gravedad} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Name: '} />
        <TextComp style={styles.boxItemValue} text={item.nombre} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Orbital Period: '} />
        <TextComp style={styles.boxItemValue} text={item.periodo_orbital} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Population: '} />
        <TextComp style={styles.boxItemValue} text={item.poblacion} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Residents: '} />
        <View>
          {item.residentes.map((residentItem: string) => (
            <TextComp
              onPress={() =>
                navigation.navigate('detailedView', {url: residentItem})
              }
              style={styles.boxItemValue}
              text={residentItem}
            />
          ))}
        </View>
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Rotation Period: '} />
        <TextComp style={styles.boxItemValue} text={item.periodo_rotacion} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Surface Water: '} />
        <TextComp style={styles.boxItemValue} text={item.agua_superficial} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Terrain: '} />
        <TextComp style={styles.boxItemValue} text={item.terreno} />
      </View>
      <View style={styles.boxItemWrap}>
        <TextComp style={styles.boxItemKey} text={'Url: '} />
        <TextComp style={styles.boxItemValue} text={item.url} />
      </View>
    </View>
  );
};

export default React.memo(Planets);
