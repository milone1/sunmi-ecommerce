import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { CartContext } from "../CartContext";

const ButtonForProduct = ({ id }) => {
    const {addItemToCart, items, deleteElement } = useContext(CartContext);
    const findProduct = items.find((item) => item.id === id);
  return (
    <>
      {findProduct ? (
        <Button 
        onPress={() => deleteElement(id)}
        type="clear" 
        />
      ) : (
        <Button 
        onPress={() => addItemToCart(id)}
        type="clear" 
        title=" Add"
        icon={<Icon name="plus" size={20} color="blue" />}
        />
      )}
    </>
  );
};

export default ButtonForProduct;
