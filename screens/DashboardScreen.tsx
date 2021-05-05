import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const songList: Song[] = [
    { id: 'one', name: 'Song #1' },
    { id: 'two', name: 'Song #2' },
    { id: 'three', name: 'Song #3' },
    { id: 'four', name: 'Song #4' },
    { id: 'five', name: 'Song #5' },
    { id: 'six', name: 'Song #6' },
    { id: 'seven', name: 'Song #7' },
    { id: 'eight', name: 'Song #8' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.headerText}>Welcome, Alyssa!</Text>

        <Text style={styles.subHeaderText}>⏱ Practice Time</Text>

        <View style={styles.cardContainer}>
          <View style={[styles.card, styles.blueCard]}>
            <Text style={styles.cardTime}>13 min</Text>
            <Text style={styles.cardText}>Today</Text>
          </View>

          <View style={[styles.card, styles.greenCard]}>
            <Text style={styles.cardTime}>1 hr 17 min</Text>
            <Text style={styles.cardText}>This Week</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={[styles.card, styles.redCard]}>
            <Text style={styles.cardTime}>172 hrs</Text>
            <Text style={styles.cardText}>This Year</Text>
          </View>
        </View>

        <Text style={styles.subHeaderText}>🎹 Song List</Text>

        <View style={styles.cardContainerList}>
          {songList.map(song => (
            <View
              style={[styles.card, styles.cardFullWidth, styles.whiteCard]}
              key={`song-${song.id}`}
            >
              <Text style={styles.cardDarkText}>{song.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 24,
  },

  headerText: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 16,
  },

  subHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 32,
  },

  cardContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  cardContainerList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },

  card: {
    width: '48%',
    padding: 16,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },

  cardFullWidth: {
    width: '100%',
    shadowOpacity: 0,
    marginTop: 16,
    borderRadius: 8,
  },

  blueCard: {
    backgroundColor: '#134074',
  },

  greenCard: {
    backgroundColor: '#46865D',
  },

  redCard: {
    backgroundColor: '#B71540',
  },

  whiteCard: {
    backgroundColor: '#E0E0E0',
  },

  cardTime: {
    fontSize: 26,
    fontWeight: '600',
    color: '#ffffff',
  },

  cardText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    marginTop: 16,
  },

  cardDarkText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
});

interface Song {
  id: string;
  name: string;
}
