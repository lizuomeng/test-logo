<script setup lang="ts">
import { elementLocale } from '@/locales/index'
</script>

<template>
  <el-config-provider :locale="elementLocale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </el-config-provider>
</template>

<style lang="scss">
@use '~/assets/scss/main.scss';
</style>
