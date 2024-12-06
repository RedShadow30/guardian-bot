import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', //aligns items towards the top
    paddingTop: 30, //top padding
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10, //gap between logo and "Select University"
  },
  logo: {
    width: 260, //width of logo
    height: 260, //height of logo
    resizeMode: 'contain',
  },
  selectText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 20,
  },
  searchBox: {
    flex: 1,
    fontSize: 16,
  },
  arrowIconContainer: {
    padding: 5,
  },
  dropdown: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  universityItem: {
    padding: 10,
  },
  universityName: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#0078FF', 
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: 300,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
  },
});