<template>
  <div class="hello" style="hello">
    <h1>{{ msg }}</h1>
    
    <!--<h1 v-if="author.name == 'Luis'">Si, es correcto!</h1>
    <h1 v-else>No, es otro</h1>
    <div v-if="author.name === 'Luis'">
    A
    </div>
    <div v-else-if="author.name === 'Adan'">
      B
    </div>
    <div v-else-if="author.name === 'Jonh Doe'">
      C
    </div>
    <div v-else>
      No esta presente
    </div>

    <li v-for="(value, key) in listaAnime" :key="key">
      {{ value.anime_id }}
    </li>-->

    <button class="btn btn-warning" @click="obtenerApi()">Ver api</button>
    <br>
    <br>
    <br>
    <div class="anime">
      <b-card
        v-for="item of listaAnime" :key="item.anime_id"
        :name="item.anime_name"
        :img-src="item.anime_img"
        img-top
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{item.anime_id}}
          {{item.anime_name}}
          {{item.anime_img}}
        </b-card-text>

        <b-button :to="'/info/' + item.anime_id">Info</b-button>
      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  props: {
    msg: String,
    id: Number,
  },
  data() {
    return {
      author: {
        name: 'Jonh Doe',
        books: [
        'vue 2 - Advance guide',
        'vue 3 - Basic guide',
        'vue 4 - The Mystery'
      ]
      },

      carros:{
        name: null,
        colores: []
      },

      listaAnime: []
    }
    
  },

  created(){
    this.obtenerApi();
  },

  methods:{
    obtenerApi(){
      let apiURL = 'https://anime-facts-rest-api.herokuapp.com/api/v1';
      this.listaAnime = [];

      this.$http.get(apiURL).then(response => {
        if(response.status == 200){
        let data = response.data;
        data.forEach((element, index) =>{
          if (index + 1  <= 20){
            this.listaAnime.push(element)
          }
        });
        }
      } )
      .catch(e => console.log(e))
      .finally(() => console.log("Siempre me ejecuto al final"))
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  background-color: #42b983;
}
.anime{
  background-color: aqua;
}
</style>
