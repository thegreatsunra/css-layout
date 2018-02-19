<template>
  <div class="view">
    <h1>Hello World</h1>
    <p>{{ msg }}</p>
    <p>
      <input type="submit" value="Button" class="btn">
      <input type="submit" value="Button" class="btn btn--primary">
      <input type="submit" value="Button" class="btn btn--success">
      <input type="submit" value="Button" class="btn btn--warning">
      <input type="submit" value="Button" class="btn btn--danger">
      <input type="submit" value="Button" class="btn btn--inverse">
    </p>

    <p>
      <button class="btn">Button</button>
      <button class="btn btn--primary">Button</button>
      <button class="btn btn--success">Button</button>
      <button class="btn btn--warning">Button</button>
      <button class="btn btn--danger">Button</button>
      <button class="btn btn--inverse">Button</button>
    </p>

    <p>
      <a href="#" class="btn">Button</a>
      <a href="#" class="btn btn--primary">Button</a>
      <a href="#" class="btn btn--success">Button</a>
      <a href="#" class="btn btn--warning">Button</a>
      <a href="#" class="btn btn--danger">Button</a>
      <a href="#" class="btn btn--inverse">Button</a>
    </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
