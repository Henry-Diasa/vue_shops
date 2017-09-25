<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line" v-for="formLine in formData">
        <span class="g-form-label">{{ formLine.label }}：</span>
        <div class="g-form-input">
          <input type="text"
                 v-model="formLine.model" placeholder="请输入用户名">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
    export default {}

</script>

<style>
</style>
