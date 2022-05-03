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
} from "firebase/firestore";
import { CartContext } from "../../Context/cartContext";
import { useNavigate, Link } from "react-router-dom";
import Loader from "./LoaderCheckout";
import Swal from "sweetalert2";
import "./CartCheckout.css";

function CartCheckout() {
	const navigate = useNavigate();

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
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) });

	const { productsAdd, preciofinal, clear } = useContext(CartContext);
	const [idproducto, setIdproducto] = useState("");
	const [Ordersucces, setOrdersucces] = useState(false);
	const [loading, setLoading] = useState();

	const submitForm = (values) => {
		if (productsAdd.length === 0) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Al parecer el carrito esta vacio",
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
				addDoc(ordersCollection, order).then(({ id }) => {
					setIdproducto(id);
					setLoading(false);
					setOrdersucces(true);
				});
			} catch (error) {
				console.log(error);
			}
			reset();
			clear();
		}
	};
	if (loading) {
		return <Loader />;
	}

	return (
		<Container>
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
							Tu codigo de pedido es: {idproducto}, este codigo te servira para
							identificar el pedido, reclamar, etc.
						</p>
					</Alert>

					<Link to={"/"}>
						<Button
							className="detail-button"
							size="lg"
							variant="outline-primary">
							Volver al inicio
						</Button>
					</Link>
				</>
			) : (
				<>
					<Row className="text-center mb-5 ">
						<h2>¡Completa el formulario para realizar el pedido!</h2>
					</Row>
					<form onSubmit={handleSubmit(submitForm)}>
						<Card className="shadow mb-5 bg-white rounded">
							<Card.Header className="text-uppercase text-center font-weight-bold">
								Datos requeridos del comprador
							</Card.Header>
							<Card.Body>
								<Form.Group>
									<Row className="mb-4 justify-content-around">
										<Col sm={12} md={4}>
											<Form.Label className="text-uppercase">Nombre</Form.Label>
											<Form.Control
												name="name"
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
												{...register("surname")}
												isInvalid={!!errors.surname}
												autoComplete="off"
											/>
											<Form.Control.Feedback type="invalid">
												{errors.surname?.message}
											</Form.Control.Feedback>
										</Col>
									</Row>
									<Row className="mb-4 justify-content-around">
										<Col sm={12} md={4}>
											<Form.Label className="text-uppercase">
												Telefono
											</Form.Label>
											<Form.Control
												name="phone"
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
												{...register("email")}
												isInvalid={!!errors.email}
												autoComplete="off"
											/>
											<Form.Control.Feedback type="invalid">
												{errors.email?.message}
											</Form.Control.Feedback>
										</Col>
									</Row>
								</Form.Group>
							</Card.Body>
						</Card>
						<Col className="text-center">
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
