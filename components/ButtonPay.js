import { View, Text, Button, Alert } from "react-native";
import React, { useState } from "react";
import SunmiPrinter from "@heasy/react-native-sunmi-printer";
import AwesomeAlert from "react-native-awesome-alerts";



const ButtonPay = ({ items, total }) => {
  const [open, setOpen] = useState(false);

  const handleChangeOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  const imprimir = () => {
    handleChangeOpen();
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
    SunmiPrinter.printerText(
      "ESTA ORDEN ES SOLO UNA PRESENTACION FUNCIONAL, NO UNA REAL TRANSACCION."
    );
    SunmiPrinter.printerText("\n");
    SunmiPrinter.printerText("-----------------");
    SunmiPrinter.printerText("\n");
    SunmiPrinter.cutPaper();
  };
  return (
    <>
      <Button onPress={() => imprimir()} title="pagar" />
      <AwesomeAlert
        show={open}
        showProgress={true}
        title="Compra realizada"
        message="La compra fue realizada con exito"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Salir"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          handleChangeOpen();
        }}
        onConfirmPressed={() => {
          handleChangeOpen();
        }}
      />
    </>
  );
};

export default ButtonPay;
