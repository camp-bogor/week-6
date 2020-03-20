import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import { db, auth } from './Config/Config';

class Message extends Component {

    state = {
        name: '',
        items: []
    }

    componentDidMount() {
        // db.ref("/user").push({
        //     name: "bebas"
        // })

        // const userRef = db.ref("/user");

        // userRef.set({
        //     4:{
        //         name: "data baru"
        //     }
        // })

        // db.ref("/user").push({
        //     name: "haha"
        // });

        // userRef.update({
        //     5:{
        //         name: "data 5"
        //     }
        // })

        // userRef.update({
        //     "4/name": "update 4 name",
        //     "5/name": "update 5 name"
        // })

        // userRef.child(4).remove()

        // userRef.on('value', this.showData, this.errorData);

        db.ref("/user").on('value', (snapshot) => {
            console.log(snapshot.key);
            // const data = snapshot.val();
            // console.log(data);
            // data.map(datas => console.log(datas));
            // const items = Object.values(data);
            // console.log(items);
            // this.setState({ items: [data] });
        })

        // const id = M2hx5IaPEyrQOeC2ltm;
        // db.ref("/user/-M2hwzC5ZCsPJM9kIOI1").update({
        //     name: "update"
        // })

        //register
        // auth.createUserWithEmailAndPassword("test@gmail.com", "testtest")
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));

        //login
        // auth.signInWithEmailAndPassword("test@gmail.com", "testtest")
        //     .then()
        //     .catch(err => console.log(err));

        //logout
        // auth
        //     .signOut()
        //     .then()
        //     .catch(err => console.log(err));
    }

    showData(items){
        console.log('showdata');
        items.forEach(item => console.log(item.val()));
        // console.log(items.val());
    }

    errorData(error){
        console.log(error);
    }

    renderRow = ({item}) => {
        return(
            <View style={{ margin: 10, flexDirection: 'row' }}>
                <Text style={{ padding: 10 }}>Name : {item.name}</Text>
            </View>
        )
    }

    handleSubmit() {
        db.ref("/user").push({
            name: this.state.name
        });

        this.setState({
            name: ''
        })

        Keyboard.dismiss();
    }

    handleLogout = () => {
    
        auth.signOut()
            .then(async response => {
              console.log('logout: ', response);         
            })
            .catch(error => {
              this.setState({
                errorMessage: error.message,
                email: '',
                password: '',
              });
              ToastAndroid.show(this.state.errorMessage, ToastAndroid.SHORT);
            })
      };
      
    render() {
        // const userRef = db.ref("/user");
        // userRef.orderByChild('name').on('value', this.showData, this.errorData);
        // auth.onAuthStateChanged(user => {
        //     if(user){
        //         console.log('user ada')
        //         console.log(user);
        //     }else{
        //         console.log('tidak ada')
        //     }
        // })

        // auth.currentUser.sendEmailVerification().then({}).catch(err => console.log(err));
        console.disableYellowBox = true;
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ marginLeft: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <TextInput
                        style={{ height: 80 }}
                        placeholder="Add User"
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name}
                    />
                    <TouchableOpacity style={{ backgroundColor: 'blue', width: 330, padding: 10, justifyContent: 'center', alignItems: 'center' }} onPress={this.handleSubmit.bind(this)}>
                        <Text style={{ color: 'white' }}>Save</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    data={this.state.items}
                    renderItem={this.renderRow}
                />
            </View>
        )
    }
}

export default Message;