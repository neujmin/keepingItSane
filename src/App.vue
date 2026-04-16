<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>

<template>
  <div class="p-10">
    <Card class="w-87.5">
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a shadcn card built with Tailwind CSS.</p>
        <Button class="mt-4">Click Me</Button>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped></style>
