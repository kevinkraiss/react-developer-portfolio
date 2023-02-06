import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => {
    console.log(data);
    console.log(errors);
    }
  
  return (
    <>
        <h2>Contact</h2>
        <p>Enter a first name, last name and valid email address below to contact me</p>

        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
        <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: false, minLength: 6, maxLength: 12})} />

        <input type="submit" />
        </form>
    </>
  );
}