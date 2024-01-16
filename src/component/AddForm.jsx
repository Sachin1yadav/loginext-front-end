import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const AddForm = ({ handleAddUser, handleModalClose }) => {
  const initialFormData = {
    username: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    IsLink: false,
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the property is a nested one (e.g., "address.street" or "company.name")
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      // If the property is not nested
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.website.trim()) {
      errors.website = "website is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleAddClick = () => {
    if (validateForm()) {
      // Form is valid, proceed with adding the user
      const id = Math.floor(Math.random() * 1000) + 1;
      const userDataWithId = { ...formData, id };

      handleAddUser(userDataWithId);
      handleModalClose();
      setFormData(initialFormData);
    }
  };

  return (
    <form>
      <div className="flex flex-wrap justify-center items-center">
        <div className="inputdiv">
          <label>Username<span className="required">*</span></label>
          <input
            type="text"
            name="username"
            placeholder="Uername"
            value={formData.username}
            onChange={handleInputChange}
            required={true}
          />
          {formErrors.username && (
            <span className="error">{formErrors.username}</span>
          )}
        </div>
        <div className="inputdiv">
          <label>Name<span className="required">*</span></label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required={true}
          />
           {formErrors.name && (
            <span className="error">{formErrors.name}</span>
          )}
        </div>
        <div className="inputdiv">
          <label>Email<span className="required">*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required={true}
          />
           {formErrors.email  && (
            <span className="error">{formErrors.email }</span>
          )}
        </div>
        <div className="inputdiv">
          <label>Phone</label>
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Website<span className="required">*</span></label>
          <input
            type="url"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleInputChange}
          />
           {formErrors.website && (
            <span className="error">{formErrors.website}</span>
          )}
        </div>
        <div className="inputdiv">
          <label>Street:</label>
          <input
            type="text"
            name="address.street"
            placeholder="Street"
            value={formData.address.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Suite:</label>
          <input
            type="text"
            name="address.suite"
            placeholder="Suite"
            value={formData.address.suite}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>City:</label>
          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Zipcode:</label>
          <input
            type="number"
            name="address.zipcode"
            placeholder="Zipcode"
            value={formData.address.zipcode}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Company Name:</label>
          <input
            type="text"
            name="company.name"
            placeholder="Company Name"
            value={formData.company.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="addbutton2">
        <Button variant="gradient" color="green" onClick={handleAddClick}>
          Add User
        </Button>
      </div>
    </form>
  );
};

export default AddForm;
