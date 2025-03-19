import {Pressable} from 'react-native';
import {GlobalImports} from '../../config/globalImports';

const Back = ({styles = {}, fillColor = 'red', ...rest}) => {
  const defaultStyles = {
    width: GlobalImports.wp('8%'),
    height: GlobalImports.wp('8%'),
  };

  return (
    <Pressable {...rest} style={{...defaultStyles, ...styles}}>
      <GlobalImports.SvgXml
        xml={`
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
            <path 
              d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"
              fill="${fillColor}"
            />
          </svg>
        `}
        width="100%"
        height="100%"
      />
    </Pressable>
  );
};

export default Back;
