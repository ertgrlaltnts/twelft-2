import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: Dimensions.get('screen').width - 30,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  topBlock: {
    backgroundColor: '#0F3460',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  topText: {
    color: '#fff',
    paddingHorizontal: 5,
    fontFamily: 'Quicksand-Bold',
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  midBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#BDC6D9',
    paddingVertical: 7,
    borderBottomLeftRadius: 5,
  },
  left: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  mid: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  right: {
    width: '40%',
  },
  edit: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  text: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
  },

  textRight: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    textAlign: 'right',
  },
  image: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  one: {
    width: '75%',
  },
  two: {
    width: '25%',
  },
  bottomBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#0F3460',
    width: '60%',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
});
