<template>
  <div class="meeting-scheduler">
    <div class="scheduler-header">
      <h3 class="scheduler-title">
        <Icon name="mdi:calendar-clock" />
        무료 상담 예약
      </h3>
      <p class="scheduler-desc">
        30분 화상 미팅으로 프로젝트를 상담해 보세요.
      </p>
    </div>

    <!-- Popup Button -->
    <button
      @click="openCalendlyPopup"
      class="btn btn-meeting"
    >
      <Icon name="mdi:video-outline" />
      상담 예약하기
    </button>

    <!-- Alternative: Inline Widget (uncomment if needed) -->
    <!--
    <ClientOnly>
      <div
        class="calendly-inline-widget"
        :data-url="calendlyUrl"
        style="min-width: 320px; height: 630px;"
      />
    </ClientOnly>
    -->
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const calendlyUrl = computed(() =>
  config.public.calendlyUrl || 'https://calendly.com/evergreen-dev/30min'
)

// useCalendly composable from nuxt-calendly
const calendly = useCalendly()

const openCalendlyPopup = () => {
  calendly.initPopupWidget({
    url: calendlyUrl.value,
    prefill: {
      name: '',
      email: ''
    }
  })
}

// Initialize inline widget if using that approach
// onMounted(() => {
//   calendly.initInlineWidget()
// })
</script>

<style scoped>
.meeting-scheduler {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.scheduler-header {
  text-align: left;
}

.scheduler-title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--accent-color);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.scheduler-desc {
  color: var(--text-color);
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.5;
}

.btn-meeting {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: 0.9rem 1.5rem;
  background: rgba(74, 243, 255, 0.1);
  border: 1px solid rgba(74, 243, 255, 0.4);
  border-radius: 12px;
  color: var(--accent-color);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  /* max-width is removed to fill container or controlled by parent */
}

.btn-meeting:hover {
  background: rgba(74, 243, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(74, 243, 255, 0.3);
  border-color: var(--accent-color);
}

.btn-meeting:active {
  transform: translateY(0);
}

/* Calendly inline widget styling */
:deep(.calendly-inline-widget) {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
