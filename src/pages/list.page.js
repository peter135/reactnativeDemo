import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { styles } from './list.style'
import { commonStyles } from '../common/common.style'
import { ListAction} from './list.action'
import { DetailAction} from './detail.action'
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux'

let videolist = [{image:require('../assets/img/top_icon.png'),
                  detail:'测试详情，测试详情，测试详情，测试详情',
                  date:'2020/01/23'
                  },
                  {image:require('../assets/img/top_icon.png'),
                  detail:'测试详情，测试详情，测试详情，测试详情',
                  date:'2020/01/23'
                  },
                  {image:require('../assets/img/top_icon.png'),
                  detail:'测试详情，测试详情，测试详情，测试详情',
                  date:'2020/01/23'
                  },
                  {image:require('../assets/img/top_icon.png'),
                  detail:'测试详情，测试详情，测试详情，测试详情',
                  date:'2020/01/23'
                  },
                  {image:require('../assets/img/top_icon.png'),
                  detail:'测试详情，测试详情，测试详情，测试详情',
                  date:'2020/01/23'
                  },
                  {image:require('../assets/img/top_icon.png'),
                  detail:'测试详情，测试详情，测试详情，测试详情',
                  date:'2020/01/23'
                  },
                  {image:require('../assets/img/top_icon.png'),
                  detail:'测试详情，测试详情，测试详情，测试详情',
                  date:'2020/01/23'
                  }]

export class ListPage extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.setList(videolist);
  }

  pushDetail(message) {
    console.log('message',message);
    this.props.detailActions.setDetail(message);
    Actions.detail()
  }

  render() {
    const {listDto} = this.props;
    return (
      <View style={commonStyles.container}>
          <View style={commonStyles.main_area}>
            <ScrollView>
              {
                listDto.videoList && listDto.videoList.length>0 
                ?listDto.videoList.map((message, index) => {
                  return(
                    <TouchableOpacity onPress = {()=>this.pushDetail(message)}>
                      <View key={index} style={styles.content_area}>
                        <Image source={message.image} style={styles.image_area} />
                        <View key={index} style={styles.text_area}>
                            <Text>{message.detail}</Text>
                            <Text>{message.date}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ) 
                }): <View/>
              }
            </ScrollView>
          </View>
      </View>   
    )
  }
    
}

function mapStateToProps(state) {
    return {
      listDto: state.listDto
    }
}
  
export const ListPageContainer = connect(mapStateToProps, (dispatch) => ({
  actions: bindActionCreators(ListAction.actions, dispatch),
  detailActions:bindActionCreators(DetailAction.actions, dispatch)

})
)(ListPage)
