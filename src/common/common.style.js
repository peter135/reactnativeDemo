import { StyleSheet } from 'react-native'

export const commonStyles = StyleSheet.create({
  // 最背景
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },

  // メインコンテナ
  main_area: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

});
