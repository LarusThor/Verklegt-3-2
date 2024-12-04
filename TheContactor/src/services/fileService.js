import *  as FileSystem from 'expo-file-system';
const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const createContact = async () => {

    const dirInfo = await FileSystem.getInfoAsync(contactDirectory);
    
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory, { intermediates: true });
      }

    const content = JSON.stringify({
          'contact': { 
              "id": 1,
              "name": "Sakkarius",
              "phoneNumber": "5812345",
              "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xybVC1Cf4yUOeDyPgvss2LCXW0z2xeDSOQ&s"
            }
        });
    const filePath = `${contactDirectory}/emptyfile.json`

    await FileSystem.writeAsStringAsync(filePath, content)
    console.log(`Empty JSON file created at: ${filePath}`);

}

await createContact();

    const filePath = `${contactDirectory}/emptyfile.json`
    console.log('meow')
    const fileContents = await FileSystem.readAsStringAsync(filePath);
    console.log("File Contents:", fileContents);

console.log(contactDirectory.readDirectoryAsync())