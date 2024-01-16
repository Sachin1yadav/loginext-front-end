import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCord from "./UserCord";
import { getUsers, addUser } from "../redux/UserProfile/Userprofile.action";
import { IoIosAdd } from "react-icons/io";
import AddForm from "./AddForm";
import { MyModal } from "./MyModal";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import Laoding from "./Loading";

const Userlist = () => {
  const dispatch = useDispatch();
  const [isAddModal, setIsAddModal] = useState(false);
  const { users, loading, error } = useSelector(
    (state) => state.userProfileReducer
  );
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleAddUser = (newUser) => {
    dispatch(addUser(newUser));
  };
  console.log("loading", loading);
  return (
    <div className="userlistmaindiv ">
      {loading || error? (
       <p><Laoding/></p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div
          data-aos="flip-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
          className="userlistdiv"
        >
          {users?.map((user, index) => (
            <div className="flex m-auto" key={index}>
              <UserCord key={index} user={user} />
            </div>
          ))}
        </div>
      )}

      <div className="Addbuttondiv  ">
        <div className="addbutton" onClick={() => setIsAddModal(true)}>
          <p>
            {" "}
            <IoIosAdd />
          </p>
        </div>
      </div>
      <MyModal
        isOpen={isAddModal}
        handleOpen={() => setIsAddModal(false)}
        actionName="Add User"
        renderContent={() => (
          <AddForm
            handleAddUser={handleAddUser}
            handleModalClose={() => setIsAddModal(false)}
          />
        )}
      />
    </div>
  );
};

export default Userlist;
