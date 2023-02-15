import React from 'react'

const UserCard = ({ user, deleteUser, setUpdateInfo, handleOpen}) => {


  const handleDelete = () => {
    deleteUser(user.id);
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpen()
  }

  return (
    <>
    <div className='card__user'>
      <h2 className='card__name'>{`${user.first_name} ${user.last_name}`}</h2>
      <div className='body__card'>
        <ul className='body__list'>
          <li><span>Email: </span>{user.email}</li>
          <li><span>Birthday: </span>{user.birthday}</li>
        </ul>
        <div className='body__button'>
          <button onClick={handleDelete}><i className='bx bxs-trash'></i></button>
          <button onClick={handleUpdate} ><i className='bx bx-edit-alt'></i></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserCard