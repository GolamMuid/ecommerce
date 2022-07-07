import React, { useState } from "react";

const AddProduct = () => {
  const [productId, setProductId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [categoryNameId, setCategoryNameId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [image, setImage] = useState(null);
  const [latestProduct, setLatestProduct] = useState("");
  const [productShow, setProductShow] = useState("");
  const [offer, setOffer] = useState("");
  const [specialDiscount, setSpecialDiscount] = useState("");
  const [productSlNo, setProductSlNo] = useState("");
  const [activeStatus, setActiveStatus] = useState("");
  const [orgId, setOrgId] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [updatedBy, setUpdatedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("categoryId", categoryId);
    formData.append("subCategoryId", subCategoryId);
    formData.append("categoryNameId", categoryNameId);
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("image", image);
    formData.append("latestProduct", latestProduct);
    formData.append("productShow", productShow);
    formData.append("offer", offer);
    formData.append("specialDiscount", specialDiscount);
    formData.append("productSlNo", productSlNo);
    formData.append("activeStatus", activeStatus);
    formData.append("orgId", orgId);
    formData.append("createdBy", createdBy);
    formData.append("updatedBy", updatedBy);

    fetch("http://localhost:4002/api/products/create", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        // if (data.insertedId) {
        //   console.log("product added successfully");
        // }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      style={{
        padding: "11px",
        display: "grid",
        gap: "11px",
      }}
    >
      <h1>add product</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "10px",
          width: "50%",
        }}
      >
        <input
          placeholder="
          productId"
          onChange={(e) => setProductId(e.target.value)}
        />

        <input
          placeholder="
          categoryId"
          onChange={(e) => setCategoryId(e.target.value)}
        />

        <input
          placeholder="
        subCategoryId"
          onChange={(e) => setSubCategoryId(e.target.value)}
        />

        <input
          placeholder="
        categoryNameId"
          onChange={(e) => setCategoryNameId(e.target.value)}
        />

        <input
          placeholder="
        productName"
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          placeholder="
        productDescription"
          onChange={(e) => setProductDescription(e.target.value)}
        />

        <input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <input
          placeholder="
        latestProduct"
          onChange={(e) => setLatestProduct(e.target.value)}
        />

        <input
          placeholder="
        productShow"
          onChange={(e) => setProductShow(e.target.value)}
        />
        <input
          placeholder="
          offer"
          onChange={(e) => setOffer(e.target.value)}
        />

        <input
          placeholder="
          specialDiscount"
          onChange={(e) => setSpecialDiscount(e.target.value)}
        />

        <input
          placeholder="
          productSlNo"
          onChange={(e) => setProductSlNo(e.target.value)}
        />

        <input
          placeholder="
          activeStatus"
          onChange={(e) => setActiveStatus(e.target.value)}
        />

        <input
          placeholder="
          orgId"
          onChange={(e) => setOrgId(e.target.value)}
        />

        <input
          placeholder="
          createdBy"
          onChange={(e) => setCreatedBy(e.target.value)}
        />

        <input
          placeholder="
          updatedBy"
          onChange={(e) => setUpdatedBy(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
