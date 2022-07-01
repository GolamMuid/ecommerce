import React, { useState } from "react";
import ProductModal from "../../ProductModal/ProductModal";
import { DashbordPartContainer, Text } from "./DashbordPart.style";

const DashbordPart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <DashbordPartContainer>
      <div>
        <span
          style={{
            display: "flex",
            margin: "5rem",
            cursor: "pointer",
            marginTop: "10rem",
            marginLeft: "20rem",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          click here
        </span>
        <ProductModal show={isOpen} handleClose={hideModal}>
          this is modal
        </ProductModal>
      </div>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est illo
        veniam velit laudantium ullam perferendis quod sapiente quo dolorum
        quisquam unde nobis tempora, eaque mollitia doloribus! Quod iste
        voluptatum voluptatem!Lorem Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Est illo veniam velit laudantium ullam perferendis
        quod sapiente quo dolorum quisquam unde nobis tempora, eaque mollitia
        doloribus! Quod iste voluptatum voluptatem!Lorem Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Est illo veniam velit laudantium
        ullam perferendis quod sapiente quo dolorum quisquam unde nobis tempora,
        eaque mollitia doloribus! Quod iste voluptatum voluptatem!Lorem Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Est illo veniam
        velit laudantium ullam perferendis quod sapiente quo dolorum quisquam
        unde nobis tempora, eaque mollitia doloribus! Quod iste voluptatum
        voluptatem!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Est illo veniam velit laudantium ullam perferendis quod sapiente
        quo dolorum quisquam unde nobis tempora, eaque mollitia doloribus! Quod
        iste voluptatum voluptatem!Lorem Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Est illo veniam velit laudantium ullam perferendis
        quod sapiente quo dolorum quisquam unde nobis tempora, eaque mollitia
        doloribus! Quod iste voluptatum voluptatem!Lorem Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Est illo veniam velit laudantium
        ullam perferendis quod sapiente quo dolorum quisquam unde nobis tempora,
        eaque mollitia doloribus! Quod iste voluptatum voluptatem!Lorem Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Est illo veniam
        velit laudantium ullam perferendis quod sapiente quo dolorum quisquam
        unde nobis tempora, eaque mollitia doloribus! Quod iste voluptatum
        voluptatem!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Est illo veniam velit laudantium ullam perferendis quod sapiente
        quo dolorum quisquam unde nobis tempora, eaque mollitia doloribus! Quod
        iste voluptatum voluptatem!Lorem Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Est illo veniam velit laudantium ullam perferendis
        quod sapiente quo dolorum quisquam unde nobis tempora, eaque mollitia
        doloribus! Quod iste voluptatum voluptatem!Lorem Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Est illo veniam velit laudantium
        ullam perferendis quod sapiente quo dolorum quisquam unde nobis tempora,
        eaque mollitia doloribus! Quod iste voluptatum voluptatem!Lorem Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Est illo veniam
        velit laudantium ullam perferendis quod sapiente quo dolorum quisquam
        unde nobis tempora, eaque mollitia doloribus! Quod iste voluptatum
        voluptatem!Lorem
      </Text>
    </DashbordPartContainer>
  );
};

export default DashbordPart;
