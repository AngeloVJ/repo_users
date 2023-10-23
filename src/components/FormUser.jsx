import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'

const FormUser = ({ createNewUser, updateInfo, updateUserById, handleClose, setUpdateInfo }) => {

    const { reset, register, handleSubmit } = useForm()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])


    const submit = data => {
        if (updateInfo) {
            //update
            updateUserById(updateInfo.id, data)
            status()
        } else {
            //create
            status()
            createNewUser(data);
        }
        reset(defaultValues)
    }

    const handleX = () => {
        reset(defaultValues)
        setUpdateInfo()
        handleClose()
    }

    const status = () => {
        setIsVisible(true)
        setTimeout(() => {
            handleClose()
            setIsVisible(false)
        }, 1600)
    }

    return (
        <div>

            <form className='form' onSubmit={handleSubmit(submit)}>
                {isVisible ?
                    <div className='alert'>
                        <h2>{updateInfo ? "Usuario Actualizado" : "Usuario creado"}</h2>
                        <i className='bx bxs-check-circle bx-burst bx-lg' ></i>
                    </div> :
                    <>
                        <h2 className='form__title'>Register User</h2>
                        <div onClick={handleX} className='form__x' >x</div>
                        <div className='form__item'>
                            <label className='form__label' htmlFor="email">Email</label>
                            <div className='form__item-input'>
                                <i className='bx bx-envelope'></i>
                                <input className='form__input' placeholder='E-mail' {...register('email')} type="email" id='email' />
                            </div>
                        </div>
                        <div className='form__item'>
                            <label className='form__label' htmlFor="password">Password</label>
                            <div className='form__item-input'>
                                <i className='bx bx-hide' ></i>
                                <input className='form__input' placeholder='Password' {...register('password')} type="password" id='password' />
                            </div>
                        </div>
                        <div className='form__item'>
                            <label className='form__label' htmlFor="firstName">First name</label>
                            <div className='form__item-input'>
                                <i className='bx bx-user-pin' ></i>
                                <input className='form__input' placeholder='First name' {...register('first_name')} type="text" id='firstName' />
                            </div>
                        </div>
                        <div className='form__item'>
                            <label className='form__label' htmlFor="lastName">Last name</label>
                            <div className='form__item-input'>
                                <i className='bx bx-user-pin' ></i>
                                <input className='form__input' placeholder='Last name' {...register('last_name')} type="text" id='lastName' />
                            </div>
                        </div>
                        <div className='form__item'>
                            <label className='form__label' htmlFor="birthday">Birthday</label>
                            <div className='form__item-input'>
                                <i className='bx bx-calendar'></i>
                                <input className='form__input' placeholder='Fecha de nacimiento' {...register('birthday')} type="date" id='birthday' />
                            </div>

                        </div>
                        <button className='form__btn'>{(updateInfo) ? 'Update' : 'Create'}</button>
                    </>
                }
            </form>


        </div>

    )
}

export default FormUser