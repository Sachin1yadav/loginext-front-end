import React from "react";

const EditForm = ({ user, handleInputChange }) => {
  return (
    <form>
      <div className=" flex flex-wrap justify-start items-center ">
        <div className="inputdiv">
          {" "}
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user?.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="inputdiv">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={user?.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={user?.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={user?.website}
            onChange={handleInputChange}
          />
        </div>

        <div className="inputdiv">
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={user?.address?.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Suite:</label>
          <input
            type="text"
            name="suite"
            value={user?.address?.suite}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={user?.address?.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Zipcode:</label>
          <input
            type="text"
            name="zipcode"
            value={user?.address?.zipcode}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputdiv">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={user?.company?.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </form>
  );
};

export default EditForm;
