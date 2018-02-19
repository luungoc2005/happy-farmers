import React from 'react'
import { 
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image
} from 'react-native'
import resolveAssetSource from 'resolveAssetSource'

export default class ImageButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      pressed: false, 
      source: null,
      height: 0,
      width: 0,
    }
    this.handleOnPressIn = this.handleOnPressIn.bind(this)
    this.handleOnPressOut = this.handleOnPressOut.bind(this)
  }

  componentWillMount() {
    this.resolveSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.source !== this.props.source) {
      this.resolveSource(nextProps)
    }
  }

  resolveSource(props) {
    if (props.source) {
      const source = resolveAssetSource(props.source)

      const { width, height } = source
      const ratio = props.ratio || 1

      this.setState({
        source,
        width: width * ratio,
        height: height * ratio,
      })
    }
  }

  handleOnPressIn() {
    this.setState({ pressed: true })
  }

  handleOnPressOut() {
    this.setState({ pressed: false })
  }

  onLayout() {

  }

  render() {
    const {
      pressed,
      source,
      width,
      height,
    } = this.state
    return (
      <View style={this.props.style}>
        <TouchableWithoutFeedback
          {...this.props}
          onPressIn={this.handleOnPressIn}
          onPressOut={this.handleOnPressOut}
        >
          {source && <View style={{
            width: width / 2,
            height
          }}>
            <Image
              style={{
                position: 'absolute',
                resizeMode: 'stretch',
                left: pressed? -width / 2 : 0,
                width,
                height,
              }}
              source={source}
            />
          </View>}
        </TouchableWithoutFeedback>
      </View>
    )
  }
}