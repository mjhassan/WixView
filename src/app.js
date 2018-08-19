import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

// Basic Examples
import ChatHeads from './examples/ChatHeads';
import SwipeableCard from './examples/SwipeableCard';
import IconDrawer from './examples/IconDrawer';
import CollapsingHeader from './examples/CollapsingHeader';
import MoreDrawers from './examples/MoreDrawers';
import MoreChatHeads from './examples/MoreChatHeads';
import HandleTouches from './examples/HandleTouches';
import TouchesInside from './examples/TouchesInside';
import TouchesInsideStatic from './examples/TouchesInsideStatic';
import HandleRelayout from './examples/HandleRelayout';
import SideMenu from './examples/SideMenu';
import SnapTo from './examples/SnapTo';
import ChangePosition from './examples/ChangePosition';
import AlertAreas from './examples/AlertAreas';
import CollapsingHeaderWithScroll from './examples/CollapsingHeaderWithScroll';

// Real life Examples
import Documentation from './real-life-examples/Documentation';
import RowActions1 from './real-life-examples/RowActions1';
import RowActions2 from './real-life-examples/RowActions2';
import NowCard from './real-life-examples/NowCard';
import TinderCard from './real-life-examples/TinderCard';
import NotifPanel from './real-life-examples/NotifPanel';
import MapPanel from './real-life-examples/MapPanel';
import CollapsibleFilter from './real-life-examples/CollapsibleFilter';
import CollapsibleCalendar from './real-life-examples/CollapsibleCalendar';
import RealChatHeads from './real-life-examples/RealChatHeads';
import UxInspirations from './real-life-examples/UxInspirations';

const listRows = {
  'Basic examples': [
    'ChatHeads',
    'Swipeable Card',
    'Icon Drawer (row actions)',
    'Collapsing Header',
    'More Drawers (row actions)',
    'More Chat Heads',
    'Handle Touches',
    'Touches Inside (interactive)',
    'Touches Inside (static)',
    'Handle Relayout',
    'Side Menu (imperative cmd)',
    'Snap To (imperative cmd)',
    'Change Position (imperative cmd)',
    'Alert Areas and Drag Event',
    'Collapsing Header with Scroll',
  ],
  'Real Life examples': [
    'Documentation',
    'Row Actions (Google Style)',
    'Row Actions (Apple Style)',
    'Google Now-Style Card',
    'Tinder-Style Card',
    'Notification Panel',
    'Apple Maps-Style Panel',
    'Collapsible Filter',
    'Collapsible Calendar (Any.do-Style)',
    'Real Chat Heads',
    'UX Inspirations',
  ]
}

const actions = [
  [
    ChatHeads,
    SwipeableCard,
    IconDrawer,
    CollapsingHeader,
    MoreDrawers,
    MoreChatHeads,
    HandleTouches,
    TouchesInside,
    TouchesInsideStatic,
    HandleRelayout,
    SideMenu,
    SnapTo,
    ChangePosition,
    AlertAreas,
    CollapsingHeaderWithScroll
  ],
  [
    Documentation,
    RowActions1,
    RowActions2,
    NowCard,
    TinderCard,
    NotifPanel,
    MapPanel,
    CollapsibleFilter,
    CollapsibleCalendar,
    RealChatHeads,
    UxInspirations
  ]
];

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExample: undefined
    }
  }

  render() {
    let title = 'React Native Interactions';
    if(this.state.currentExample) {
      title = this.state.currentExample.displayName;
    }

    return (
      <View style={styles.container} testID={'Overview'}>
        <View style={styles.header}>
          {
            this.state.currentExample &&
            <TouchableOpacity style={styles.menuContainer} onPress={this.onMenuPress.bind(this)}>
              <Image style={styles.menuIcon} source={require('../assets/icon-menu.png')} />
            </TouchableOpacity>
          }
          <Text style={styles.headerTitle}>{title}</Text>
        </View>

        <View style={styles.body}>
          {this.renderContent()}
        </View>

      </View>
    );
  }

  renderContent() {
    if (this.state.currentExample) {
      const ExampleComponent = this.state.currentExample;
      return <ExampleComponent />;
    }

    const keys = Object.keys(listRows);

    return (
      <ScrollView style={styles.listContainer}>
      {
        keys.map((key, idx) => {
          const rows = listRows[key];

          return <FlatList
            key={key}
            keyExtractor={item => item}
            data={rows}
            renderItem={({index, item})=>{
              let rowStyle = styles.button
              if(idx === 1 && (index === 0 || index == rows.length-1)) {
                rowStyle = styles.button2
              }

              return <TouchableOpacity onPress={()=>this.onExamplePress(idx, index)}>
                <Text style={rowStyle}>{item}</Text>
              </TouchableOpacity>
            }}
            ListHeaderComponent={item => <Text style={styles.seperatorText}>{key}</Text>}
          />
        })
      }
      </ScrollView>
    );
  }

  onExamplePress = (section, row) => {
    let example = actions[section][row];
    this.setState({currentExample: example});
  }

  onMenuPress() {
    this.setState({currentExample: undefined});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  header: {
    height: 75,
    paddingTop: 22,
    backgroundColor: '#5894f3',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1001
  },
  body: {
    flex: 1,
    zIndex: 1000
  },
  listContainer: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 40,
  },
  menuContainer: {
    position: 'absolute',
    left: 20,
    bottom: 10,
  },
  menuIcon: {
    width: 30,
    height: 30
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  seperatorText: {
    color: '#000000',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    fontSize: 20,
    fontWeight: '800'
  },
  button: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 24
  },
  button2: {
    color: '#F09B95',
    fontSize: 20,
    marginBottom: 24
  }
});
