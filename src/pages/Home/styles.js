import {
  StyleSheet
} from "react-native-web";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  form: {
    flexDirection: 'row'
  },
  input: {
    borderHidth: 1,
    borderColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
    color: 'gray'
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5
  },
  result: {
    marginTop: 10,
  }

})