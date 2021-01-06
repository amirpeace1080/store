<template>
  <div>
    <div class="container product-detail box" style="margin: 3%">
      <br />
      <div class="columns">
        <div
          class="column is-hidden-desktop is-1-tablet is-hidden-mobile"
        ></div>

        <div class="column is-5-desktop is-5-tablet is-12-mobile">
          <img
            :src="image"
            alt="image"
            style="max-height: 500px"
          />
        </div>

        <div
          class="column is-7-desktop is-5-tablet is-12-mobile content-detail"
        >
          <dt style="font-size: 1.5em; text-transform: uppercase">
            <span class="is-pulled-right" style="font-size: 16px"> : {{ $t('product_name') }} </span>
            {{ title }}
          </dt>
          <span class="is-pulled-right" style="font-size: 16px"> : {{ $t('product_category') }} </span>
          <dt style="font-size: 1.2em; text-transform: uppercase">{{category}}</dt>
          <hr />
          <div class="price">
            <label for="price">$ </label>
            <span>{{price}}</span>
            <br /><br />
          </div>

          <p style="font-size: 1.2em">
            {{ description }}
          </p>
          <hr />
          <button class="button is-full is-warning">Add to Cart</button>
          <button class="button is-full is-primary">Buy Now</button>
          <div
            class="column is-hidden-desktop is-1-tablet is-hidden-mobile"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data() {
    return {
      id: '',
      image: '',
      title: '',
      description: '',
      price: '',
      category: '',
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.image = this.$route.query.image
    this.title = this.$route.query.title
    this.description = this.$route.query.description
    this.price = this.$route.query.price
    this.category = this.$route.query.category
  },
}
</script>

<style lang="scss">
.product-detail {
  .content-detail {
    text-align: left !important;
  }
  .discount {
    font-size: 1.2em;
    text-align: left;
    text-decoration: line-through;
  }
  .price {
    font-size: 1.7em;
    text-align: left;
  }
}
</style>
