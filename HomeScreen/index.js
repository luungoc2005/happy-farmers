import React from 'react'
import { 
  View, 
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native'
import {Link} from 'react-router-native'
import ImageButton from '../components/ImageButton'
import resolveAssetSource from 'resolveAssetSource'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.title = resolveAssetSource(require('../assets/home/Title.png'))
  }

  render() {
    const {height, width} = Dimensions.get('window')
    const ratio = width / 766

    return (
      <View style={{ flex: 1 }}>
        <Image 
          style={styles.background}
          // source={require('../assets/home/welcomeScreen.jpg')}
          source={require('../assets/home/background.png')}
        />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Image
              source={this.title}
              style={{
                width: this.title.width * ratio,
                height: this.title.height * ratio,
                marginLeft: '7%',
                marginTop: '7%',
              }}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.sideNav}>
              <ImageButton
                ratio={ratio}
                style={{
                  marginLeft: '5%',
                }}
                source={require('../assets/home/Apprentice.png')}
              />
              <ImageButton
                ratio={ratio}
                style={{
                  marginLeft: '70%',
                }}
                source={require('../assets/home/Experienced.png')}
              />
            </View>
            <View style={styles.mainNav}>
              <ImageButton
                ratio={ratio}
                source={require('../assets/home/StartNew.png')} 
              />
              <Link 
                to='/game-code'
                component={ImageButton}
                style={{
                  marginTop: '5%',
                }}
                ratio={ratio}
                source={require('../assets/home/EnterGameCode.png')}>
              </Link>
              <ImageButton
                style={{
                  marginTop: '5%',
                }}
                ratio={ratio}
                source={require('../assets/home/Settings.png')} 
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  sideNav: {
    flex: 1,
    padding: '3%',
    marginTop: '27%',
  },
  mainNav: {
    flex: 2,
    paddingLeft: 30,
  }
})