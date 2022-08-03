import React, { useContext, useEffect, useState } from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity, Button} from "react-native";
import { CartContext } from "../CartContext";
import { getProduct } from "../services/ProductsService";
import ButtonAdd from "./ButtonAdd";
import ButtonForProduct from "./ButtonForProduct";

export function Product({name, price, image, onPress, id }){
    return(
        <TouchableOpacity style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>$ {price}</Text>
                <ButtonForProduct id={id}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1c1c1c1c',
        borderRadius: 16,
        margin: "2%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%'
    },
    image: {
        width: 250,
        height: 250,
        aspectRatio: 1
    },
    infoContainer: {
        padding: 16 
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    }
})