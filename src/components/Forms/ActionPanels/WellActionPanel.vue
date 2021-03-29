<template>
  <!-- Action panel in well -->
  <div>
    <div class="action-panel">
      <div>
        <h3 class="title">Payment method</h3>
      </div>
      <div class="well">
          <div class="item-row">
            <div class="details sm:col-span-4">
              <div class="w-8 h-8 sm:col-span-1">
                <img src="@/assets/images/visa.png" alt="visa" />
              </div>
              <div>
                <p class="font-semibold">Ending with 4242</p>
                <p class="text-gray-500">Expires 12/24 &middot; Last updated on 22 Aug 2020</p>
              </div>
            </div>
            <div class="sm:col-span-1 sm:text-right">
              <button class="btn">Edit</button>
            </div>
          </div>
          <div class="item-row">
            <div class="details sm:col-span-4">
              <div class="w-8 h-8 sm:col-span-1">
                <img src="@/assets/images/amex.png" alt="amex" />
              </div>
              <div>
                <p class="font-semibold">Ending with 8282</p>
                <p class="text-gray-500">Expires 12/25 &middot; Last updated on 06 Feb 2021</p>
              </div>
            </div>
            <div class="sm:col-span-1 sm:text-right">
              <button class="btn">Edit</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$card-bg: white;
$card-shadow: $shadow;
$card-max-width: 48rem;

.sm\:col-span-1 {
  @media (min-width: 640px) {
    grid-column: span 1 / span 1;
  }
}
.sm\:col-span-4 {
  @media (min-width: 640px) {
    grid-column: span 4 / span 4;
  }
}
.sm\:text-right {
  @media (min-width: 640px) {
    text-align: right;
  }
}
.w-8 {
  width: 2rem;
}
.h-8 {
  height: 2rem;
}
.font-semibold {
  font-weight: 600;
}
.text-gray-500{
    color : $text-gray-500;
}
.action-panel {
  border-radius: 6px;
  background-color: $card-bg;
  box-shadow: $card-shadow;
  padding: 1rem;
  max-width: $card-max-width;
  width: 100%;

  @media (min-width: 640px) {
    padding: 1.75rem;
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  .well {
    background: whitesmoke;
    border-radius: 6px;
    padding: 1rem 1.5rem;
    margin-top: 1rem;

    > * + * {
        border-top: 1px solid $text-gray-300;
        margin-top : 1rem;
        padding-top: 1rem;
    }
  }
  .item-row {
    > * + * {
      margin-top: 0.5rem;
    }

    @media (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      > * + * {
        margin-top: 0;
      }
    }
  }

  .details {
    font-size: 0.875rem;
    line-height: 1.25rem;
    @media (min-width: 640px) {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;

      > * + * {
        margin-left: 1rem;
      }
    }
  }
}
</style>
