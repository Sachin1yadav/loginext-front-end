import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteUseraction, editUseraction } from "../redux/UserProfile/Userprofile.action";
import { MyModal } from "./MyModal";
import EditForm from "./EditForm";
import "../App.css"
import { FaHeart } from "react-icons/fa";
const UserCord = ({ user }) => {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleLikeClick = () => {
    const updatedUser = { ...user, IsLink: !user.IsLink };
    dispatch(editUseraction(updatedUser));
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const editUserDetails = () => {
    dispatch(editUseraction(editedUser));
    setEditModalOpen(false);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const deleteUser = () => {
    dispatch(deleteUseraction(user.id));
    setDeleteModalOpen(false);
  };


  return (
    <>
      <div className="userdiv ">
        <div className="userdivimg">
          <img
            className="w-[100px] h-[100px]  mt-auto  mb-2"
            src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${user?.username}`}
            alt=""
          />
        </div>
        <div className="usercorddetails  ">
          <h3 className="text-start font-bold">{user?.name}</h3>
          <div className="usercordcontact">
            <p>
              <MdOutlineMailOutline />
            </p>
            <p> {user?.email}</p>
          </div>
          <div className="usercordcontact">
            <p>
              <IoCallOutline />
            </p>
            <p> {user?.phone}</p>
          </div>
          <div className="usercordcontact">
            <p>
              <BsBrowserChrome />
            </p>
            <p> {user?.website}</p>
          </div>
        </div>
        <div className="usercordactiondiv ">
        <div
            onClick={handleLikeClick}
            className="usercordactionsinglediv1"
          >
            {user.IsLink?(<p><FaHeart/></p>):(<p> <FaRegHeart /></p>)}
           
          </div>
          <div
            onClick={handleEditClick}
            className="usercordactionsinglediv2"
          >
            <CiEdit />
          </div>
          <div
            onClick={handleDeleteClick}
            className="usercordactionsinglediv"
          >
            <MdDelete />
          </div>
        </div>
      </div>
      <MyModal
        isOpen={isEditModalOpen}
        handleOpen={() => setEditModalOpen(false)}
        action={editUserDetails}
        actionName="Edit User"
        renderContent={() => (
          <EditForm user={editedUser} handleInputChange={handleInputChange} />
        )}
        page="Edit"
      />
      <MyModal
        isOpen={isDeleteModalOpen}
        handleOpen={() => setDeleteModalOpen(false)}
        action={deleteUser}
        actionName="Delete User"
        renderContent={() => <p>Are you sure you want to delete this user?</p>}
        page="Confrime Delete"
      />
    </>
  );
};

export default UserCord;
