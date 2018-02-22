import React from 'react'
import { 
  View, 
  Image, 
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native'
import {Link} from 'react-router-native'
import ImageButton from '../components/ImageButton'
import resolveAssetSource from 'resolveAssetSource'
import _range from 'lodash/range'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.gameCode = _range(0, 5)
      .map(() => {
        if (Math.random() > 0.5) { // number
          return Math.round(Math.random() * 9)
        }
        else {
          return String.fromCharCode(Math.round(Math.random() * 25 + 65))
        }
      })
      .join('')
    this.banner = resolveAssetSource(require('../assets/game-code/banner.png'))
  }

  render() {    
    const {height, width} = Dimensions.get('window')
    const ratio = width / 360
  
    return (
      <View style={{ flex: 1 }}>
        <Image 
          style={styles.background}
          source={require('../assets/game-code/background.png')}
        />
        <View style={styles.container}>
          <View style={styles.contentRow}>
            <View>
              <Image
                source={this.banner}
                style={{
                  width: this.banner.width * ratio,
                  height: this.banner.height * ratio,
                }}
              />
              <Text style={[styles.bannerText, {
                fontSize: 24 * ratio,
              }]}>{this.gameCode}</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <ImageButton
              ratio={ratio}
              source={require('../assets/game-code/Barn.png')}
            />
          </View>
          <View style={styles.contentRow}>
            <ImageButton
              ratio={ratio}
              source={require('../assets/game-code/Seed.png')}
            />
            <ImageButton
              ratio={ratio}
              source={require('../assets/game-code/Harvest.png')}
            />
          </View>
          <View style={styles.contentRow}>
            <Link 
              to='/game-code/make'
              component={ImageButton}
              ratio={ratio}
              source={require('../assets/game-code/Make.png')}>
            </Link>
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
  contentRow: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerText: {
    position: 'absolute',
    left: '60%',
    top: '5%',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
})