import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  detail_area: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  content_area: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:5
  },
  image_area: {
    height: 44,
    width: 44,
    marginRight:15,
    marginLeft:15
  },
  text_area: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginRight:15
  }

})
