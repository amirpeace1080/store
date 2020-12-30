<template>
  <div class="navbar-component card">
    <nav
      class="navbar card-body"
      role="navigation"
      aria-label="main navigation"
      dir="rtl"
    >
      <input
        type="checkbox"
        id="toggler"
        role="button"
        class="toggler"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      />
      <div class="navbar-brand" dir="ltr">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <label for="toggler" class="navbar-burger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </label>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <!-- <div class="navbar-start"> -->
          <a class="navbar-item"> Home </a>

          <a class="navbar-item"> Documentation </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          <!-- </div> -->
        </div>

        <!-- <div class="navbar-end"> -->
          <div class="navbar-item left-login">
            <div class="buttons">
              <a class="button is-danger">حساب کاربری</a>
            </div>
          </div>
        <!-- </div> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .navbar-menu {
    display: none;
  }
}
//We don't need checkbox to be displayed in order for it to work
.toggler {
  display: none;
}
//Below are all the functionalities:
.navbar .toggler:checked {
  //Hamburger changes to X when toggler is checked
  & + .navbar-brand .burger {
    & span:nth-child(1) {
      -webkit-transform: translateY(5px) rotate(45deg);
      transform: translateY(5px) rotate(45deg);
    }
    & span:nth-child(2) {
      opacity: 0;
    }
    & span:nth-child(3) {
      -webkit-transform: translateY(-5px) rotate(-45deg);
      transform: translateY(-5px) rotate(-45deg);
    }
  }
  //Displays menu when toggler is checked only on mobile/tablet
  & ~ .navbar-menu {
    @media screen and (max-width: 1024px) {
      display: block;
    }
  }
}

.left-login{
  position: absolute;
  left: 6px;
}
</style>
