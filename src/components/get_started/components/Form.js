function Form() {
  return (
    <div>
      <form className="signUp-form" action="" method="post">
        <label className="form-label" htmlFor="email">Email</label>
        <br />
        <input  id="email" type="email" placeholder="Email" />
        <br />
        <label  className="form-label" htmlFor="password">Password</label>
        <br />
        <input id="password" type="text" placeholder="Password" />
        <br />
        <button className="center-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default Form;
