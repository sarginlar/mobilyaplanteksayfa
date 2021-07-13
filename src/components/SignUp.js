//@SignUp------------------------------------------------------------------------
const SignUp = () => {
  const [fbErrors, setFbErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const { register, errors, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register({ name: "username" }, { required: true });
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true, minLength: 6 });
  }, []);

  const onSubmit = ({ username, email, password }, e) => {
    setSubmitting(true);
    setFbErrors([]);

    const [first, last] = username.split(" ");
  };
  const displayErrors = () =>
    fbErrors.map((error, index) => <p key={index}>{error.message}</p>);

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
              icon="user"
              iconPosition="left"
              name="username"
              onChange={(event, { name, value }) => {
                setValue(name, value);
              }}
              placeholder="Kullanıcı Adı"
              type="text"
              error={errors.username ? true : false}
            />
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
              Kaydol
            </Button>
          </Segment>
        </Form>

        <Message>Zaten bir hesabın varmı ?_</Message>
      </Grid.Column>
    </Grid>
  );
};
export default SignUp;
