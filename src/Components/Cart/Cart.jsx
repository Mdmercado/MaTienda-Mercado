import React, { useContext, useEffect } from "react";
import { Table, Col, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/cartContext";
import "./../Cart/Cart.css";

function Cart() {
	const {
		productsAdd,
		showTotal,
		ItemsTotales,
		preciofinal,
		removeItem,
		clear,
	} = useContext(CartContext);

	useEffect(() => {
		showTotal();
	}, [productsAdd, showTotal]);

	const navigate = useNavigate();

	return (
		<div className="container">
			<Row className="justify-content-center mb-4">
				<Col md={6}>
					<h1 className="text-center">Resumen Carrito</h1>
				</Col>
			</Row>
			{productsAdd.length > 0 ? (
				<>
					<Col md={8} sm={12} className="containerTable">
						<Table responsive="sm">
							<thead className="bg-light">
								<tr>
									<th className="text-center">#</th>
									<th className="text-center">img</th>
									<th className="text-center">Producto</th>
									<th className="text-center">Precio/U</th>
									<th className="text-center">Cantidad</th>
									<th className="text-center">Remover</th>
								</tr>
							</thead>
							<tbody>
								{productsAdd?.length > 0 &&
									productsAdd.map((item, index) => (
										<tr key={index + 1}>
											<td>{index + 1}</td>
											<td>
												<div className="img-table">
													<img src={item.item.imagen} alt="img-product" />
												</div>
											</td>
											<td className="text-center">{item.item.nombre}</td>
											<td className="text-center">${item.item.precio}</td>
											<td className="text-center">{item.cantidad}</td>
											<td className="text-center">
												<Button
													variant="primary-outline"
													onClick={() => {
														removeItem(item.item.id);
													}}>
													❌
												</Button>
											</td>
										</tr>
									))}
							</tbody>
						</Table>
					</Col>
					<Row className="justify-content-center mt-5 mb-4">
						<Col md={6}>
							<h2 className="text-center">Total del carrito</h2>
						</Col>
					</Row>
					<Col md={8} sm={12} className="containerTable">
						<Table size="sm">
							<tbody>
								<tr>
									<th>Productos</th>
									<td className="text-center">
										<strong>{ItemsTotales}</strong>
									</td>
								</tr>
								<tr>
									<th>Precio Final</th>
									<td className="text-center">
										<strong>${preciofinal}</strong>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Row className="justify-content-center">
						<Col md={6} className="text-center">
							<Button
								onClick={() => {
									Swal.fire({
										position: "top-end",
										icon: "success",
										title: "Su orden ha sigo registrada",
										showConfirmButton: true,
										confirmButtonText: "De acuerdo",
										timer: 5000,
									}).then((result) => {
										clear();
										if (result.isConfirmed) {
											navigate("/");
										}
									});
								}}>
								Finalizar
							</Button>
						</Col>
					</Row>
				</>
			) : (
				<>
					<Row className="justify-content-center mt-5 mb-4 bg-light">
						<Col md={6}>
							<h3 className="text-center ">El Carrito se encuentra vacío...</h3>
							<Row className="justify-content-center mt-5">
								<Col md={6}>
									<Link to={"/"} className="link-catalog">
										<p>🔖 Ir al Catalogo</p>
									</Link>
								</Col>
							</Row>
						</Col>
					</Row>
				</>
			)}
		</div>
	);
}

export default Cart;
