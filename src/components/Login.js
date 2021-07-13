import React from "react";
import { Grid, Form, Segment, Button, Message } from "semantic-ui-react";

//@Login-------------------------------------------------------------
const Login = () => {
  const { register, errors, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true, minLength: 6 });
  }, []);
  const onSubmit = (data, e) => {};

  return (
    <Grid textAlign="center" verticalAlign="middle" className="container">
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1>
          mobilya
          <span style={{ color: "blue" }}>plan</span>
        </h1>
        <Form size="large" className="form" onSubmit={handleSubmit(onSubmit)}>
          <Segment>
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              name="email"
              onChange={(event, { name, value }) => {
                setValue(name, value);
              }}
              placeholder="email adresi"
              type="email"
              error={errors.email ? true : false}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              name="password"
              onChange={(event, { name, value }) => {
                setValue(name, value);
              }}
              placeholder="Şifre"
              type="password"
              error={errors.password ? true : false}
            />
            <Button color="blue" fluid size="large">
              Giriş Yap
            </Button>
          </Segment>
        </Form>
        <Message>Yeni misiniz ?_</Message>
      </Grid.Column>
    </Grid>
  );
};
export default Login;
