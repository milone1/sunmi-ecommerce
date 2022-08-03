import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { getProducts } from "../services/ProductsService";
import { Product } from "../components/Product";
import ListSale from "../components/ListSale";

export function ProductsList({ navigation }) {
    const {height, width} = Dimensions.get('window');
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", { productId: product.id });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
    console.log("tamaño del width",width);
    console.log("tamaño del heigth",height);
  });

  return (
    <View style={styles.containerPadre}>
      <FlatList
        style={styles.productsList}
        numColumns={height < 600? 2:4}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
      <View style={styles.containerLista}>
        <ListSale />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productsList: {
    width: "80%",
    backgroundColor: "white",
    margin: 5,
    padding: 10,
  },
  productsListContainer: {
    backgroundColor: "white",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  containerLista: {
    width: "25%",
  },
  containerPadre: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
});
