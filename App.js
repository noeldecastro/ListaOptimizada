import React, { useState } from "react";
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
          <Text style={styles.Fecha}>Fecha</Text>
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
          <Text style={styles.modalText}>Are you sure?</Text>
          <Text style={styles.modalMessage}>{itemSelected.value}</Text>

          <Button title="Okay" onPress={() => onHandleDelete(itemSelected)} />
        </View>
      </ModalDelete>
      <ModalAdd
              animationType="slide"
              visible={modalAddVisible}
              onRequestClose={() => null}
        >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Crear nueva tarea</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => setModalAddVisible(!modalAddVisible)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="add new task"
            value={task}
            onChangeText={onHandleInput}
          />
          <Button
            title="ADD"
            color="#8CBCB9"
            onPress={() => onHandleSubmit()}
            disabled={task.length === 0}
          />
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
    marginHorizontal: 20,
    color:"#ffffff"
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
  },
  modalMessage: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
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
});

