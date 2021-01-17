<template>
  <div class="container mb-4">
    <!-- <h1 dir="ltr">{{ this.$store.state.userItem }}</h1> -->

    <!-- start loading -->
    <div class="has-text-centered" v-if="loading">
      <div class="thecube">
        <div class="cube c1"></div>
        <div class="cube c2"></div>
        <div class="cube c4"></div>
        <div class="cube c3"></div>
      </div>
    </div>
    <!-- end loading -->

    <!-- start main -->
    <div class="main mt-5">
      <div class="container">
        <div class="jumbotron">
          <div class="row has-text-centered">
            <div class="col-lg-4">
              <div class="has-text-centered">
                <div style="border-radius: 50%">
                  <figure class="image is-128x128 profile-center">
                    <img
                    src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                  />
                  </figure>
                </div>
              </div>
              <h2 class="name">{{this.$store.state.userItem&&this.$store.state.userItem.name&&this.$store.state.userItem.name.firstname}} {{ this.$store.state.userItem&&this.$store.state.userItem.name&&this.$store.state.userItem.name.lastname }} </h2>
              <h4 class="number">#{{ this.$store.state.userItem&&this.$store.state.userItem.id}}</h4>
              <!-- <h4>Center</h4> -->
            </div>
            <div class="col-lg-8 center-table">
              <table class="table center-table" dir="rtl">
                <tbody>
                  <tr>
                    <th>{{ $t('username') }}</th>
                    <td> {{ this.$store.state.userItem&&this.$store.state.userItem.username }} </td>
                  </tr>
                  <tr>
                    <th> {{ $t('email') }} </th>
                    <td> {{ this.$store.state.userItem&&this.$store.state.userItem.email }} </td>
                  </tr>
                  <tr>
                    <th> {{ $t('password') }} </th>
                    <td> {{ this.$store.state.userItem&&this.$store.state.userItem.password }} </td>
                  </tr>
                  <tr>
                    <th> {{ $t('phone') }} </th>
                    <td> {{ this.$store.state.userItem&&this.$store.state.userItem.phone }} </td>
                  </tr>
                  <tr>
                    <th> {{ $t('city') }} </th>
                    <td> {{ this.$store.state.userItem&&this.$store.state.userItem.address&&this.$store.state.userItem.address.city }} </td>
                  </tr>
                  <tr>
                    <th> {{ $t('street') }} </th>
                    <td> {{ this.$store.state.userItem&&this.$store.state.userItem.address&&this.$store.state.userItem.address.street }} </td>
                  </tr>
                  <tr>
                    <th> {{ $t('pelak') }} </th>
                    <td> {{ this.$store.state.userItem&&this.$store.state.userItem.address&&this.$store.state.userItem.address.number }} </td>
                  </tr>
                  <tr>
                    <th> {{ $t('code_posti') }} </th>
                    <td> {{ this.$store.state.userItem&&this.$store.state.userItem.address&&this.$store.state.userItem.address.zipcode }} </td>
                  </tr>
                </tbody>
              </table>
              <!-- <p class="about">
                DeAndre Jordan is a highly athletic big man who plays for the
                Dallas Mavericks. Known as a high rebound gatherer and for his
                emphatic dunks DeAndre uses his athletic ability to run the
                court and alter shots on the defensive end. DeAndre joins the
                Mavericks after 10 years playing with the Los Angeles Clippers.
              </p> -->
            </div>
          </div>
          <div class="row has-text-centered">
            <div class="is-12-widescreen"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- end main -->
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
    this.$store
      .dispatch('userItem', { id: this.$route.params.id })
      .then((resp) => {
        this.loading = false
        resp.data
      })
  },
}
</script>

<style scoped>
.profile-center{
  margin: auto;
  padding: 10px;
}
.center-table{
  margin: auto;
  width: auto;
  padding: 10px;
}

.main {
  background: #4a85d2;
}
.container {
  margin-top: 2rem;
}
.col-lg-4 {
  padding-right: 10px;
  padding-left: 10px;
}
h1,
h2,
h3,
h4 {
  text-align: center;
}
.jumbotron {
  padding: 2rem 2rem;
  background: #f9f9f9;
  box-shadow: 16px 16px 5px 0px rgba(0, 0, 0, 0.1);
}
.table td,
.table th {
  border-top: none;
}

.table thead th {
  border-bottom: none;
}
th {
  text-align: right;
  font-weight: 400px;
}
td {
  text-align: center;
  font-weight: 300px;
}
.name {
  padding-top: 0.5rem;
}
.number {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.notice {
  color: #dab804;
}
.about {
  padding-top: 1.4rem;
}
</style>
