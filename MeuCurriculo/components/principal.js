import React from 'react';
import { View, Text, Image } from 'react-native';

const principal = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../MeuCurriculo/assets/minhafoto.jpeg')}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      <Text>Laura Araújo</Text>
    </View>
  );
};

export default principal;
