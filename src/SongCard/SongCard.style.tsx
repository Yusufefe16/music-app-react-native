import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    inner_container:{
        flex:1,
        padding:10,
        justifyContent: 'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:27,
    },
    info_container:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
    },
    year:{
        fontSize:12,
        marginLeft:10,
        color:'gray',
        fontWeight:'bold',
    },
    content_container:{
        flexDirection:'row',
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,
    },
    soldout_title:{
        color:'red',
    },
});
