import { Header } from './Header/Header.tsx';
import { FormProduct } from './FormProduct/FormProduct.tsx';
import { useState } from 'react';
import { ListProduct } from './ListProduct/ListProduct.tsx';

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

export const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);

  const handleAddProduct = (newItem: ItemProduct) => {
    // Validación adicional antes de agregar
    if (!newItem.nombre.trim() || !newItem.imagen.trim() || newItem.precio <= 0) {
      console.error('Datos inválidos del producto:', newItem);
      return;
    }

    setProducts((prev) => [...prev, newItem]); // Agregar al estado
  };

  return (
    <div>
      <Header />
      <h2 className="text-center">Formulario</h2>
      <FormProduct handleAddProduct={handleAddProduct} />
      <h2 className="text-center">Productos</h2>
      {products.length > 0 ? (
        <ListProduct arrItems={products} />
      ) : (
        <h3 className="text-center">No hay productos</h3>
      )}
    </div>
  );
};
