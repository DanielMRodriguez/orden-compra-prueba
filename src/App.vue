<template>
  <router-view></router-view>
</template>

<script>
// import Home from "./components/Home.vue";
// import Product from './components/Product.vue'
// import Total from './components/Total.vue'
// import AddProduct from './components/Add-product.vue'
import getOrder from './services/getOrder.js'
import swal from 'sweetalert'
export default {
  name: 'App',
  // components: { Product, Total, AddProduct },
  data: function() {
    return {
      products: [
        {
          name: 'Cardor usb de 3m (M-M)"',
          quantity: 5,
          price: 100.0,
          sku: '69725'
        }
      ]
    }
  },
  computed: {
    total: function() {
      let total
      let acumula = 0.0
      if (this.products.length > 0) {
        this.products.forEach(product => {
          total += parseInt(product.quantity) * parseInt(product.priceN)

          total = product.quantity * product.price
          acumula = acumula + total
        })
      }
      return acumula
    }
  },
  mounted() {
    // this.products = this.obtenerDatos().then(data => {
    //   if (data.error) {
    //     swal('Hubo un error al cargar los datos', 'error')
    //   }
    //   return data
    // })

    this.products = getOrder()
    console.log(this.products)

    // swal('Good job!', 'You clicked the button!', 'success')
  },
  methods: {
    addProduct: function(item) {
      console.log(item)
      this.products.push(item)
    },
    // obtenerDatos: function() {
    //   return getOrder()
    // },
    deleteProduct: function(index) {
      swal({
        title: '¿Estas seguro que deseas eliminar este elemento?',
        text:
          'Cuando elimines este elemento tendrás que buscarlo de nuevo para poder agregarlo',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(response => {
        if (response) {
          this.products.splice(index, 1)
          swal('Eliminaste el producto', {
            icon: 'success'
          })
        }
      })
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
