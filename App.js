import React from 'react';
import {View, StyleSheet,Image,Text,ScrollView} from
'react-native';
const App = () =>{
return(
<>
<View >

  
<View style={{flexDirection:'row'}} >
<Image
style={styles.banner}
source={require('./src/img/bg.jpg')} />
</View>
</View>
</>
);
};
const styles = StyleSheet.create({
banner:{
height:250,
flex:1
}
});
export default App;