import React, { useContext, useState } from "react";
import {
  Card,
  Container,
  Form,
  Col,
  Row,
  Button,
  Alert,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";
import Loader from "./LoaderCheckout";
import Swal from "sweetalert2";
import "./CartCheckout.css";

function CartCheckout() {
  // validacion
  const schema = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio"),
    surname: yup.string().required("Este campo es obligatorio"),
    phone: yup
      .number()
      .required("Este campo es obligatorio")
      .typeError("Ingrese un N° de Teléfono"),
    email: yup
      .string()
      .email("Debe Ingresar un Email válido")
      .required("Este campo es obligatorio"),
    confirmEmail: yup
      .string()
      .email("Debe Ingresar un Email válido")
      .required("Este campo es obligatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const { productsAdd, preciofinal, clear, setShowcart } =
    useContext(CartContext);
  const [idPedido, setIdPedido] = useState("");
  const [Ordersucces, setOrdersucces] = useState(false);
  const [loading, setLoading] = useState();

  const UpdateStock = (id, cantidad) => {
    const db = getFirestore();
    const order = doc(db, "productos", `${id}`);
    getDoc(order).then((product) => {
      updateDoc(order, { stock: product.data().stock - cantidad });
      // update Stock
    });
  };

  const submitForm = (values) => {
    if (values.email !== values.confirmEmail) {
      Swal.fire({
        icon: "error",
        title: "FALLÓ CONFIRMACIÓN",
        text: "Al parecer el email y su confimacion son desiguales, ¡revísalo!",
        showConfirmButton: true,
      });
    } else {
      if (productsAdd.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Al parecer el carrito esta vacio",
          showConfirmButton: false,
          footer:
            '<a style="color:blue !important;" href="/">Volver al inicio</a>',
        });
      } else {
        let fecha = serverTimestamp();
        const { name, surname, phone, email } = values;
        const order = {
          buyer: { name: name, surname: surname, phone: phone, email: email },
          items: productsAdd,
          total: preciofinal,
          date: fecha,
        };
        try {
          setLoading(true);
          const db = getFirestore();
          const ordersCollection = collection(db, "pedidos");
          addDoc(ordersCollection, order)
            .then(({ id }) => {
              setIdPedido(id);
            })
            .then(
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pedido Encargado",
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 3000,
              }).then(() => {
                // eslint-disable-next-line array-callback-return
                productsAdd.map((item) => {
                  UpdateStock(item.item.id, item.cantidad);
                });
                setLoading(false);
                setOrdersucces(true);
              })
            );
        } catch (error) {
          console.log(error);
        }
        reset();
        setShowcart(false);
      }
    }
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Container className="checkout-container">
      {Ordersucces ? (
        <>
          <Alert variant="success">
            <Alert.Heading className="text-uppercase">
              ¡Tu pedido fue Enviado Exitosamente!
            </Alert.Heading>
            <p>
              {
                "Con los datos que nos has enviado nos pondremos en comunicacion contigo a la brevedad para cordinar la venta, gracias por comprar en MaTienda :)"
              }
            </p>
            <hr />
            <p className="mb-0 ">
              Tu codigo de pedido es: {idPedido}, este código te servirá para
              identificar el pedido, reclamar, etc.
            </p>
          </Alert>
          <div className="sumary">
            <h4>Resumen de compra</h4>
            {productsAdd &&
              productsAdd.map((item) => (
                <p key={item.item.id}>
                  {item.item.name} {`(${item.cantidad})`}
                </p>
              ))}
            <p>Precio Final: {preciofinal}</p>
          </div>
          <Link to={"/"}>
            <Button
              className="detail-button"
              size="lg"
              variant="outline-primary"
              onClick={() => {
                clear();
              }}
            >
              Volver al inicio
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Row className="text-center mt-5 ">
            <h2>¡Completa el formulario para realizar el pedido!</h2>
          </Row>
          <form onSubmit={handleSubmit(submitForm)}>
            <Card className="shadow bg-white rounded cartCheck">
              <Card.Header className="text-uppercase text-center font-weight-bold">
                Datos requeridos del comprador
              </Card.Header>
              <Card.Body>
                <Form.Group>
                  <Row className="mb-2 justify-content-around">
                    <Col sm={12} md={4}>
                      <Form.Label className="text-uppercase">Nombre</Form.Label>
                      <Form.Control
                        name="name"
                        placeholder="Ingresa tu nombre"
                        {...register("name")}
                        isInvalid={!!errors.name}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name?.message}
                      </Form.Control.Feedback>
                    </Col>
                    <Col sm={12} md={4}>
                      <Form.Label className="text-uppercase">
                        Apellido
                      </Form.Label>
                      <Form.Control
                        name="surname"
                        placeholder="Ingresa tu apellido"
                        {...register("surname")}
                        isInvalid={!!errors.surname}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.surname?.message}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row className="mb-2 justify-content-around">
                    <Col sm={12} md={4}>
                      <Form.Label className="text-uppercase">
                        Telefono
                      </Form.Label>
                      <Form.Control
                        name="phone"
                        placeholder="Ingresa tu teléfono"
                        {...register("phone")}
                        isInvalid={!!errors.phone}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone?.message}
                      </Form.Control.Feedback>
                    </Col>
                    <Col sm={12} md={4}>
                      <Form.Label className="text-uppercase">Mail</Form.Label>
                      <Form.Control
                        name="email"
                        placeholder="Ingresa tu e-mail"
                        {...register("email")}
                        isInvalid={!!errors.email}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row className="mb-2 justify-content-around">
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={4}>
                      <Form.Label className="text-uppercase">
                        Confirmar Mail
                      </Form.Label>
                      <Form.Control
                        name="confirmEmail"
                        placeholder="Confirma tu email"
                        {...register("confirmEmail")}
                        isInvalid={!!errors.confirmEmail}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmEmail?.message}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
            <Col className="text-center mt-5">
              <Button variant="outline-primary" type="submit" size="lg">
                Realizar pedido
              </Button>
            </Col>
          </form>
        </>
      )}
    </Container>
  );
}

export default CartCheckout;
