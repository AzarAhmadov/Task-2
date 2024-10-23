import React, { useEffect } from "react";
import { Button } from "../../../ui";
import { FormGroup, FormText } from "../../../ui/form";
import useForm from "../../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/Container/Container";
import useFetch from "../../../hooks/useFetch";
import { auth } from "../../../api/authEndPoint";
import { getMyContext } from "../../../context/AuthContext";

const Login = () => {
  const { user, setUser } = getMyContext();
  const navigate = useNavigate();

  const { formData, handleInput } = useForm({
    username: "",
    password: "",
  });

  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_BASE_URL}/${auth.users}`
  );

  const handleForm = (e) => {
    e.preventDefault();

    const foundUser = data.find(
      (user) =>
        user.username === formData.username.trim() &&
        user.password === formData.password.trim()
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser);
      navigate("/"); 
    } else {
      alert("Invalid username or password");
    }
  };


  useEffect(() => {
    if (user) {
      navigate("/"); 
    }
  }, [user, navigate]);

  return (
    <Container>
      <form className="w-full space-y-4" onSubmit={handleForm}>
        <FormGroup label="Username">
          <FormText
            onChange={handleInput}
            value={formData.username}
            name="username"
            placeholder="Username"
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

        <Button loading={loading} type="submit">
          {loading ? "Loading.." : "Login"}
        </Button>
      </form>
      <Link className="mt-4" to="/register">
        Register
      </Link>
    </Container>
  );
};

export default Login;
