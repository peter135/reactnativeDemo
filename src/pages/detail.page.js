import * as React from 'react'
import { styles } from './detail.style'
import { commonStyles } from '../common/common.style'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DetailAction} from './detail.action'
import { View, Text, Image} from 'react-native'
import VideoPlayer from 'react-native-video-controls'

export  class DetailPage extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const {detailDto} = this.props;
    const detail = detailDto.detail;
    console.log('detailDto',detailDto);
    return (
      <View style={commonStyles.container}>
        <View style={commonStyles.main_area}>
          <View style={styles.detail_area}>
          <VideoPlayer 
                source={{uri: detail.video}}
                disableBack={true}
                resizeMode={'contain'}
                paused={false}
                bufferConfig={{
                  minBufferMs: 150000,
                  maxBufferMs: 500000,
                  bufferForPlaybackMs: 25000,
                  bufferForPlaybackAfterRebufferMs: 50000
                }}
              />
            <View style={styles.content_area}>
                <Image source={detail.image} style={styles.image_area} />
                <View style={styles.text_area}>
                    <Text>{detail.detail}</Text>
                    <Text>{detail.date}</Text>
                </View>
            </View>
          </View>
        </View>
      </View>   
    )
  }
}

function mapStateToProps(state) {
    return {
      detailDto: state.detailDto,
    }
}
  
export const DetailPageContainer = connect(mapStateToProps, (dispatch) => ({
  actions: bindActionCreators(DetailAction.actions, dispatch)
})
)(DetailPage)