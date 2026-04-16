<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen p-10 bg-fuchsia-800"
  >
    <Card class="w-87.5">
      <CardHeader>
        <CardTitle>Keeping It Sane!</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{{ t("welcome") }}</p>
        <div class="flex items-center justify-end">
          <Button class="mt-4">{{ t("login") }}</Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped></style>
