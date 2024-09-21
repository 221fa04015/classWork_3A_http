const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nameday's Calender</title>
    <link rel="stylesheet" href="./assestes/css/style.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
  </head>
  <style>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.header-con {
  position: fixed;
  background-color: #229799;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100vw;
}

.header-text {
  color: #F5F5F5;
  font-size: 2rem;
  font-weight: 1000;
}

#btn {
  background-color: #eeeeee;
  border: 2px solid #229799;
  padding: 5px;
  color: #0e4b40d8;
  margin-left: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
}

#btn:hover {
  transform: scale(1.3, 0.9);
  border: 2px solid #e2e9e8;
  box-shadow: 0 2px 10px rgba(19, 190, 176, 0.766);
}

#change-image-btn:hover {
  transform: scale(0.9) translateY(-10px);
  border: 2px solid #e2e9e8;
  box-shadow: 0 2px 10px rgba(19, 190, 176, 0.766);
}

#change-image-btn {
  background-color: #eeeeee;
  border: 2px solid #229799;
  padding: 3px;
  color: #0e4b40d8;
  /* margin-left: 100px; */
  /* margin-bottom: 10px; */
  border-radius: 5px;
}

h2 {
  /* font-size: 0.5rem; */
  font-weight: 5000;
  color: #229799;
  margin-bottom: 2rem;
}

.header-nav a {
  color: #F5F5F5;
  text-decoration: none;
  padding: 0 1rem 0 1rem;
  font-weight: 700;
}

#clock {
  color: #eeeeee;
  font-size: 1rem;
  font-weight: bolder;
  background: rgba(4, 86, 82, 0.1);
  padding: 10px;
  border-radius: 10px;
  margin-right: 15px;
}

.footer-con {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer {
  position: relative;

  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background-color: #229799;
}

.footer .social {
  text-align: center;
  padding: 0 0 25px 10px;
  color: white;
}

.footer .social a {
  font-size: 24px;
  color: white;
  border: 2px solid #eeeeee;
  width: 40px;
  height: 40px;
  line-height: 38px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  margin: 0 8px;
  box-shadow: inset 0 0 10px rgb(14, 223, 192), 0 0 10px rgb(29, 219, 181);
  transition: 0.3s ease;
}

.footer .social a:hover {
  transform: scale(0.9) translateY(-10px);
  border: 2px solid #eeeeee;
}



.container {
  text-align: center;
  margin-bottom: 5px;
}

a {
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
  transition: color 0.3s;
}

a:hover {
  color: #0056b3;
}

/* .card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
} */

.hidden {
  display: none;
}

.form-group {
  margin-bottom: 15px;
  color: #44d3b9;
}

p {
  color: #229799;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.error-message {
  color: red;
  font-size: 12px;
  display: none;
  margin-top: 5px;
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  position: absolute;
  right: 20px;
  top: 70px;
  text-align: left;
  z-index: 1000;
}

.hidden {
  display: none;
}

.header-con {
  background-color: #229799;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.header-text {
  color: #F5F5F5;
  font-size: 2rem;
  font-weight: 1000;
}

.header-nav a {
  color: #F5F5F5;
  text-decoration: none;
  padding: 0 1rem 0 1rem;
  font-weight: 700;
}

main {
  /* background-color: #F5F5F5; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

/* section-1-------------------------------------------------------------------- */
.section-1 {
  height: 70vh;
  width: 100%;
  background-color: #fff;
  padding: 30px 70px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin-top: 7rem;
  /* margin: 0 auto; */
}

/* .con {
  padding-top: 9rem;
} */

.con h1 {
  font-size: 2.5rem;
  font-weight: 5000;
  color: #229799;
  margin-bottom: 2rem;
}

.date-picker label,
.country-picker label {
  margin-bottom: 1rem;
  color: #48CFCB;
  font-size: large;
}

input {
  border: 1px solid #44d3b9;
}

.date-picker,
.country-picker {
  width: 400px;
  margin-bottom: 1rem;
}

.country-picker select {
  max-width: 400px;
}

select {
  width: 100%;
  height: 36px;
  /* appearance: none; */
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid #44d3b9;
  outline: none;
}

#fetch-nameday {
  background-color: #f0ececbf;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 150px;
  color: #229799;
  font-size: larger;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  border: 2px solid #e2e9e8;
  box-shadow: 0 3px 10px rgba(14, 226, 184, 0.527);
  cursor: pointer;

}

.nameday-display {
  color: #229799;
  font-size: larger;
  font-family: 'Times New Roman', Times, serif;
}

#fetch-nameday:hover {
  transform: scale(1) translateY(-10px);
  border: 2px solid #e2e9e8;
  box-shadow: 0 2px 10px rgba(19, 190, 176, 0.766);
}



.hidden {
  display: none;
}

#profile-img {
  border-radius: 50%;
  /* padding-top: 15px; */
}



