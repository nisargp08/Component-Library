<template>
  <div class="circular-avatars">
      <div class="circular-avatar circular-avatar-xs">
          <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
      </div>
      <div class="circular-avatar circular-avatar-sm">
          <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
      </div>
      <div class="circular-avatar circular-avatar-md">
          <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
      </div>
      <div class="circular-avatar circular-avatar-lg">
          <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
      </div>
      <div class="circular-avatar circular-avatar-xl">
          <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.circular-avatar{
   img{
       width: 1.5rem;
       height: 1.5rem;
       border-radius: 9999px;
       object-fit: cover;
   } 
}
.circular-avatar-xs{
    img{
        width: 1.5rem;
       height: 1.5rem;
    }
}
.circular-avatar-sm{
    img{
        width: 2rem;
       height: 2rem;
    }
}
.circular-avatar-md{
    img{
        width: 2.5rem;
       height: 2.5rem;
    }
}
.circular-avatar-lg{
    img{
        width: 3rem;
       height: 3rem;
    }
}
.circular-avatar-xl{
    img{
        width: 3.5rem;
       height: 3.5rem;
    }
}
</style>