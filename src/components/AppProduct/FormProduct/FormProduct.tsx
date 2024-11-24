import { Button, Form } from 'react-bootstrap';
import { useForm } from '../../../hooks/useFrom';
import { FC, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface IProposFormProduct {
  handleAddProduct: (product: { nombre: string; imagen: string; precio: number }) => void;
}

export const FormProduct: FC<IProposFormProduct> = ({ handleAddProduct }) => {
  const { handleChange, values, resetForm } = useForm({
    nombre: '',
    imagen: '',
    precio: 0,
  });

  const [isClicked, setIsClicked] = useState(false);
  const scale = useSpring({
    transform: isClicked ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 200, friction: 10 },
  });

  const handleSubmitForm = () => {
    // Validación de datos
    if (!values.nombre.trim() || !values.imagen.trim() || values.precio <= 0) {
      alert('Por favor, llena todos los campos correctamente.');
      return;
    }

    handleAddProduct(values); // Agregar producto
    resetForm(); // Limpiar formulario
    setIsClicked(true); // Animación del botón
    setTimeout(() => setIsClicked(false), 200); // Restablecer estado
  };

  return (
    <Form className="p-4 border rounded m-3">
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Ingrese el nombre del producto"
          value={values.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          name="imagen"
          placeholder="Ingrese la URL de la imagen"
          value={values.imagen}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          placeholder="Ingrese el precio del producto"
          value={values.precio}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="d-flex justify-content-center mt-4">
        <animated.div style={scale}>
          <Button onClick={handleSubmitForm} variant="primary">
            Enviar Producto
          </Button>
        </animated.div>
      </div>
    </Form>
  );
};
