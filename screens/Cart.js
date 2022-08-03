import React, { useEffect, useState, useContext } from "react";
import { View, Image, Text, Button, FlatList, StyleSheet } from "react-native";
import { CartContext } from "../CartContext";
import SunmiPrinter from "@heasy/react-native-sunmi-printer";
import ButtonPay from "../components/ButtonPay";

export function Cart({ navigation }) {
  const imprimir = () => {
    SunmiPrinter.printerInit();
    SunmiPrinter.printerText("-------");
    SunmiPrinter.printerInit();
    SunmiPrinter.printerText("-Acurio-");
    SunmiPrinter.printerInit();
    SunmiPrinter.printerText(
      "Acurio Restaurantes, la empresa fundada por el cocinero peruano Gastón Acurio, que cuenta con 10 marcas y 59 restaurantes en América,"
    );
    SunmiPrinter.printerInit();

    SunmiPrinter.printBarCode("1234567890", 8, 162, 2, 2);
    SunmiPrinter.printerInit();

    SunmiPrinter.printQRCode("1234567890", 4, 3);
    SunmiPrinter.printerInit();

    SunmiPrinter.printerText("Arroz con chaufa");
    SunmiPrinter.printerInit();

    SunmiPrinter.printerText("TOTAL:");
    SunmiPrinter.printerInit();

    SunmiPrinter.printerText("S/ 12.50");
    SunmiPrinter.lineWrap(1);
    SunmiPrinter.printerInit();

    SunmiPrinter.printerText("------------------------------");
    SunmiPrinter.printerInit();

    SunmiPrinter.cutPaper();
  };

  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <>
        <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.mainTotal}>$ {total}</Text>
        </View>
        <ButtonPay items={items} total={total}/>
      </>
    );
  }

  function renderItem({ item }) {
    return (
      <>
        <View style={styles.cartLine}>
          <Image style={styles.image} source={item.product.image} />
          <Text style={styles.lineLeft}>
            <Text>
            {item.product.name} {"  "}
            </Text>
            <Text>
              X {"  "}
            </Text>
            <Text>
            {item.qty} {"  "}
            </Text>
            <Text style={styles.productTotal}>${item.totalPrice}</Text>
          </Text>
        </View>
      </>
    );
  }

  return (
    <>
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
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
    width: "80%",
    paddingVertical: 10,
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
});
