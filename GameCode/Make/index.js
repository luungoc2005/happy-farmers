import React from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'
import Slider from 'react-native-slider'
import ImageButton from '../../components/ImageButton'
import resolveAssetSource from 'resolveAssetSource'

const TOTAL_ITEMS = 18

const ITEM_DESC = [
  require('../../assets/game-code/make/strawRecipe1.png'),
  require('../../assets/game-code/make/strawRecipe.png'),
  require('../../assets/game-code/make/strawRecipe2.png'),
]

export default class MakeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
    }
    this.banner = resolveAssetSource(require('../../assets/game-code/make/banner.png'))
    this.counterBg = resolveAssetSource(require('../../assets/game-code/make/recipeCounter.png'))
    this.sliderThumb = resolveAssetSource(require('../../assets/game-code/make/grabber.png'))
    this.loadItemDescriptions()
  }

  loadItemDescriptions() {
    this.itemDescriptions = ITEM_DESC
      .map(item => resolveAssetSource(item))
  }

  getItemDescription() {
    const desc = this.itemDescriptions[this.state.selected]
    return desc || this.itemDescriptions[0]
  }

  render() {
    const {height, width} = Dimensions.get('window')
    const ratio = width / 360
    const itemDesc = this.getItemDescription()

    return (
      <View style={{ flex: 1 }}>
        <Image 
          style={styles.background}
          // source={require('../assets/home/welcomeScreen.jpg')}
          source={require('../../assets/game-code/make/background.png')}
        />
        <View style={styles.container}>
          <View style={[styles.contentRow, styles.counter]}>
            <View>
              <Text style={[styles.counterText, {
                fontSize: 22 * ratio,
              }]}>{this.state.selected + 1}
                <Text style={{
                  fontSize: 18 * ratio,
                }}>/{TOTAL_ITEMS}
                </Text>
              </Text>
              <Image
                source={this.counterBg}
                style={{
                  width: this.counterBg.width * ratio,
                  height: this.counterBg.height * ratio,
                }}
              />
            </View>
          </View>
          <View style={styles.contentRow}>
            <View>
              <Image
                source={this.banner}
                style={{
                  width: this.banner.width * ratio,
                  height: this.banner.height * ratio,
                }}
              />
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.itemList}>
              <ImageButton
                ratio={ratio}
                source={require('../../assets/game-code/make/straw1_jam.png')}
                onPress={() => this.setState({selected: 0})}
              />
              <ImageButton
                ratio={ratio}
                source={require('../../assets/game-code/make/strw3_cake.png')}
                onPress={() => this.setState({selected: 1})}
              />
              <ImageButton
                ratio={ratio}
                source={require('../../assets/game-code/make/straw2_toast.png')}
                onPress={() => this.setState({selected: 2})}
              />
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={styles.itemList}>
              <ImageButton
                ratio={ratio}
                source={require('../../assets/game-code/make/asp1_roasted.png')}
                onPress={() => this.setState({selected: 3})}
              />
              <ImageButton
                ratio={ratio}
                source={require('../../assets/game-code/make/asp3_breakfast.png')}
                onPress={() => this.setState({selected: 4})}
              />
              <ImageButton
                ratio={ratio}
                source={require('../../assets/game-code/make/asp2_omlette.png')}
                onPress={() => this.setState({selected: 5})}
              />
            </View>
          </View>
          <View style={[styles.contentRow, {marginTop: '-15%'}]}>
            <Slider
              value={this.state.selected / TOTAL_ITEMS}
              style={styles.sliderContainer}
              minimumTrackTintColor='#e59492'
              maximumTrackTintColor='#e59492'
              // thumbImage={this.sliderThumb}
              thumbStyle={{
                borderRadius: 3,
                backgroundColor: '#fff4f3',
                width: this.sliderThumb.width * ratio,
                height: this.sliderThumb.height * ratio,
              }}
            />
          </View>
          <View style={[styles.contentRow, {flex: 2}]}>
            <Image
              source={itemDesc}
              style={{
                width: itemDesc.width * ratio,
                height: itemDesc.height * ratio,
              }}
            />
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
    marginVertical: '-5%',
  },
  counter: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginHorizontal: '7%',
  },
  counterText: {
    position: 'absolute',
    right: '75%',
    top: '2%',
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.7,
  },
  listRow: {
    marginVertical: '-8%',
  },
  itemList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '12%',
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: '12%',
  },
})

