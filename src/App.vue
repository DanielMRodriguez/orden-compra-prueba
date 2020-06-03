<template>
  <div class="container-fluid cart pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 py-2">
          <h1 class="text-primary">Orden de compra</h1>
        </div>
        <div class="col-8">
          <h2 class="text-secondary">Carrito</h2>

          <p class="ml-auto mr-4 price-title">precio por unidad</p>
        </div>
        <hr />
        <div class="col-8">
          <div class="list-group shadow">
            <div
              v-for="item in products"
              v-bind:key="item.sku"
              href="#"
              class="list-group-item list-group-item-action"
            >
              <Product v-bind:product="item"></Product>
            </div>
          </div>
        </div>
        <div class="col-4">
          <Total v-bind:total="total" />

          <Add-product v-on:addProduct="addProduct" />
        </div>
      </div>
      <footer class="row py-2">
        <div class="col-12 text-center">
          <a href="#">Aviso de privacidad</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
import Product from './components/Product.vue'
import Total from './components/Total.vue'
import AddProduct from './components/Add-product.vue'
import getOrder from './services/getOrder.js'
// import swal from 'sweetalert'
export default {
  name: 'App',
  components: { Product, Total, AddProduct },
  data: function() {
    return {
      products: []
    }
  },
  computed: {
    total: function() {
      let total
      let acumula = 0.0
      this.products.forEach(product => {
        // total += parseInt(product.quantity) * parseInt(product.priceN)

        total = product.quantity * product.price
        acumula = acumula + total
      })
      return acumula
    }
  },
  created() {
    this.products = getOrder()
    console.log(this.products)
    // swal('Good job!', 'You clicked the button!', 'success')
  },
  methods: {
    addProduct: function(item) {
      console.log(item)
      this.products.push(item)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cart {
  background: #f2f2f2;
}
.price-title {
  width: fit-content;
  font-weight: 700;
}
</style>
