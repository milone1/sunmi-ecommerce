import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { getProduct } from '../services/ProductsService'
import { CartContext } from '../CartContext'

const ButtonAdd = ({ id }) => {
    const [Product, setProduct] = useState({})

    useEffect(() => {
        setProduct(getProduct(id))
    })

    const {addItemToCart} = useContext(CartContext)

    function onAddToCart() {
        addItemToCart(id);
    }

  return (
    <>
    <Button style={styles.buttonAdd} title='Agregar' onPress={onAddToCart}/>
    </>
  )
}

export default ButtonAdd

const styles = StyleSheet.create({
    buttonAdd: {
        height: 50,
    }
})