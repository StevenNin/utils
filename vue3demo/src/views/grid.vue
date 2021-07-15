<template>
  <div class="grid">
      <div class="item"><p>1</p></div>
      <div class="item"><p>2</p></div>
      <div class="item"><p>3</p></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            index: 1
        }
    },
    computed() {

    }
}
</script>

<style  scoped>
    .grid {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        /* grid-template-columns: 150px 1fr 2fr; */
        /* grid-template-columns: repeat(auto-fill, 100px); */


        grid-template-rows: 100px 100px 100px;
        /* grid-template-columns: 33.33% 33.33% 33.33%;
        grid-template-rows: 33.33% 33.33% 33.33%; */
    }

    .item {
        width: 50px;
        height: 50px;
        border: 1px red solid;
        box-sizing:  border-box;
    }
</style>