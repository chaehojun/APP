import React from 'react';
import {View, Button} from 'react-native';

function HoemScreen({navigation}) {
  return (
    <View>
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail')}
        // onPress={() => navigation.push('Detail')}
      />
    </View>
  );
}

export default HoemScreen;