/* media query-------------------------------------- */
@media screen and (max-width: 426px) {

  .date-picker,
  .country-picker {
    width: 300px;
    margin-bottom: 1rem;
  }

  .section-1 {
    margin-left: 50px;
  }

  body {
    height: 100vh;
  }

  .header-con {
    width: 500px;
    position: relative;
    font-size: medium;
  }

  .header-nav a {
    font-size: 15px;
  }

  .footer {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    width: 500px;

  }

  #fetch-nameday {
    margin-left: 100px;
  }
}
  </style>
  <body>
    <header>
      
      <div class="header-con">
        <div class="header-text">Nameday's Calendar</div>
        <div class="container">
          <nav class="header-nav">
            <a href="#" id="open-login">Login</a>
            <a href="#" id="open-signup">SignUp</a>
            <a href="#">DashBoard</a>
            <a href="#" id="profile-link">Profile</a>
            <img id="profile-img" src="./assestes/img/Screenshot 2024-09-03 144350.png" height="50px" width="50px" alt="Profile Picture" class="hidden" />
            <button id="change-image-btn" class="hidden">Change</button>


          </nav>
        </div>
      </div>


          </nav>
        </div>
        <div id="login-card" class="card hidden">
          <h2>Login</h2>
          <form id="login-form">
            <div class="form-group">
              <label for="login-email">Email:</label>
              <input type="email" id="login-email" required />
              <span class="error-message" id="login-email-error"></span>
            </div>
            <div class="form-group">
              <label for="login-password">Password:</label>
              <input type="password" id="login-password" required />
              <span class="error-message" id="login-password-error"></span>
            </div>
            <button id="btn" type="submit">Login</button>
          </form>
          <p>
            Don't have an account?
            <a href="#" id="open-signup-from-login">Sign up</a>
          </p>
        </div>
        <div id="signup-card" class="card hidden">
          <h2>Sign Up</h2>
          <form id="signup-form">
            <div class="form-group">
              <label for="signup-email">Email:</label>
              <input type="email" id="signup-email" required />
              <span class="error-message" id="signup-email-error"></span>
            </div>
            <div class="form-group">
              <label for="signup-password">Password:</label>
              <input type="password" id="signup-password" required />
              <span class="error-message" id="signup-password-error"></span>
            </div>
            <div class="form-group">
              <label for="signup-confirm-password">Confirm Password:</label>
              <input type="password" id="signup-confirm-password" required />
              <span
                class="error-message"
                id="signup-confirm-password-error"
              ></span>
            </div>
            <button id="btn" type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <a href="#" id="back-to-login">Login</a>
          </p>
        </div>
      </div>
    </header>

    <main>
      <section class="section-1">
        <div class="con">
          <h1>Nameday Lookup</h1>
          <div class="date-picker">
            <label for="date">Select Date:</label>
            <input type="date" id="date" />
          </div>
          <div class="country-picker">
            <label for="country">Select Country:</label>
            <select id="country">
              <option value="us">United States</option>
              <option value="gr">Greece</option>
              <option value="it">Italy</option>
              <option value="se">Sweden</option>
              <option value="at">Austria</option>
              <option value="bg">Bulgaria</option>
              <option value="cz">Czech Republic</option>
              <option value="de">Germany</option>
              <option value="dk">Denmark</option>
              <option value="ee">Estonia</option>
              <option value="es">Spain</option>
              <option value="fi">Finland</option>
              <option value="fr">France</option>
              <option value="hr">Croatia</option>
              <option value="hu">Hungary</option>
              <option value="lt">Lithuania</option>
              <option value="lv">Latvia</option>
              <option value="pl">Poland</option>
              <option value="ru">Russia</option>
              <option value="sk">Slovakia</option>
            </select>
          </div>
          <button id="fetch-nameday">Get Nameday</button>
          <div class="nameday-display">
            <h2>
              Nameday in <span id="display-country"></span> on
              <span id="display-date"></span>:
            </h2>
            <p id="nameday">

            </p>
          </div>
        </div>
      </section>
      <section class="section-2"></section>
    </main>
<footer class="footer">
      <div class="footer-con">

        <div class="social">
          <a href="#" style="text-decoration: none"
            ><i class="bx bxl-facebook"></i
          ></a>
          <a href="#" style="text-decoration: none"
            ><i class="bx bxl-linkedin"></i
          ></a>
          <a href="#" style="text-decoration: none"
            ><i class="bx bxl-twitter"></i
          ></a>
          <a href="#" style="text-decoration: none"
            ><i class="bx bxl-instagram"></i
          ></a>
        </div>
        <div id="clock">Loading...</div>
      </div>
    </footer>
    <script src="./assestes/js/script.js"></script>
  </body>
</html>
`)
   
    res.end()
})

server.listen(9020, ()=>{
    console.log("Server is running @ http://localhost:9020")
})