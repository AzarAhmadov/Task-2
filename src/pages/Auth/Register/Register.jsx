import React, { useEffect } from "react";
import FormGroup from "../../../ui/form/FormGroup";
import FormText from "../../../ui/form/FormText";
import Button from "../../../ui/button";
import useForm from "../../../hooks/useForm";
import { createUser } from "../../../service/authService";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/Container/Container";
import { getMyContext } from "../../../context/AuthContext";

const Register = () => {
  const { user } = getMyContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const { formData, handleInput } = useForm({
    username: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();

    createUser(formData);
  };

  return (
    <Container>
      <form className="w-full space-y-4" onSubmit={handleForm}>
        <FormGroup label="Username">
          <FormText
            onChange={handleInput}
            value={formData.username}
            name="username"
            placeholder="username"
            type="text"
          />
        </FormGroup>

        <FormGroup label="Password">
          <FormText
            onChange={handleInput}
            value={formData.password}
            name="password"
            placeholder="Password"
            type="password"
          />
        </FormGroup>

        <Button type="submit">Register</Button>
      </form>
      <Link className="mt-4" to="/login">
        Login
      </Link>
    </Container>
  );
};

export default Register;
