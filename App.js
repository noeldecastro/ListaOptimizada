import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { themes } from "./src/constants/themes/index";
import { List, ModalDelete, ModalAdd } from "./src/components/index";


export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [currentDate, setCurrentDate] = useState('');
 
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
      date + '/' + month + '/' + year 
    );
  }, []);

  const onHandleInput = (text) => {
    setTask(text);
  };

  const onHandleSubmit = () => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random(), value: task },
    ]);
    setTask("");
  };

  const onHandleDelete = (itemSelected) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const handleModal = (id) => {
    setItemSelected(tasks.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };

  const addTask=()=>{
    setModalAddVisible(!modalAddVisible);
  };


  return (
    <View style={themes.container}>
      <View style={styles.header}>
        <View style={styles.containerTitulo}>
          <Text style={styles.Fecha}>{currentDate}</Text>
          <Text style={styles.titulo}>Tasks</Text>
        </View>
        <View style={styles.containerUsuario}>
          <TouchableOpacity style={styles.Usuario}>
              <Text>M</Text>
          </TouchableOpacity>
        </View>
      </View>
      <List 
        tasks={tasks}
        onPressItem={handleModal}
      />
      <TouchableOpacity
          style={styles.addTaskButton}
          onPress={() => addTask()}>
        <Text style={styles.addTaskText}>+ Agregar tarea</Text>
      </TouchableOpacity>
      <ModalDelete
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Delete Item</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalText}>¿Desea eliminar esta tarea?</Text>
          <View style={styles.containerItem}>
            <Text style={styles.modalMessage}>{itemSelected.value}</Text>
          </View>
          <TouchableOpacity
          onPress={() => onHandleDelete(itemSelected)}
          style={styles.CreateButton}>
              <Text style={styles.CreateButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </ModalDelete>
      <ModalAdd
              animationType="slide"
              visible={modalAddVisible}
              onRequestClose={() => null}
        >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Crear tarea</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => setModalAddVisible(!modalAddVisible)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#ffffff"
            placeholder="Escriba aca"
            value={task}
            onChangeText={onHandleInput}
          />
          <TouchableOpacity
          onPress={() => onHandleSubmit()}
          disabled={task.length === 0}
          style={styles.CreateButton}>
              <Text style={styles.CreateButtonText}>+ Crear tarea</Text>
          </TouchableOpacity>
        </View>
      </ModalAdd>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    alignItems: "center",
    borderRadius:20,
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal:5,
  },
  containerTitulo:{
    marginTop:60,
    marginLeft:40,
    justifyContent: "flex-start",
  },
  containerUsuario:{

    marginTop:60,
    marginRight:25,

  },
  Usuario:{
    backgroundColor:"#8CBCB9",
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  Fecha:{
    color: "#BDBDBD"
  },
  titulo:{
    fontSize: 20,
  },
  containerTask: {
    marginTop: 40,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#8CBCB9",
    borderBottomWidth: 1,
    marginBottom: 10,
    marginLeft:30,
    width: "80%",
    height: 40,
    fontSize: 14,
    color: "#ffffff",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop:200,
    backgroundColor: "#28447E",
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft:80,
    color:"#ffffff",
    alignSelf: "center",
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
    color:"#ffffff",
    alignSelf: "center",
  },
  modalMessage: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#000000",
  },

  containerItem:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius:20,
    marginHorizontal:40,
    justifyContent: "center",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },

  addTaskButton:{
    marginVertical:60,
    backgroundColor:"#28447E",
    borderRadius:15,
    shadowColor: "#000",
    width:180,
    alignItems:"center",
    marginHorizontal:120,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
  },
  addTaskText:{
    color:"#ffffff",
    margin: 15,
  },
  containerAddModal:{
    backgroundColor: '#AAAAAA',
  },
  deleteButtonText:{
    color:"#ffffff",
  },
  CreateButton:{
    marginVertical:50,
    backgroundColor:"#ffffff",
    borderRadius:15,
    shadowColor: "#000",
    width:180,
    alignItems:"center",
    marginHorizontal:120,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
  },
  CreateButtonText:{
    color:"#28447E",
    margin: 15,
  },
});

