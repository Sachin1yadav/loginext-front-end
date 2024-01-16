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

  const handleAddClick = () => {
    // Assuming you want to include an "id" in the added user data
    const id = Math.floor(Math.random() * 1000) + 1;
    const userDataWithId = { ...formData, id };

    handleAddUser(userDataWithId);
    handleModalClose();
  };

  return (
    <form>
      <div className="flex flex-wrap justify-center items-center">
        <div className="inputdiv">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Uername"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Phone:</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Website:</label>
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleInputChange}
          />
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
            type="text"
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
        <div className="addbutton2">
      <Button
        variant="gradient" color="green"
        onClick={handleAddClick}
      >
        Add User
      </Button>
      </div>
      </div>
     
      
     
    </form>
  );
};

export default AddForm;
