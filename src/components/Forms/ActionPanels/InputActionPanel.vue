<template>
  <!-- Action Panel with input field-->
  <div>
    <div class="action-panel">
      <h3 class="title">Update your email</h3>
      <p class="description">
        Change the email address you want associated with your account.
      </p>
      <div class="operations">
        <input class="inputField" type="email" placeholder="you@example.com"/>
        <button class="btn btn-theme save-btn">Save</button>
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
$action-color: $theme-color;

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

  .description {
    color: $text-gray-500;
    font-size: 1rem;
    line-height: 1.5rem;
    padding-top: 0.25rem;
  }

  .operations {
    margin-top: 1.5rem;
    [type="email"] {
      display: block;
      font-size: 0.875rem;
      line-height: 1.25rem;
      width: 100%;
      flex: 1 1 0%;
      padding: 0.5rem 0.75rem;
      font-weight: 400;
      border-radius: 0.375rem;
      border: 1px solid $text-gray-300;
      background-clip: padding-box;
      transition: box-shadow 0.15s ease-in-out;
      box-shadow: $shadow-sm;

      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      -webkit-box-sizing: border-box;
      /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box;
      /* Firefox, other Gecko */
      box-sizing: border-box;
      /* Opera/IE 8+ */

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.1rem
          rgba($color: rgba($action-color, 1), $alpha: 1);
      }
    }
    
    .save-btn{
        margin-top: 0.75rem;
    }

    @media(min-width : 640px){
        display: grid;
        gap : 1rem;
        align-items: center;
        grid-template-columns: repeat(6,minmax(0,1fr));

        .inputField{
            grid-column: span 3 / span 3;
        }
        .save-btn{
            margin-top : 0;
        }
    }
  }
}
</style>
