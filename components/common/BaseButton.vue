<template>
  <button :class="
      `rounded-md
      py-4
      px-8
      ${buttonClasses}
      `
    "
  >
    <div class="font-bold bg-transparent">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: { type: String, default: 'solid' },
  },
  computed: {
    buttonClasses() {
      switch (this.variant) {
        case 'solid':
          return 'bg-emeraldLake text-ebonyClay';
        case 'transparent-gradient':
          return 'bg-gradient-to-r from-emeraldLake to-deepSkyBlue text-white';
        default:
          return 'bg-emeraldLake text-ebonyClay';
      }
    },
  }
}
</script>
