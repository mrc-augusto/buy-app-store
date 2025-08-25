import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 62,
    backgroundColor: '#d0d2d8'
  },
  logo:{
    width: 134,
    height: 34
  },
  form:{
    width: '100%',
    paddingHorizontal: 16,
    gap: 8,
    marginTop: 24
  },
  content:{
    flex: 1,
    width: '100%',
    marginTop: 24,
    padding: 24,
    paddingTop: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#fff'
  },
  contentHeader:{
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6'
  },
  clearButton:{
    marginLeft: 'auto'
  },
  clearText:{
    fontSize: 12,
    fontWeight: 600,
    color: '#828282'
  },
  separator:{
    width: '100%',
    height: 1,
    backgroundColor: '#eef0f5',
    marginVertical: 16
  },
  listContent:{
    paddingTop: 24,
    paddingBottom: 62
  },
  emptyListText:{
    fontSize: 14,
    color: '#828282',
    textAlign: 'center',
    marginTop: 32
  }
})