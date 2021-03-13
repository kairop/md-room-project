import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const Book_read = ({route, navigation}) => {
  const [Bookread, setBookread] = React.useState(Bookread);

  React.useEffect(() => {
    let {Bookread} = route.params;
    setBookread(Bookread);
  }, [Bookread]);

  function renderContent() {
    return (
      <View>
        {/* back */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{...FONTS.h2, color: COLORS.white,marginTop: SIZES.radius}}
            onPress={() => navigation.goBack()}>
            Back
          </Text>
        </View>
        <ScrollView style={{}}>
        <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding}}>
          {/* Custom Scrollbar */}
          <View style={{width: 4}}></View>
          {/* Description */}
          <Text style={{...FONTS.body2, color: COLORS.lightGray2}}>
            {Bookread.Contents}
          </Text>
        </View>
        </ScrollView>
      </View>
    );
  }

  if (Bookread) {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.blue,marginTop: SIZES.radius}}>
          {/* Description */}
          <View style={{flex: 1}}>{renderContent()}</View>
        
      </View>
    );
  } else {
    return <></>;
  }
};

export default Book_read;
