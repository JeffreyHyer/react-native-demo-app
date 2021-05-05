import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { SCREENS } from '../App';

const PracticeLogScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 16 }}>
          I haven't done anything with this screen yet, I'm just using it to
          test things as I go.
        </Text>

        <View style={{ marginTop: 32 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.DASHBOARD)}
          >
            <View style={{ backgroundColor: '#46865D', borderRadius: 8, padding: 12, marginBottom: 16 }}>
              <Text style={{ color: '#ffffff', textAlign: 'center' }}>Go back to the Dashboard</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.LOGIN)}>
            <View style={{ backgroundColor: '#B71540', borderRadius: 8, padding: 12, marginBottom: 16 }}>
              <Text style={{ color: '#ffffff', textAlign: 'center' }}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PracticeLogScreen;
