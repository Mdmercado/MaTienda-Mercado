import React from "react";
import { Button, Spinner } from "react-bootstrap";
function Loader() {
	return (
		<div
			className="d-flex justify-content-center align-items-center flex-column mt-5"
			style={{ minHeight: "60vh" }}>
			<Button variant="primary" disabled>
				<Spinner
					as="span"
					animation="grow"
					size="sm"
					role="status"
					aria-hidden="true"
					className="mr-2"
				/>
				PROCESANDO
			</Button>
		</div>
	);
}

export default Loader;
