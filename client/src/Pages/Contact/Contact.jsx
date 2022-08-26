import React from "react";
import { useForm } from "react-hook-form";

import { PostContactForm } from "./ContactAPI";
import styled, { keyframes } from "styled-components";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      user_name: "",
      user_email: "",
      user_message: "",
    },
  });

  const sendEmail = async (data) => {
    let status = await PostContactForm(data);
    if (status === "OK") {
      alert("Message was sent successfully");
      reset();
    } else alert("A serer error was encountered. Please try again.");
  };

  return (
    <ContactWrapper>
      <StyledContactHeader>
        <h1>Contact Us</h1>
        <br />
        Need Something? Out team is here to help you! Please fill out the form
        and we'll back to you as soon as possible.
      </StyledContactHeader>
      <StyledContact>
        <form onSubmit={handleSubmit(sendEmail)}>
          <label>Name</label>
          <input
            {...register("user_name", {
              required: "This input is required.",
              minLength: { value: 2, message: "This input is required" },
            })}
            type="text"
            name="user_name"
            placeholder="Enter you name.."
          />
          {errors.user_name?.type === "required" && (
            <ErrorMessage error={errors.user_name?.message} />
          )}
          {errors.user_name?.type === "minLength" && (
            <ErrorMessage error="This field should contain at least 2 characters" />
          )}
          <label>Email</label>
          <input
            {...register("user_email", { required: "This input is required." })}
            type="email"
            name="user_email"
            placeholder="Enter you email address.."
          />
          {errors.user_email?.type === "required" && (
            <ErrorMessage error={errors.user_email?.message} />
          )}
          <label>Message</label>
          <textarea
            {...register("user_message", {
              required: "This input is required.",
              minLength: 5,
              maxLength: 250,
            })}
            name="user_message"
            placeholder="Enter you message.."
          />
          {errors.user_message?.type === "required" && (
            <ErrorMessage error={errors.user_message?.message} />
          )}
          {errors.user_message?.type === "minLength" && (
            <ErrorMessage error="This field should contain at least 5 characters" />
          )}
          {errors.user_message?.type === "maxLength" && (
            <ErrorMessage error="This field should contain 250 characters at most" />
          )}
          <input type="submit" value="Send" />
        </form>
      </StyledContact>
    </ContactWrapper>
  );
};

const ErrorMessage = (props) => {
  return <StyledErrorMessage>{props.error}</StyledErrorMessage>;
};

export default Contact;

const StyledErrorMessage = styled.p`
  color: crimson;
  font-size: 13px;
`;

const ContactWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledContact = styled.div`
  width: 400px;

  animation-duration: 1.5s;
  animation-name: ${fadeAnimation};
  animation-fill-mode: backwards;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: indigo;
      color: white;
      border: none;
    }
  }
`;

const StyledContactHeader = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
  }
`;
