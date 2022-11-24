import React from "react";
import { View } from "react-native";
import { UserConsumer } from "./userContext";
export default function ComponentF(){
    return (
        <UserConsumer>
            {
                (username)=>{
                    return <View>Hello {username}</View>
                }
            }
        </UserConsumer>
    );
};