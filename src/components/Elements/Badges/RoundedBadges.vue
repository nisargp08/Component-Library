<template>
  <!-- Rounded badges -->
  <div>
    <span class="rounded-badge badge-gray">Badge</span>

    <span class="rounded-badge badge-red">Badge</span>

    <span class="rounded-badge badge-orange">Badge</span>
    <span class="rounded-badge badge-amber">Badge</span>
    <span class="rounded-badge badge-yellow">Badge</span>

    <span class="rounded-badge badge-lime">Badge</span>
    <span class="rounded-badge badge-green">Badge</span>
    <span class="rounded-badge badge-emerald">Badge</span>

    <span class="rounded-badge badge-teal">Badge</span>
    <span class="rounded-badge badge-cyan">Badge</span>
    <span class="rounded-badge badge-blue">Badge</span>

    <span class="rounded-badge badge-indigo">Badge</span>
    <span class="rounded-badge badge-violet">Badge</span>
    <span class="rounded-badge badge-purple">Badge</span>

    <span class="rounded-badge badge-pink">Badge</span>
    <span class="rounded-badge badge-rose">Badge</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Component css
.rounded-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #f4f4f5;
  color: #71717a;
}
// Badge colors
.badge-gray {
  background-color: #f4f4f5;
  color: #71717a;
}
.badge-red {
  background-color: #fee2e2;
  color: #ef4444;
}
.badge-orange {
  background-color: #ffedd5;
  color: #f97316;
}
.badge-amber {
  background-color: #fef3c7;
  color: #f59e0b;
}
.badge-yellow {
  background-color: #fef9c3;
  color: #eab308;
}
.badge-lime {
  background-color: #ecfccb;
  color: #84cc16;
}
.badge-green {
  background-color: #dcfce7;
  color: #22c55e;
}
.badge-emerald {
  background-color: #d1fae5;
  color: #10b981;
}
.badge-teal {
  background-color: #ccfbf1;
  color: #14b8a6;
}
.badge-cyan {
  background-color: #cffafe;
  color: #06b6d4;
}
.badge-blue {
  background-color: #dbeafe;
  color: #3b82f6;
}
.badge-indigo {
  background-color: #e0e7ff;
  color: #6366f1;
}
.badge-violet {
  background-color: #ede9fe;
  color: #8b5cf6;
}
.badge-purple {
  background-color: #f3e8ff;
  color: #a855f7;
}
.badge-pink {
  background-color: #fce7f3;
  color: #ec4899;
}
.badge-rose {
  background-color: #ffe4e6;
  color: #f43f5e;
}
</style>
