<template>
  <!-- Large rounded badges -->
  <div>
    <span class="rounded-badge badge-lg badge-gray">Badge</span>

    <span class="rounded-badge badge-lg badge-red">Badge</span>

    <span class="rounded-badge badge-lg badge-orange">Badge</span>
    <span class="rounded-badge badge-lg badge-amber">Badge</span>
    <span class="rounded-badge badge-lg badge-yellow">Badge</span>

    <span class="rounded-badge badge-lg badge-lime">Badge</span>
    <span class="rounded-badge badge-lg badge-green">Badge</span>
    <span class="rounded-badge badge-lg badge-emerald">Badge</span>

    <span class="rounded-badge badge-lg badge-teal">Badge</span>
    <span class="rounded-badge badge-lg badge-cyan">Badge</span>
    <span class="rounded-badge badge-lg badge-blue">Badge</span>

    <span class="rounded-badge badge-lg badge-indigo">Badge</span>
    <span class="rounded-badge badge-lg badge-violet">Badge</span>
    <span class="rounded-badge badge-lg badge-purple">Badge</span>

    <span class="rounded-badge badge-lg badge-pink">Badge</span>
    <span class="rounded-badge badge-lg badge-rose">Badge</span>
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
.badge-lg {
  font-size: 1rem;
  padding: 0.25rem 1rem;
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
