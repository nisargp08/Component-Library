<template>
  <div class="rounded-avatars">
      <div class="rounded-avatar rounded-avatar-xs">
          <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="">
      </div>
       <div class="rounded-avatar rounded-avatar-sm">
          <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="">
      </div>
       <div class="rounded-avatar rounded-avatar-md">
          <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="">
      </div>
       <div class="rounded-avatar rounded-avatar-lg">
          <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="">
      </div>
       <div class="rounded-avatar rounded-avatar-xl">
          <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.rounded-avatar{
   img{
       width: 3rem;
       height: 3rem;
       border-radius: 0.5rem;
       object-fit: cover;
   } 
}
.rounded-avatar-xs{
    img{
        width: 2rem;
       height: 2rem;
    }
}
.rounded-avatar-sm{
    img{
        width: 2.5rem;
       height: 2.5rem;
    }
}
.rounded-avatar-md{
    img{
        width: 3rem;
       height: 3rem;
    }
}
.rounded-avatar-lg{
    img{
        width: 3.5rem;
       height: 3.5rem;
    }
}
.rounded-avatar-xl{
    img{
        width: 4rem;
       height: 4rem;
    }
}
</style>