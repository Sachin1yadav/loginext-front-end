import React, { useState } from "react";

const AddForm = ({ handleAddUser, handleModalClose }) => {
  const initialFormData = {
    username: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    IsLink: false,
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    companyName: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    handleAddUser(formData);
    handleModalClose();
  };

  return (
    <form>
      <div className="flex flex-wrap justify-start items-center">
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
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Suite:</label>
          <input
            type="text"
            name="suite"
            placeholder="Suite"
            value={formData.suite}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Zipcode:</label>
          <input
            type="text"
            name="zipcode"
            placeholder="Zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button
        type="button"
        className="border-2 border-black py-[10px]"
        onClick={handleAddClick}
      >
        Add User
      </button>
    </form>
  );
};

export default AddForm;
