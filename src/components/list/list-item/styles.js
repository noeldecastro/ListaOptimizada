import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      container:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#ffffff",
        borderRadius:20,
        justifyContent: "flex-start",
        marginVertical: 8,
        shadowColor: "#000",
        marginHorizontal:5,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
      },
      containerItem: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width:260,
        flexWrap: "wrap",
      },
      item: {
        fontSize: 20,
        color: "#212121",
        marginLeft:20,
        marginTop: 20,
        marginBottom:20,
        fontWeight: "bold",
      },
      deleteButton: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius:7,
      },
      deleteButtonText: {
        color: "#000000",
        fontSize: 14,
        fontWeight: "bold",
      },
      containerCheck:{
        borderColor:'#AAAAAA',
        borderWidth:1,
        backgroundColor: "#ffffff",
        width:20,
        height:20,
        marginLeft:15,
        borderRadius: 5,
      },
})

