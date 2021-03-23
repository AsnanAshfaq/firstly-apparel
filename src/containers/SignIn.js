function SignIn() {
  return (
    <div className="container-fluid" style={{height:600}}>
      <div className="row d-flex">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row d-flex flex-column justify-content-center align-items-center w-100 m-0 p-0">
            <div className="col-3 d-flex  justify-content-center align-items-center pt-4 w-100">
              <h1 style={{ userSelect: "none" }}>FIRSTLY APPARELS</h1>
            </div>

            <div className="col-9 d-flex flex-column  justify-content-center" style={{height:500}}>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Email
                  </span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Password
                  </span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="input-group input-group-sm mb-3 mt-3">
                <button className="btn btn-secondary w-100 p-2">Sign In</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>

        {/* <div className="">
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Email
              </span>
            </div>
            <input
              type="email"
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Password
              </span>
            </div>
            <input
              type="email"
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              style={{ maxWidth: 400 }}
            />

            <div class="input-group input-group-sm mb-3 mt-3">
              <button
                className="btn btn-dark w-100 p-2"
                style={{ maxWidth: 400 }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>  */}
        {/* <div className="col-2"></div> */}
      </div>
    </div>
  );
}

export default SignIn;
