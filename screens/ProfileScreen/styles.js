import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EAF0F4', // Soft blue background for a calm vibe
    marginTop: 40,
  },
  sectionContainer: {
    marginBottom: 25,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff', // White background for sections
    borderRadius: 15,
    elevation: 5, // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  profileItem: {
    fontSize: 18,
    fontFamily: 'Arial',
    color: '#333', // Dark gray for text
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
    fontWeight: '500',
  },
  emergencyContactsTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  contactsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  contactItemContainer: {
    width: '90%',
    alignItems: 'flex-start',
    flexDirection: 'row', // Align icon and text in a row
    marginVertical: 8,
    paddingHorizontal: 15,
  },
  emergencyContactItem: {
    color: '#333',
    fontSize: 18,
    fontFamily: 'Arial',
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 5,
  },
  profileFieldContainer: {
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E0E0E0',
    marginBottom: 15,
  },
  errorText: {
    fontSize: 20,
    color: '#FF5722',
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 20,
    color: '#1E88E5',
    textAlign: 'center',
  },
});
