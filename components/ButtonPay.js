import { View, Text, Button } from "react-native";
import React from "react";
import SunmiPrinter from "@heasy/react-native-sunmi-printer";

const ButtonPay = ({ items, total }) => {
  const imprimir = () => {
    SunmiPrinter.printerInit();
    SunmiPrinter.printerText("-----------------\n");
    SunmiPrinter.printerText("ACURIO'S RESTAURANT");
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printBarCode("1234567890", 8, 162, 2, 2);
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printerText("numero: 11660051");
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printerText("-----------------");
    SunmiPrinter.printerText("\n");
    {
      items.map(
        (item) => (
          SunmiPrinter.printerText("\n"),
          SunmiPrinter.printerText("Plato:     "),
          SunmiPrinter.printerText(item.product.name.toString()),
          SunmiPrinter.printerText("\n"),
          SunmiPrinter.printerText("Cantidad:  "),
          SunmiPrinter.printerText(item.qty.toString()),
          SunmiPrinter.printerText("\n"),
          SunmiPrinter.printerText("Precio unitario: S/ "),
          SunmiPrinter.printerText(item.product.price.toString())
        )
      );
    }
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printerText("-----------------");
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printerText("TOTAL A PAGAR: S/");
    SunmiPrinter.printerText(total.toString());
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printerText("-----------------");
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printerText("ESTA ORDEN ES SOLO UNA PRESENTACION FUNCIONAL, NO UNA REAL TRANSACCION.");
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printerText("-----------------");
    SunmiPrinter.printerText("\n");
    SunmiPrinter.cutPaper();
  };
  return <Button onPress={() => imprimir()} title="pagar" />;
};

export default ButtonPay;
