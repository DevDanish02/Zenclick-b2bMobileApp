import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ReportCard from '../components/ReportsCards/ReportCard';
import {LineChart} from 'react-native-chart-kit';
import ZenKlick from '../assets/images/ZenKlick.jpeg';
import Colors from '../constants/Colors';

const {width} = Dimensions.get('window');

const SectionHeader = ({title, subtitle}) => (
  <View style={styles.sectionHeader}>
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionSubtitle}>{subtitle}</Text>
    </View>
    <TouchableOpacity style={styles.viewAllBtn}>
      <Text style={styles.viewAllText}>View All</Text>
    </TouchableOpacity>
  </View>
);

const EnhancedReports = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stickyHeader}>
        <Image source={ZenKlick} style={styles.logo} />
        <Text style={styles.headerText}>Margin Screen</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Sales Reports Section */}
        <View style={styles.sectionCard}>
          <SectionHeader
            title="Sales Reports"
            subtitle="Latest Performance Overview"
          />
          <View style={styles.cardRow}>
            <ReportCard text="Total Revenue" value="$0.0" icon="cash-outline" />
            <ReportCard text="Products Sold" value="0" icon="cube-outline" />
            <ReportCard
              text="Avg Order Value"
              value="$0.0"
              icon="trending-up-outline"
            />
          </View>
          <LineChart
            data={{
              labels: ['May', 'Jun', 'Jul', 'Au g', 'Sep', 'Oct'],
              datasets: [{data: [0, 0, 0, 0, 0, 0]}],
            }}
            width={width - 40}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
        </View>

        {/* Category Breakdown Section */}
        <View style={styles.sectionCard}>
          <SectionHeader
            title="Category Breakdown"
            subtitle="Sales by Category"
          />
          <View style={styles.cardRow}>
            <ReportCard text="Electronics" value="$0.0" icon="tv-outline" />
            <ReportCard text="Clothing" value="$0.0" icon="shirt-outline" />
            <ReportCard
              text="Home Appliances"
              value="$0.0"
              icon="home-outline"
            />
          </View>
          <LineChart
            data={{
              labels: ['Elec', 'Cloth', 'Home'],
              datasets: [{data: [0, 0, 0]}],
            }}
            width={width - 40}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#f3f3f3',
  backgroundGradientTo: '#f3f3f3',
  decimalPlaces: 0,
  color: () => `rgba(0, 123, 255, 0.8)`,
  labelColor: () => `rgba(0, 0, 0, 0.6)`,
  propsForDots: {r: '5', strokeWidth: '2', stroke: Colors.primary},
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f4f4f9'},
  stickyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  logo: {width: 50, height: 50, borderRadius: 25, marginRight: 12},
  headerText: {color: '#fff', fontSize: 20, fontWeight: '600'},
  content: {paddingTop: 16, paddingHorizontal: 20, paddingBottom: 40},
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {fontSize: 18, fontWeight: '600', color: '#333'},
  sectionSubtitle: {fontSize: 14, color: '#666'},
  viewAllBtn: {padding: 6},
  viewAllText: {color: Colors.primary, fontSize: 12, fontWeight: '600'},
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 5,
  },
  chart: {
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default EnhancedReports;
