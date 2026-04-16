<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
  <div class="flex items-center justify-center min-h-screen p-10">
    <Card class="w-87.5">
      <CardHeader>
        <CardTitle>Keeping It Sane!</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{{ t('welcome') }}</p>
        <Button class="mt-4">{{ t('login') }}</Button>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped></style>
