<template>
  <div class="container">
    <div class="container">
      <h1 dir="ltr">{{ this.$store.state.users[0] }}</h1>
    </div>

    <!-- start loading -->
    <div class="has-text-centered" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-5x"></i>
    </div>
    <!-- end loading -->

    <!-- start main -->
    <div class="main-users mt-5" dir="rtl">
      <div class="columns is-multiline">
        <div
          class="column is-6-tablet is-4-desktop is-4-widescreen"
          v-for="(user, index) in this.$store.state.users"
          :key="index"
        >
          <!-- <div class="container main"> -->
          <div class="container mr-2 ml-2">
            <div class="card">
              <figure class="image is-128x128 mt-2">
                <img
                  src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                  alt="Person"
                  class="is-rounded card__image"
                />
              </figure>
              <p class="card__name">
                {{ user && user.name && user.name.firstname }}
                {{ user && user.name && user.name.lastname }}
              </p>
              <div class="grid-container">
                <div class="grid-child-posts">{{ $t('city') }} : {{user&&user.address&&user.address.city}} </div>

                <div class="grid-child-followers">{{$t('street')}} : {{user&&user.address&&user.address.street}} </div>
              </div>
              <ul class="social-icons">
                <li>
                  <a :href="`https://gmail.com/${user.email}`"><i class="fa fa-envelope"></i></a>
                </li>
                <!-- <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li> -->
                <!-- <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-codepen"></i></a>
                </li> -->
              </ul>
              <button class="btn draw-border">{{ $t('message') }}</button>
              <button class="btn draw-border">
                <nuxt-link :to="localePath({path: `users/${user.id}`})">{{ $t('detail_all') }}</nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    this.loading = true
    this.$store.dispatch('users').then((resp)=>{
    this.loading = false
      resp.data
    })
  },
}
</script>

<style lang="scss" scoped>

.main {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Baloo Paaji 2', cursive;
}

.card {
  background-color: #222831;
  height: 31rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
}

.card__name {
  margin-top: 15px;
  font-size: 1.5em;
}

.card__image {
  // height: 160px;
  // width: 160px;
  border-radius: 50%;
  border: 5px solid #272133;
  // margin-top: 20px;
  box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
}

.draw-border {
  box-shadow: inset 0 0 0 4px #58cdd1;
  color: #58afd1;
  -webkit-transition: color 0.25s 0.0833333333s;
  transition: color 0.25s 0.0833333333s;
  position: relative;
}

.draw-border::before,
.draw-border::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: '';
  pointer-events: none;
  position: absolute;
  width: 0rem;
  height: 0;
  bottom: 0;
  right: 0;
}

.draw-border::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
}

.draw-border::after {
  border-top-width: 4px;
  border-right-width: 4px;
}

.draw-border:hover {
  color: #ffe593;
}

.draw-border:hover::before,
.draw-border:hover::after {
  border-color: #eb196e;
  -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
  transition: border-color 0s, width 0.25s, height 0.25s;
  width: 100%;
  height: 100%;
}

.draw-border:hover::before {
  -webkit-transition-delay: 0s, 0s, 0.25s;
  transition-delay: 0s, 0s, 0.25s;
}

.draw-border:hover::after {
  -webkit-transition-delay: 0s, 0.25s, 0s;
  transition-delay: 0s, 0.25s, 0s;
}

.btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 500 1.1rem 'Vazir', sans-serif;
  padding: 0.75em 2em;
  letter-spacing: 0.05rem;
  margin: 1em;
  width: 13rem;
}

.btn:focus {
  outline: 2px dotted #55d7dc;
}

.social-icons {
  padding: 0;
  list-style: none;
  margin: 1em;
}

.social-icons li {
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1em;
}

.social-icons i {
  color: #fff;
  position: absolute;
  top: 0.95em;
  left: 0.96em;
  transition: all 265ms ease-out;
}

.social-icons a {
  display: inline-block;
}

.social-icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: ' ';
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #ff003c, #c648c8);
  transition: all 265ms ease-out;
}

.social-icons a:hover:before {
  transform: scale(0);
  transition: all 265ms ease-in;
}

.social-icons a:hover i {
  transform: scale(2.2);
  -ms-transform: scale(2.2);
  -webkit-transform: scale(2.2);
  color: #ff003c;
  background: -webkit-linear-gradient(45deg, #ff003c, #c648c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 265ms ease-in;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  font-size: 1.2em;
}
</style>
