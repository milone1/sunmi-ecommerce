import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import ButtonPay from "./ButtonPay";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const ListSale = () => {
  const { items, getItemsCount, getTotalPrice, deleteElement } =
    useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.layout}>
        <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.mainTotal}>$ {total}</Text>
        </View>
        <ButtonPay items={items} total={total} />
      </View>
    );
  }

  function renderItem({ item }) {
    return (
      <>
        <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>
            <Text>{item.qty}</Text>
            <Text>X</Text>
            <Text>
              {item.product.name}
              {"\n"}
            </Text>
            <Text style={styles.productTotal}>S/{item.totalPrice}</Text>
          </Text>
          <View>
            <Button
              style={styles.buttonDelete}
              onPress={() => {
                deleteElement(item.id);
              }}
              color="red"
              type="clear"
              icon={<Icon name="trash" size={20} color="red" />}
            />
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <Text style={styles.comanda}>COMANDA</Text>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      />
    </>
  );
};

export default ListSale;

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
    width: "80%",
    paddingVertical: 10,
    textAlign: 'center',
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  productTotal: {
    fontWeight: "bold",
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  buttonDelete: {
    textAlign: "right",
  },
  comanda: {
    fontSize: 25,
    textAlign: "center",
  },
  layout: {
    display: 'flex',
  }
});
